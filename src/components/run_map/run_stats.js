import React, { Component } from 'react';
import MapNav from '../nav_folder/map_nav';
import '../total_stats/total_stats.scss';
import './run_map.scss';


export default props => {
    return(
      <div className="tableContainer overflow-auto">
        <MapNav />
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="w-25">Mile</th>
              <th className="w-25">Time</th>
            </tr>
          </thead>
          <tbody>
            {props.mileStats}
          </tbody>
        </table>
      </div>
    )
}
