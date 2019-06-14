import React, { Component } from 'react';
import RunHeader from '../nav_folder/run_nav';
import axios from 'axios';
import ResultsChart from './results_chart';
import apiKey from '../googlemap';
import './run_results.scss';
import ResultsDisplay from './results_display';
import Logo from '../../../public/dist/images/logo_black.png';
import PreLoader from '../preloader/preloader.js';


class RunResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bl: [],
      first_name: null,
      time: 0,
      distance: 0,
      calories: 0,
      secondsRan: 0,
      pace: 0,
      city: null,
      id: 0,
      date: '',
      totalDistance: 0,
      chartData: {},
      options: {},
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      loading: true,
    }
  }

  componentDidMount() {
    this.getChartData();
    this.getUserName();

  }

  getCityName(lat, lng) {
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lng}&key=76e6a71e44ff40759963af6dacacc318&pretty=1`).then(resp => {
      if (resp.data) {
          this.setState({
            city: resp.data.results[0].components.city
          })
      }
    }).catch(error => {
      console.log(error.response)
    })
  }

  async getUserName() {
    const resp = await axios.get('/api/get_current_user.php');
    const { first_name } = resp.data;

    this.setState({
      first_name
    })
  }

  getChartData() {
    const { id } = this.props.match.params
    axios.get(`/api/get_runsession_results.php?id=${id}`).then(resp => {
      const { sessionData, date, distance, coordinates, secondsRan, minutesSecondsRan, city } = resp.data;
      const { calories, pace, time } = sessionData['0'];
      const miles = sessionData.map(mile => mile.perMile.currentMile);
      const time2 = sessionData.map(seconds => (seconds.perMile.perMileTime));

      if(!city) {
        this.getCityName(coordinates.lat, coordinates.lng)
      }

      this.setState({
        minutesSecondsRan,
        secondsRan,
        time,
        distance,
        calories,
        pace: this.secondsToPaceConverter(secondsRan, distance),
        date,
        city,
        currentLatLng: {
          ...this.state.currentLatLng,
          lat: coordinates.lat,
          lng: coordinates.lng
        },
        totalDistance: distance,
        chartData: {
          labels: [...miles],
          datasets: [
            {
              label: 'Pace',
              data: [...time2],
              borderColor: 'blue',
              backgroundColor: 'rgba(30, 144, 255, 0.7)',
              borderWidth: 1,
              borderColor: 'white',
              hoverBorderWidth: 3,
              hoverBorderColor: '#000',
            }
          ]
        },
        loading: false,
      })
    }).catch(err => {
      this.setState({
        loading: false,
      })
      console.log('error: ', err)
    })
  }

  secondsToPaceConverter(time, distance) {
    const paceInSeconds = (time/distance).toFixed(0);
    const minutes = Math.floor(paceInSeconds / 60);
    const secondsRemaining = (paceInSeconds - minutes * 60);
    const seconds = secondsRemaining > 9 ? secondsRemaining : `0${secondsRemaining}`;

    return `${minutes}:${seconds}`
  }

  runDescription = (secondsRan, totalDistance) => {
    const minutes = Math.floor(secondsRan / 60);
    const seconds = secondsRan - minutes * 60;
    const oneOrMoreMinutes = minutes > 1 ? 'minutes' : 'minute';
    const oneOrMoreSeconds = seconds > 1 | seconds === 0 ? 'seconds' : 'second';

    const timeRan = secondsRan < 60 ? `${secondsRan} Seconds` : `${minutes} ${oneOrMoreMinutes} and ${seconds} ${oneOrMoreSeconds}`;

    return `${totalDistance} Mile Run in ${timeRan}`
  }

  render() {

    const { date, first_name, currentLatLng, distance, city, minutesSecondsRan, calories, pace, totalDistance, secondsRan } = this.state;
    if(this.state.loading) {
      return <PreLoader />
    } else {
      return (
        <div className="postRunBody">
          <RunHeader />
          <div className="results-container container-fluid">
              <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2 run-message-container">
                  <div className="run-message">
                    <p className="first-description text-center">{first_name}, here are your results from {date.date} at {date.time}</p>
                    <p className="second-description">{this.runDescription(secondsRan, totalDistance)} </p>
                    <p className="location">{!city || city === 'none' ? '' : <span className="oi" data-glyph="map-marker"></span>} {city === 'none' ? '' : city}</p>
                  </div>
                </div>
              </div>
            <div className="row">
              <div className="results-display col-xl-8 offset-xl-2 col-md-10 offset-md-1 col-12 text-center run-data">
                <ResultsDisplay
                  minutesSecondsRan={minutesSecondsRan}
                  distance={distance}
                  pace={pace}
                  calories={calories}
                />
              </div>
              <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 col-12 results-chart-container">
                <ResultsChart
                  chartData={this.state.chartData}
                  distance={this.state.totalDistance}
                  secondsRan={this.state.secondsRan}

                />
              </div>
            </div>
            <img className="logo" src={Logo}/>
          </div>
        </div>
      )
    }
  }
}

export default RunResult;
