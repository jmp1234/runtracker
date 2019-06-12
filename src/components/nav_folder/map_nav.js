import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import DemoRun from './demo_run';

class MapNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapClicked: false,
      milesClicked: false,
      isOpen: false
    }
  }
  openModal = () => {
    this.setState({ isOpen: true })
  }
  handleClickMap = () => {
    this.setState({
      mapClicked: true,
      milesClicked: false
    });
    this.props.clickMap();
  }
  handleClickMiles = () => {
    this.setState({
      milesClicked: true,
      mapClicked: false
    })
    this.props.clickMiles();
  }

  callPlayer(func, args) {
    let iframes = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframes.length; ++i) {
        if (iframes[i]) {
            const src = iframes[i].getAttribute('src');
            if (src) {
                if (src.indexOf('youtube.com/embed') != -1) {
                    iframes[i].contentWindow.postMessage(JSON.stringify({
                        'event': 'command',
                        'func': func,
                        'args': args || []
                    }), "*");
                }
            }
        }
    }
}
  render() {
    return (
      <Fragment>
        <div className="headerContainer">
          <div className="mapHeaderContainer fixed-top">
            <div className="navLogo">Run-Tracker</div>
            <DemoRun/>
            <NavLink className="nav-link-home" exact to="/">
              <span className="oi" data-glyph="home"></span>
            </NavLink>
            <NavLink className="nav-link-aboutus" to="/aboutus">
              <span className="oi" data-glyph="people"></span>
            </NavLink>
            <NavLink className="nav-link-logout" to="/account/logout">
              <span className="oi" data-glyph="account-logout"></span>
            </NavLink>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default MapNav;
