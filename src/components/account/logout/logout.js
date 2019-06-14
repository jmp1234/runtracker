import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../../actions';
import Logo from '../../../../public/dist/images/logo_black.png'
import Background from '../../account/login/images/image6.jpeg'
import './logout.scss';

class LogOut extends Component {
    componentDidMount() {
        setTimeout(this.props.logOut, 3000);
    }
    render() {
        return (
            <div className="logoutContainer">
                <img className="background" src={Background} alt="Background" />
                <img className="logoutLogo" src={Logo} alt="Logo" />
                <div className="thankYou">Thank you for tracking your run with us!<br />You have been logged out.</div>
            </div>
        )
    }
}

export default connect(null, {
    logOut: logOut
})(LogOut);
