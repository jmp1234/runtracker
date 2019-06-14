import React, {Fragment} from 'react';
import Stopwatch from './stopwatch';
import Distance from './distance';
import './run_map.scss';

export default props => {

  const {elapsed, distanceTraveled, paceInMinutes, paceInSeconds, calories} = props;
  return(
    <Fragment>
        <div className="statContainer">
            <div className="statTitle">Time</div>
            <Stopwatch className="statResult" elapsed={elapsed} />
        </div>
        <div className="statContainer">
            <div className="statTitle">Distance</div>
            <Distance className="statResult" distance={distanceTraveled.toFixed(2)} />
        </div>
        <div className="statContainer">
            <div className="statTitle">Average Pace (min/mi)</div>
            <div className="statResult">{paceInMinutes}:{paceInSeconds}</div>
        </div>
        <div className="statContainer">
            <div className="statTitle">Calories Burned</div>
            <div className="statResult">{calories.toFixed(2)}</div>
        </div>
    </Fragment>
  )
}
