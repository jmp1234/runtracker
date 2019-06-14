import React, { Component, Fragment } from 'react';
import axios from 'axios';
import MapNav from '../nav_folder/map_nav';
import MyMapComponent from './map';
import apiKey from '../googlemap';
import WatchBtns from './button.js';
import haversine from 'haversine';
import MapLoader from './maploader';
import MapStatsContainer from './map_stats_container';
import MilesRun from './run_stats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './run_map.scss';
import '../total_stats/total_stats.scss';

class RunMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLatLng: {},
            startingCoords: {},
            watchId: null,
            map: null,
            status: 'stopped',
            start: null,
            elapsed: 0,
            distance: 6,
            mileCounter: 1,
            pace: 100,
            calories: 0,
            renderPage: 'map',
            mileStats: [],
            previousTime: 0,
            distanceTraveled: 0,
            coordinateArray: [],
            run_id: null,
            weight: 0,
            city: null,
            transition: {
                width: '0px',
            },
            milesRunHidden: true,
            buttonName: 'left',
            paceInSeconds: '00',
            paceInMinutes: 0,
            errorMessage: null,
        }

        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this)
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
        this.countCalories = this.countCalories.bind(this);
    }

    getWeight() {
        axios.get('/api/getuser.php').then(resp => {
            let { weight } = resp.data;
            weight = (parseFloat(weight) * .4536).toFixed(2);
            this.setState({
                weight
            });
        })
    }

    componentDidMount() {
        this.getGeoLocation();
        this.getWeight();
    }

    componentWillUnmount() {
        clearTimeout(this.calorieTimeout)
        clearTimeout(this.timeout);
        clearTimeout(this.paceTimeout);
        navigator.geolocation.clearWatch(this.state.watchId);
        if (this.state.status === 'running') {
            this.deleteCurrentRun();
        }
    }

    deleteCurrentRun = () => {
        const data = {
            id: this.state.run_id
        }
        axios.post('/api/deleterun.php', data).then(resp => {
            console.log(resp)
        })
    }

    getCityName(lat, lng) {
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lng}&key=76e6a71e44ff40759963af6dacacc318&pretty=1`).then(resp => {
            if (resp.data) {
                this.setState({
                    city: resp.data.results[0].components.city
                })
            } else {
                this.setState({
                    city: 'none'
              })
            }
        }).catch(error => {
            this.setState({
                city: 'none'
            })
            console.log(error.response)
        })
    }

    //create a new run_id when the start button is clicked
    createNewRun = () => {
        const { lat, lng } = this.state.startingCoords;
        const data = {
            lat,
            lng,
            city: this.state.city
        };
        axios.post('/api/create_new_id.php', data).then(resp => {
            this.setState({
                run_id: resp.data.id
            })
        })
    }

    //get the per mile data, send it to database, and set the state
    postlatestMile(miles) {
        let { previousTime, elapsed, mileCounter, run_id, distanceTraveled } = this.state;
        const data = {
            run_id,
            time: Math.floor((elapsed - previousTime) / 1000),
            mileage: miles,
        }
        axios.post(`/api/addpermile.php`, data).then((resp) => {
            mileCounter = mileCounter + 1;
            if (this.state.status != 'paused') {
                this.setState({
                    mileCounter,
                    previousTime: elapsed
                })
            }
        }).then(() => {
            if (this.state.status != 'paused') {
                this.getMileData();
            }
        })
    }

    //display per mile data to the table
    getMileData() {
        const { run_id } = this.state;
        if (run_id) {
            axios.post('/api/getpermile.php', { run_id }).then(resp => {
                const { mileTime } = resp.data;
                const mileStats = mileTime.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.mile}</td>
                            <td>{item.time}</td>
                        </tr>
                    )
                });
                this.setState({
                    mileStats: [...mileStats]
                })
            })
        }
    }

    //current run data is sent to database when the user ends the run
    postCurrentRun = () => {
        const { distanceTraveled, pace, calories, run_id, city, elapsed, previousTime, miles } = this.state;
        const currentRunData = {
            distance: distanceTraveled,
            time: Math.floor(elapsed / 1000),
            pace: pace,
            calories: calories,
            run_id,
        }

        const perMileData = {
            run_id,
            time: Math.floor((elapsed - previousTime) / 1000),
            mileage: distanceTraveled,
        }

        axios.post('/api/addrun.php', currentRunData).then(() => {
            axios.post('/api/addpermile.php', perMileData)
        }).then(() => {
            this.props.history.push(`/results/${run_id}`);
        })
    }

    //get the current location
    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.getCityName(position.coords.latitude, position.coords.longitude);
                this.setState({
                    currentLatLng: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    startingCoords: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                })
            }, error => {
                  let errorMessage = '';
                  switch(error.code) {
                      case error.PERMISSION_DENIED:
                          errorMessage = 'Please enable location services in your browser so your run can be tracked.';
                          break;
                      case error.POSITION_UNAVAILABLE:
                          errorMessage = 'Location information is unavailable.';
                          break;
                      case error.TIMEOUT:
                          errorMessage = 'The request to find your current location has timed out.';
                          break;
                      case error.UNKNOWN_ERROR:
                          errorMessage = 'An unknown error occurred.';
                          break;
                  }
                  this.setState({
                    errorMessage
                  })
            },
                { enableHighAccuracy: true }
            )
        }
    }

    // geoLocationInterval = () => {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         this.monitorUserDistance(position.coords.latitude + ((this.state.coordinateArray.length + 1 )/ 7000), position.coords.longitude + ((this.state.coordinateArray.length + 1) / 7000));
    //     })
    // }

    // //when you click the button, start tracking
    // startTracking = () => {
    //     const watchId = setInterval(this.geoLocationInterval, 200);
    //     this.setState({
    //         watchId: watchId
    //     })
    // }

    startTracking = () => {
        const watchId = navigator.geolocation.watchPosition(position => {
            if(position.coords.accuracy < 15) {
              this.monitorUserDistance(position.coords.latitude, position.coords.longitude);
            }
        }, error => {
        }, { enableHighAccuracy: true });

        this.setState({
            watchId: watchId
        })
    }

    //when you click the stop button, stop tracking
    stopTracking = () => {
        navigator.geolocation.clearWatch(this.state.watchId);
        // clearInterval(this.state.watchId);
    }

    stopCalorie = () => {
        clearTimeout(this.countCalories);
    }

    setBeginningCoordinates(lat, lng) {
        this.setState({
            coordinateArray: [
                {
                    lat,
                    lng
                }
            ],
            currentLatLng: {
                lat,
                lng
            },
        })
    }

    //track distance traveled. Updates everytime movement is tracked.
    monitorUserDistance = (newLatitude, newLongitude) => {
        //set the first distance coordinate:
        if (this.state.coordinateArray.length === 0) {
            this.setBeginningCoordinates(newLatitude, newLongitude)
        } else {
            let { lat, lng } = this.state.currentLatLng
            const distanceCalculation = this.calcDistanceHaversine(lat, lng, newLatitude, newLongitude);
            // if (distanceCalculation < 0.015) {
                const { distance, distanceTraveled, mileCounter } = this.state;
                let newDistance = distanceTraveled + distanceCalculation;
                if (distanceTraveled && distanceTraveled - mileCounter >= 0) {
                    this.postlatestMile(mileCounter);
                }
                if (distanceCalculation !== 0) {
                    this.setState({
                        coordinateArray: [...this.state.coordinateArray, {
                            lat: newLatitude,
                            lng: newLongitude
                        }],
                        distanceTraveled: newDistance,
                        currentLatLng: {
                            lat: newLatitude,
                            lng: newLongitude
                        }
                    })
                } else {
                    this.setState({
                        distanceTraveled: newDistance,
                        currentLatLng: {
                            lat: newLatitude,
                            lng: newLongitude
                        }
                    })
                }
            // }
        }
    }

    //convert distance to miles formula
    calcDistanceHaversine(lat1, lon1, lat2, lon2) {
        const start = { latitude: lat1, longitude: lon1 };
        const end = { latitude: lat2, longitude: lon2 };
        return haversine(start, end, { unit: 'mile' });
    }

    startWatch = () => {
        this.postlatestMile();
        this.refs.child.start();
    }

    start() {
        if (this.state.currentLatLng.lat) {
            if (!this.state.run_id) {
                this.createNewRun()
            }
            this.startTracking();
            const { start, elapsed, calories, weight } = this.state;
            let newStart = new Date().getTime();
            let newCalories = calories;
            if (start) {
                newStart -= elapsed;
            }
            this.setState({
                status: 'running',
                start: newStart,
            });
            setTimeout(() => {
                this.update();
            }, 10);
            setTimeout(() => {
                this.countCalories();
            }, 1000);
            this.calculatePace();
        }
    }

    pause() {
        this.stopTracking();
        this.stopCalorie();
        this.setState({
            status: 'paused'
        })
    }

    reset() {
        const { elapsed, distanceTraveled, mileCounter } = this.state;
        this.postCurrentRun();
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        })
    }

    clickMap = () => {
        this.setState({
            renderPage: 'map'
        })
    }

    clickMiles = () => {
        this.setState({
            renderPage: 'Miles'
        })
    }

    update() {
        const { status, start, calories, weight } = this.state;
        if (status === 'running') {
            this.setState({
                elapsed: new Date().getTime() - start,
            })
            this.timeout = setTimeout(this.update, 10);
        }
    }

    // MET 6 = 15min mile      8.3   12min mile      9.8 10min mile
    // 11.8    7min mile       12.3  7min mile
    // 12.8    6.5min mile     16.0  5.5min mile

    countCalories() {
        const { status, calories, weight, elapsed, distanceTraveled } = this.state;
        if (status === 'running') {
            const paceInMinutes = isNaN(Math.trunc(elapsed / (60000 * distanceTraveled))) ? 0 : Math.trunc(elapsed / (60000 * distanceTraveled));
            let metBurn = 0;
            if (paceInMinutes >= 20) {
                metBurn = 0
            } else if (paceInMinutes >= 15) {
                metBurn = 6
            } else if (paceInMinutes >= 12) {
                metBurn = 8.3
            } else if (paceInMinutes >= 10) {
                metBurn = 9.8
            } else if (paceInMinutes >= 8) {
                metBurn = 11.8
            } else if (paceInMinutes >= 7) {
                metBurn = 12.3
            } else if (paceInMinutes >= 6) {
                metBurn = 12.8
            } else {
                metBurn = 16
            }
            let updateCalories = (((weight * metBurn) / 3600) + calories);
            this.setState({
                calories: updateCalories
            })
            this.calorieTimeout = setTimeout(this.countCalories, 1000);
        }
        if (status === 'paused') {
            clearTimeout(this.countCalories);
        }
    }

    handleMilesRun = () => {
        if (this.state.milesRunHidden) {
            this.setState({
                transition: {
                    width: '100vw'
                },
                milesRunHidden: false,
                buttonName: 'right'
            })
        } else {
            this.setState({
                transition: {
                    width: '0vw'
                },
                milesRunHidden: true,
                buttonName: 'left'
            })
        }
    }

    calculatePace = () => {
      const { elapsed, distanceTraveled} = this.state;
      const paceInMinutes = isFinite(Math.trunc(elapsed / (60000 * distanceTraveled))) ? Math.trunc(elapsed / (60000 * distanceTraveled)) : 0;
      let paceInSeconds = isFinite(((elapsed / (60000 * distanceTraveled) - paceInMinutes) * 60).toFixed(0)) ? ((elapsed / (60000 * distanceTraveled) - paceInMinutes) * 60).toFixed(0) : '00';
      paceInSeconds = paceInSeconds !== '00' && paceInSeconds < 10 ? `0${paceInSeconds}` : paceInSeconds;
      this.setState({
        paceInMinutes,
        paceInSeconds
      })
      this.paceTimeout = setTimeout(this.calculatePace, 1000);
      if (status === 'paused') {
        clearTimeout(this.paceTimeout);
      }
    }

    render() {
        const { elapsed, distanceTraveled, status, renderPage, calories, paceInMinutes, paceInSeconds, errorMessage } = this.state;

        return (
            <div className="mapBody">
                <MapNav clickMap={this.clickMap} clickMiles={this.clickMiles} />
                <div className="mapContainer">
                    <div className="map">
                        {!this.state.currentLatLng.lat ? <MapLoader errorMessage={errorMessage}/> :
                            <MyMapComponent
                                isMarkerShown
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
                                loadingElement={<div className="loading-element" style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                currentLocation={this.state.currentLatLng}
                                coordinateArray={this.state.coordinateArray}
                            />
                        }
                    </div>
                    <div className="runmapButtonsContainer">
                        <WatchBtns status={status}
                            run_id={this.state.run_id}
                            start={this.start}
                            pause={this.pause}
                            reset={this.reset} />
                    </div>
                    <button onClick={this.handleMilesRun} className="btn btn-info milesRunButton">
                        {this.state.buttonName === 'left' ? <i><FontAwesomeIcon icon="angle-double-left" color="white" /></i> : <i><FontAwesomeIcon icon="angle-double-right" color="white" /></i>}
                    </button>
                    <div style={this.state.transition} className="transitionMilesRun">
                        <MilesRun mileStats={this.state.mileStats} />
                    </div>
                </div>
                <div className="mapStatsContainer">
                    <MapStatsContainer
                        elapsed={elapsed}
                        distanceTraveled={distanceTraveled}
                        paceInMinutes={paceInMinutes}
                        paceInSeconds={paceInSeconds}
                        calories={calories}
                    />
                </div>
            </div>
        )
    }
}

export default RunMap
