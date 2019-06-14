import React, { Component } from 'react';
import RunHeader from '../nav_folder/run_nav';
import axios from 'axios';
import TableData from './tabledata';
import './total_stats.scss';
import Logo from '../../../public/dist/images/logo_black.png';
import PreLoader from '../preloader/preloader.js';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      clickedElement: null,
      loading: true,
    }
  }


  componentDidMount() {
    this.displayActivityLogData();
  }

  displayActivityLogData = () => {
    axios.get('/api/get_table_data.php').then(resp => {
      const { tableItems } = resp.data;
      const stats = tableItems.map(row => {
        const { id, date, time, distance, calories } = row;
        return (
          <tr key={id}>
            <TableData id={id} displayActivityLogData={this.displayActivityLogData} distance={distance} date={date} time={time} calories={calories} />
          </tr>
        )
      })
      this.setState({
        stats: [...stats],
        clickedElement: 'total',
        loading: false,
      })
    }).catch(err => {
      this.setState({
        loading: false,
      })
      console.log('error: ', err)
    })
  }

  filterByMonth = () => {
    axios.get('/api/get_table_data.php').then(resp => {
      const { tableItems } = resp.data;
      const stats = tableItems.filter(row => {
        const currentDateTime = new Date().getTime();
        const runDateTime = new Date(row.date).getTime();
        const daysInMilliseconds = 30 * 86400000;
        return currentDateTime - runDateTime <= daysInMilliseconds
      }).map(row => {
        const { id, date, time, distance, calories } = row;
        return (
          <tr key={id}>
            <TableData id={id} distance={distance} date={date} time={time} calories={calories} displayActivityLogData={this.displayActivityLogData}/>
          </tr>
        )
      })
      this.setState({
        stats: [...stats],
        clickedElement: 'month',
      })
    })
  }

  filterByWeek = () => {
    axios.get('/api/get_table_data.php').then(resp => {
      const { tableItems } = resp.data;
      const stats = tableItems.filter(row => {
        const currentDateTime = new Date().getTime();
        const runDateTime = new Date(row.date).getTime();
        const daysInMilliseconds = 10 * 86400000;
        return currentDateTime - runDateTime <= daysInMilliseconds
      }).map(row => {
        const { id, date, time, distance, calories } = row;
        return (
          <tr key={id}>
            <TableData id={id} distance={distance} date={date} time={time} calories={calories} displayActivityLogData={this.displayActivityLogData}/>
          </tr>
        )
      })
      this.setState({
        stats: [...stats],
        clickedElement: 'week',
      })
    })
  }

  render() {
    if(this.state.loading) {
      return(
        <div>
          <PreLoader />
        </div>
      )
    } else {
      return (
        <div className="tableContainer">
          <RunHeader />
          <div className="activityLogContainer">
            <div className="filterByDays float-right text-primary pt-3 pb-3">
              <span onClick={this.displayActivityLogData} className={`total ${this.state.clickedElement === 'total' ? 'bold' : ''}`}>Total </span>
              <span>|</span>
              <span onClick={this.filterByMonth} className={`month ${this.state.clickedElement === 'month' ? 'bold' : ''}`}> Last 30 Days </span>
              <span>|</span>
              <span onClick={this.filterByWeek} className={`week ${this.state.clickedElement === 'week' ? 'bold' : ''}`}> Last 10 days</span>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="col-s2">Date</th>
                  <th className="col-s2">Distance (mi)</th>
                  <th className="col-s2">Time (h:m:s)</th>
                  <th className="col-s2 calories-header">Calories</th>
                  <th className="col-s2"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.stats}
              </tbody>
            </table>
            <img className="logo" src={Logo}/>
          </div>
        </div>
      )
    }
  }
}

export default Chart;
