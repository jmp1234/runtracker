import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../../actions';
import { Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import LogInForm from './login_form';
import GuestLoginForm from './guest_login_form';
import SignUpForm from '../sign_up/signup_form';
import Carousel from './carousel';
import Logo from '../../../../public/dist/images/logo_white.png';
import './login.scss';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loggedIn: false,
      // signedUp: false,
      message: '',
      loginTransition: {
        height: '0px',
        bottom: '0'
      },
      signupTransition: {
        height: '0px',
        bottom: '0'
      },
      transitionBackground: {
        height: '0px'
      },
      loginHidden: true,
      signupHidden: true
    }
    this.handleLogInButton = this.handleLogInButton.bind(this);
    this.handleSignUpButton = this.handleSignUpButton.bind(this);
    this.hideTransition = this.hideTransition.bind(this);
  }

  handleLogIn = (values) => {
    this.props.logIn(values);
    axios.post('/api/login.php', values).then(resp => {
      if (resp.data.error) {
        this.setState({
          message: resp.data.error
        })
      }
    })
  }

  handleSignUp = (values) => {
    this.props.signUp(values);
    axios.post('/api/signup.php', values).then(resp => {
      if (resp.data.success) {
        this.setState({
          signedUp: true
        })
      }
    })
    this.handleLogIn(values);
  }

  handleGuestLogIn = async () => {
    const values = {
      email: 'guest@guest.com',
      password: 'guestpassword'
    }
    await this.props.logIn(values);
    axios.post('/api/delete_guest_run.php').then(
      axios.post('/api/delete_guest_event.php').then(
        this.props.history.push('/'))
    );
  }

  deleteCurrentRun = () => {
    const data = {
      id: this.state.run_id
    }
    axios.post('/api/deleterun.php', data).then(resp => {
    })
  }

  handleLogInButton() {
    this.setState({
      loginTransition: {
        // height: '80vh',
        // bottom: '10vh'
      },
      transitionBackground: {
        height: '100vh'
      },
      loginHidden: false
    });
  }

  handleSignUpButton() {
    this.setState({
      signupTransition: {
        // height: '85vh',
        // bottom: '7.5vh'
      },
      transitionBackground: {
        height: '100vh'
      },
      signupHidden: false
    });
  }

  hideTransition() {
    this.setState({
      loginTransition: {
        height: '0px',
        bottom: '0'
      },
      signupTransition: {
        height: '0px',
        bottom: '0'
      },
      transitionBackground: {
        height: '0px'
      },
      loginHidden: true,
      signupHidden: true
    });
  }

  render() {
    if (this.props.auth === true) {
      return (<Redirect to="/" />)
    }
    else {
      return (
        <div className="loginPage">
          <img className="loginLogo" src={Logo} alt="Logo" />
          <div className="carouselContainer">
            <Carousel />
          </div>
          <div className="loginButtonsContainer">
            <button onClick={this.handleLogInButton} className="loginButton btn btn-info">Log In</button>
            <button onClick={this.handleSignUpButton} className="loginButton btn btn-info">Sign Up</button>
            <GuestLoginForm guestLogin={this.handleGuestLogIn} />
          </div>
          <div className="loginTransition" style={this.state.loginTransition}>
            <div className={this.state.loginHidden ? 'hidden' : 'loginFormContainer'}>
              <div className="message">{this.state.message}</div>
              <LogInForm logIn={this.handleLogIn} />
            </div>
          </div>
          <div className="signupTransition" style={this.state.signupTransition}>
            <div className={this.state.signupHidden ? 'hidden' : 'loginFormContainer'}>
              <SignUpForm signUp={this.handleSignUp} />
            </div>
          </div>
          <div className="transitionBackground" style={this.state.transitionBackground} onClick={this.hideTransition}></div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.user.auth
  }
}

export default connect(mapStateToProps, {
  logIn: logIn,
  signUp: signUp
})(LogIn);
