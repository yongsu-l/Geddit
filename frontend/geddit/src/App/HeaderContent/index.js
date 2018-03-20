import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import {
  LogoLabel,
  ControlButton,
  FloatRightLabel,
  UsernameLabel,
  LogoutLabel,
} from './styled';

import postLogin from 'lib/postLogin';
import postSignup from 'lib/postSignup';
import listenerHandler from 'lib/listenerHandler';
import setTimeoutOrUntilExec from 'lib/setTimeoutOrUntilExec';

class HeaderContent extends Component {
  constructor() {
    super();

    this.state = {
      toggled: null,
      submitting: false,
    }

    this.handlers = {};
    
    this.setToggle = this.setToggle.bind(this);
    this.onHomeClick = this.onHomeClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onFormClose = this.onFormClose.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.renderIfLoggedIn = this.renderIfLoggedIn.bind(this);
    this.renderIfNotLoggedIn = this.renderIfNotLoggedIn.bind(this);
  }

  componentDidMount() {
    const { 
      history,
      setAppState,
    } = this.props;

    this.handlers.toggleHandler = listenerHandler(
      document.getElementById('body-view'),
      'click',
      () => {
        if (!this.state.submitting) {
          this.handlers.toggleHandler.rmvListener();
          setAppState({ disabledBody: false });
          this.setState({ toggled: null });
        }
      },
    )

    switch(history.location.pathname) {
      case '/signup':
        this.setToggle('Sign Up');
        break;
      case '/login':
        this.setToggle('Log In');
        break;
      default:
        break;
    }
  }

  shouldComponentUpdate() {
    return !this.state.submitting;
  }

  onHomeClick() {
    if (!this.state.submitting) {
      const {
        setAppState,
        history,
      } = this.props;
  
      setAppState({ disabledBody: false });
      this.setState({ toggled: null });
      this.handlers.toggleHandler.rmvListener();
      history.push('/');
    }
  }

  setToggle(toggle) {
    const { toggleHandler } = this.handlers;
    const {
      setAppState,
    } = this.props;

    if (this.state.toggled === toggle) {
      toggleHandler.rmvListener();
      setAppState({ disabledBody: false });
      this.setState({ toggled: null });
    } else {
      toggleHandler.addListener();
      setAppState({ disabledBody: true });
      this.setState({ toggled: toggle });
    }
  }

  onToggle(e) {
    if (this.state.submitting) return;
    this.setToggle(e.target.textContent)
  }

  onFormClose() {
    const {
      setAppState,
    } = this.props;

    this.setState({ toggled: null });
    setAppState({ disabledBody: false });
  }

  onLogin(e) {
    e.preventDefault();
    this.handlers.toggleHandler.rmvListener();    

    const username = e.target.username.value;
    const password = e.target.password.value;

    const { setAppState } = this.props;
    
    this.setState({ submitting: true });
    const exec = setTimeoutOrUntilExec(() => {
      this.setState({ submitting: false });
      this.onFormClose();
    }, 1333);
    
    postLogin({
      username, 
      password,
    })
      .then(json => {
        if (json && json.success) {
          window.localStorage.setItem('token', json.id_token);
          setAppState({ username: json.username })
          exec();
        } else {
          window.location.reload();
        }
        console.log(json);
      })
  }

  onSignup(e) {
    e.preventDefault();
    this.handlers.toggleHandler.rmvListener();    

    const username = e.target.username.value,
          email = e.target.email.value,
          password = e.target.password.value,
          confirm = e.target.confirm.value;

    const { setAppState } = this.props;

    this.setState({ submitting: true });
    const exec = setTimeoutOrUntilExec(() => {
      this.setState({ submitting: false });
      this.onFormClose();
    }, 1333);

    if (password === confirm) {
      postSignup({
        username,
        email,
        password,
      })
        .then(json => {
          if (json && json.success) {
            window.localStorage.setItem('token', json.id_token);
            setAppState({
              username: json.username,
            })
            exec();
          } else {
            window.location.reload();
          }
          console.log(json);
        })
    }
  }

  onLogout() {
    const {
      setAppState,
      loadApp,
    } = this.props;

    window.localStorage.clear();
    setAppState({ username: null });
    loadApp(1000);
  }

  renderIfLoggedIn() {
    const { username } = this.props;
    return (
      <Fragment>
        <LogoutLabel
          onClick={this.onLogout} >Logout</LogoutLabel>
        <UsernameLabel>{ username }</UsernameLabel>        
        <FloatRightLabel>Welcome!</FloatRightLabel>
      </Fragment>
    )
  }

  renderIfNotLoggedIn() {
    const { 
      onFormClose,
      onLogin,
      onSignup,
    } = this;
    const { setAppState } = this.props;
    const { 
      toggled,
      submitting
    } = this.state;

    const controlButtonProps = {
      onClick: this.onToggle,
    }
    const formProps = {
      setAppState,
      submitting,
      onFormClose,
      onLogin,
      onSignup,
    }

    return (
      <Fragment>
        <ControlButton { ...controlButtonProps } >Log In</ControlButton>
        <ControlButton { ...controlButtonProps } >Sign Up</ControlButton>
        {
          (toggled)
            ? (toggled === 'Log In')
                ? <LoginForm { ...formProps } />
                : <SignupForm { ...formProps } />
            : null
        }
      </Fragment>
    )
  }

  render() {
    const {
      onHomeClick,
      renderIfLoggedIn,
      renderIfNotLoggedIn
    } = this;

    const { username } = this.props;


    return (
      <Fragment>
        <LogoLabel
          onClick={onHomeClick} >geddit</LogoLabel>
        {
          username
            ? renderIfLoggedIn()
            : renderIfNotLoggedIn()
        }
      </Fragment>
    )
  }
}

export default withRouter(HeaderContent);