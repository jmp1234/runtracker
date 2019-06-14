import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import '../total_stats.scss';

class EventModal extends Component {
  state = {
    show: false,
    event: '',
    date: '',
    time: '00:00'
  };

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  postEvent = (e) => {
    e.preventDefault();

    const { event, date, time } = this.state;
    const dateTime = date + ' ' + time;
    const data = {
      event: event,
      eventDate: dateTime
    };
    axios.post('/api/add_event.php', data).then(() => {
      this.handleClose();
      this.props.history.push(`/totalstats?event=${data.event}&date=${data.eventDate}`);
      this.props.getEvent();
    });
  }
  render() {
    return (
      <Fragment>
        <Button className="countdownButton" variant="info" onClick={this.handleShow}>
          Add Target Event
          </Button>
        <Modal className="text-center" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="mt-1">Target Event</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.postEvent}>
            <Modal.Body className=" row col-10 offset-1">
              <input
                value={this.state.event}
                onChange={this.handleInputChange}
                placeholder="Event Name"
                type="text"
                name="event"
                required
                className="eventName col-sm-12 col-md-12"
              />
              <input
                id="date"
                value={this.state.date}
                onChange={this.handleInputChange}
                type="date"
                name="date"
                className="eventName col-sm-12 col-md-6"
                required
              />
                            <input
                id="time"
                value={this.state.time}
                onChange={this.handleInputChange}
                className="eventName col-sm-12 col-md-6"
                type="time"
                name="time"
              />
            </Modal.Body>
            <Modal.Footer className="mb-2">
              <Button type="button" variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="info" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </Fragment>
    );
  }
}
export default withRouter(EventModal);
