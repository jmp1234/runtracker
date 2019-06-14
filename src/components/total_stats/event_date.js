import React, { Component, Fragment } from 'react';
import EventModal from './modal/modal';
import Countdown from './countdown.js';
import axios from 'axios';
import './total_stats.scss';

class EventDate extends Component {
  state = {
    eventName: '',
    eventDate: ''
  }

  componentDidMount() {
    this.getEvent();

  }
  getEvent = () => {
    axios.get('/api/get_event.php').then(resp => {
      const { eventDay, eventName } = resp.data['1'];
      let { date } = eventDay;
      let newDate = new Date(date).toISOString();
      this.setState({
        eventName,
        eventDate: newDate
      })
    })
  }

  render() {
    const { eventName, eventDate } = this.state;

    return (
      <Fragment>
        <div className="eventCountdownContainer">
          <p className="eventCountdownTitle">
            {eventName ? eventName : 'EVENT COUNTDOWN'}
          </p>
          <Countdown className="col-6" date={`${eventDate}`} eventName={eventName}/>
          <div className="col">
            <EventModal getEvent={this.getEvent} />
          </div>
        </div>
      </Fragment >
    )
  }
}

export default EventDate;
