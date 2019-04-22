import React, {Component} from 'react';
import './nav.scss';
import {NavLink} from 'react-router-dom';


class RunHeader extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
    <div className="headerContainer">
      <div className="mapHeaderContainer">
      </div>
        <nav className="navbar navbar-expand navbar-custom navbar-center py-0 ">
          <div className="container-fluid ">
            <ul className='nav navbar-nav mx-auto py-0 '>
              <li><NavLink className="nav-link "to="/">Runs</NavLink></li>
              <li><NavLink className="nav-link "to="/totalstats">Total Stats</NavLink></li>
              <li><NavLink className="nav-link "to="/table">Activity Log</NavLink></li>
            </ul>
          </div>
        </nav>
    </div>
    )
  }
}

export default RunHeader;
