import React, {Fragment} from 'react';

export default props => {
    <Fragment>
    <div className="h-60 mapContainer">
    <div className="map">
        <MyMapComponent
            isMarkerShown
            // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtWT-ZM2l21GJnuT7cjNZYmbQa0flwL6c&v=3.exp&libraries=geometry,drawing,places"
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            currentLocation={this.state.currentLatLng}
        />
    </div>
    <div className="buttonsContainer">
        <WatchBtns status={status}
            start={this.start}
            pause={this.pause}
            reset={this.reset} />
    </div>
</div>
<div className="mapStatsContainer">
    <div className="statContainer">
        <div className="statTitle">Time</div>
        <Stopwatch className="statResult" elapsed={elapsed} />
    </div>
    <div className="statContainer">
        <div className="statTitle">Distance</div>
        <Distance className="statResult" distance={distance} />
        {/* <button onClick={this.distanceIncrement} className="btn btn-info btn-sm">Increment</button> */}
    </div>
    <div className="statContainer">
        <div className="statTitle">Pace</div>
        <div className="statResult">11:44</div>
    </div>
    <div className="statContainer">
        <div className="statTitle">Calories Burned</div>
        <div className="statResult">1,600 cal</div>
    </div>
</div>
</Fragment>
}