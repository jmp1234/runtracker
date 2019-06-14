import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import RunHeader from '../nav_folder/tutorial_nav';
import './runs.scss';
import backgroundImage from '../account/login/images/image19.jpeg';
import axios from 'axios';
import PreLoader from '../preloader/preloader.js';

class Runs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_buttons: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.getRunData();
  }

  getRunData = () => {
    axios.get('/api/get_run_dates.php').then(run_dates => {
      const dates = run_dates.data.dates;
      const date_buttons = dates.map(item => {
        return (
          <div key={item.id} className="imgContainer col-6 col-sm-6 col-md-6 col-lg-4">
            <NavLink to={`/results/${item.id}`}>
              <button className="bigSquareButton runImg btn btn-dark btn-lg">
                <div>{item.date}</div>
                <div className="run-time">{item.miles} miles</div>
                <div className="run-time">{item.city || item.city !== 'none' ? item.city : ''}</div>
              </button>
            </NavLink>
          </div>
        )
      })
      this.setState({
        date_buttons,
        loading: false
      })
    }).catch(err => {
      this.setState({
        loading: false,
      })
      console.log(err)
    })
  }

  render() {
    if (this.state.loading) {
      return <PreLoader />
    } else {
      return (
        <Fragment>
          <RunHeader />
          <div className="runs">
            <img className="backgroundImage" src={backgroundImage} alt="Background Image" />
            <div className="runButtonsContainer">
              <div className="imgContainer col-6 col-sm-6 col-md-6 col-lg-4">
                <NavLink to="/runmap">
                  <button className="bigSquareButton plusImg btn btn-dark btn-lg"></button>
                </NavLink>
              </div>
              {this.state.date_buttons}
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default Runs;
