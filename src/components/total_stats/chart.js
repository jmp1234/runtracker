import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './total_stats.scss';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default props => {

  const runs = props.runCount > 1 ? `${props.runCount} Runs` : `${props.runCount} Run`;
  return (
    <div className="line-graph-container">
      <article className="runGraph">
        <Line
          data={props.chartData}
          options={{
            plugins: {
              datalabels: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: true,
              text: `Your Last ${runs}`,
              fontSize: 25,
              fontColor: 'black',
            },
            legend: {
              display: false,
              position: 'bottom',
            },
            elements: {
              line: {
                tension: 0
              }
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontColor: 'black',
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Date',
                  fontColor: 'black',
                },
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  fontColor: 'black'
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Distance (mi)',
                  fontColor: 'black',
                }
              }],
            }
          }}
        />
      </article>
    </div>
  )
}
