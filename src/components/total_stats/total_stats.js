import React, { Component } from 'react';
import Chart from './chart';
import RunHeader from '../nav_folder/run_nav';
import PersonalBests from './personal_bests';
import axios from 'axios';
import EventDate from './event_date';
import BarChart from './stacked_barchart';
import EventModal from './modal/modal';
import Logo from '../../../public/dist/images/logo_black.png';
import PreLoader from '../preloader/preloader.js';
import './total_stats.scss';

class TotalStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      barChartData: {},
      runCount: 0,
      personalBests: {},
      loading: true,
    }
  }

  componentDidMount() {
    this.getChartData();
    this.getPersonalBests();
  }

  async getPersonalBests() {
    const bests = await axios.get('/api/personalbestquery.php');
    if (bests.data.success) {
      const { longestRun, lastRunDate, averagePace, mostCalories, totalCalories,
        totalDistance, totalTime, lastRunTime, longestRunDate, highestCalorieDate, latestRunInformation,
        longestRunId, highestCalorieId } = bests.data;
      this.setState({
        personalBests: {
          longestRun,
          lastRunDate: lastRunDate.replace(/^0/, ' '),
          mostCalories,
          averagePace: averagePace.length > 4 ? averagePace.replace(/^0/, ' ') : averagePace,
          totalCalories,
          totalDistance,
          totalTime,
          lastRunTime: lastRunTime.replace(/^0/, ' '),
          longestRunDate,
          highestCalorieDate,
          latestRunInformation,
          longestRunId,
          highestCalorieId,
        },
      })
    }
  }

  getChartData() {
    axios.get('/api/get_table_data.php').then(resp => {
      const { tableItems } = resp.data;
      const dates = tableItems.reverse().map(item => item.date);
      const distances = tableItems.map(item => item.distance);
      const dataArray = [0, 0, 0, 0, 0];

      tableItems.forEach(run => {
        const { distance } = run
        if (distance > 8) {
          dataArray[4]++;
        } else if (distance > 6) {
          dataArray[3]++;
        } else if (distance > 4) {
          dataArray[2]++;
        } else if (distance > 2) {
          dataArray[1]++;
        } else {
          dataArray[0]++;
        }
      })

      this.setState({
        runCount: tableItems.length,
        barChartData: {
          datasets: [
            {
              label: 'Less than 2 mi',
              data: [dataArray[0]],
              borderWidth: 1,
              borderColor: 'blue',
              backgroundColor: 'rgba(228,204,49,0.4)'
            },
            {
              label: '2-4mi',
              data: [dataArray[1]],
              borderWidth: 1,
              borderColor: 'blue',
              backgroundColor: 'rgba(138,17,129,0.4)'
            },
            {
              label: '3-6mi',
              data: [dataArray[2]],
              borderWidth: 1,
              borderColor: 'blue',
              backgroundColor: 'rgba(204,231,135,0.4)'
            },
            {
              label: '6-8mi',
              data: [dataArray[3]],
              borderWidth: 1,
              borderColor: 'blue',
              backgroundColor: 'rgba(30,144,255, 0.4)'
            },
            {
              label: '8 or more mi',
              data: [dataArray[4]],
              borderWidth: 1,
              borderColor: 'blue',
              backgroundColor: 'rgba(54,18,46,0.4)'
            }
          ]
        },
        chartData: {
          labels: [...dates],
          datasets: [
            {
              label: 'miles',
              borderWidth: 1,
              data: [...distances],
              borderColor: 'blue',
              backgroundColor: 'rgba(216,191,216,0.4)',
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

  render() {
    const { chartData, barChartData, runCount } = this.state;

    if (this.state.loading) {
      return <PreLoader />
    } else {
      return (
        <div className="total-stats">
          <RunHeader />
          <div className="totalStatsContainer container-fluid">
            <div className="first-row row">
              <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 col-12 chart-component-container">
                <Chart chartData={chartData} runCount={runCount} />
              </div>
              <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 col-12 personalbests-component-container">
                <PersonalBests
                  personalBests={{ ...this.state.personalBests }}
                />
              </div>
            </div>
            <div className="second-row row">
              <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 col-12 text-center chart-component-container">
                <BarChart barChartData={barChartData} />
              </div>
              <div className="mt-1 col-xl-8 offset-xl-2 col-md-10 offset-md-1 col-12 text-center">
                <EventDate />
              </div>
            </div>
            <img className="logo" src={Logo} />
          </div>
        </div>
      )
    }
  }
}

export default TotalStats;
