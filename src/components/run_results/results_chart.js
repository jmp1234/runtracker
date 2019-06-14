import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default props => {
  const {distance, secondsRan} = props;
  const minutes = Math.floor(secondsRan / 60);
  const seconds = secondsRan - minutes * 60;
  const oneOrMoreMinutes = minutes > 1 ? 'minutes' : 'minute';
  const timeRan = secondsRan < 60 ? `${secondsRan} Seconds` : `${minutes} ${oneOrMoreMinutes} and ${seconds} Seconds`;

  return (
    <div className="bar-graph-container">
      <article >
      <Bar
        data={props.chartData}
        width={100}
        height={100}
        options = {{
          plugins: {
            datalabels: {
              formatter: function(value, context) {
                  let date = new Date(null);
                  date.setSeconds(value);
                  const unformattedDate = date.toISOString().slice(14,19);
                  let formattedDate = null;
                  if(unformattedDate.length === 5 && unformattedDate.charAt(0) === '0') {
                      formattedDate = unformattedDate.replace(/^0/, ' ');
                  } else {
                      formattedDate = date.toISOString().slice(14,19)
                  }
                  return formattedDate;
              },
              display: distance > 5 && window.matchMedia('(max-width: 370px)').matches ? false : true,
              color: 'white',
            },
          },
          tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                  let date = new Date(null);
                  date.setSeconds(tooltipItem.yLabel);
                  const unformattedDate = date.toISOString().slice(14,19);
                  let formattedDate = unformattedDate.length === 5 && unformattedDate.charAt(0) === '0' ? unformattedDate.replace(/^0/, ' ') : unformattedDate;
                  return `Pace: ${formattedDate} min/mile`;
                }
            }
          },
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: 'Pace per Mile',
            fontSize: 25,
            fontColor: 'black',
            padding: 10,
          },
          legend: {
            display: false,
          },
          elements: {
            line: {
              tension: 0
            }
          },

            scales: {
              xAxes: [{
                barPercentage: distance <= 1 ? 0.2 : 1,
                categoryPercentage: 0.8,
                scaleLabel: {
                  display: true,
                  labelString: 'Mile',
                  fontColor: 'black',
                },
              }],
              yAxes: [{
                ticks: {
                  callback: label => {
                    let date = new Date(null);
                    date.setSeconds(label);
                    const unformattedDate = date.toISOString().slice(14,19);
                    let formattedDate = unformattedDate.length === 5 && unformattedDate.charAt(0) === '0' ? unformattedDate.replace(/^0/, ' ') : unformattedDate;
                    return formattedDate;
                  },
                  beginAtZero: true
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Pace(min/mile)',
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
