import React, { Component } from 'react';
import { HorizontalBar, Bar, Line, Pie } from 'react-chartjs-2';
import './total_stats.scss';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default props => {
  return (
    <div className="pie-chart-container">
      <article className="graph-container">
        <HorizontalBar
          data={props.barChartData}
          options={{
            layout: {
              padding: {
                left: 10,
                right: 10,
              }
            },
            scales: {
              xAxes: [{
                stacked: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Number of Runs',
                  fontColor: 'black',
                },
                ticks: {
                  callback: value => {
                    if(value % 1 === 0) {
                      return value;
                    }
                  }
                }
              }],
              yAxes: [{
                stacked: true,
              }]
            },
            tooltips: {
              mode: 'nearest',
              title: {
                enabled: false,
              },
              callbacks: {
                label: function (tooltipItem, data) {
                  let runValue = tooltipItem.value === '1' ? 'run' : 'runs'
                  return `${data.datasets[tooltipItem.datasetIndex].label}: ${tooltipItem.value} ${runValue}`;
                },
                title: function() {
                  return
                }
              }
            },
            plugins: {
              datalabels: {
                display: function (context) {
                  return context.dataset.data[context.dataIndex] > 0
                },
                color: 'black',
              }
            },
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: true,
              text: 'Your Runs Breakdown',
              fontSize: 25,
              padding: 20,
              fontColor: 'black',
            },
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                fontColor: 'black',
                filter: (item, chart) => {
                  return chart.datasets[item.datasetIndex].data[0] !== 0
                }
              },
            },
          }}
        />
      </article>
    </div>
  )
}
