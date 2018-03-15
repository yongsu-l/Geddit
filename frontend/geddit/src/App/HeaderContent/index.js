import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import {
  LogoLabel,
  ControlButton,
  MenuButton,
  FloatRightLabel,
  UsernameLabel,
} from './styled';

import postLogin from 'lib/postLogin';
import postSignup from 'lib/postSignup';
import listenerHandler from 'lib/listenerHandler';

class HeaderContent extends Component {
  constructor() {
    super();

    this.state = {
      toggled: null,
      submitting: false,
    }

    this.handlers = {};
    
    this.setToggle = this.setToggle.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onFormClose = this.onFormClose.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onSignup = this.onSignup.bind(this);
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
          history.push('/' + history.location.search);
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

  setToggle(toggle) {
    const { toggleHandler } = this.handlers;
    const {
      setAppState,
      history,
    } = this.props;

    if (this.state.toggled === toggle) {
      toggleHandler.rmvListener();
      setAppState({ disabledBody: false });
      this.setState({ toggled: null });
    } else {
      toggleHandler.addListener();
      setAppState({ disabledBody: true });
      this.setState({ toggled: toggle });

      if (toggle === 'Sign Up') {
        history.push('/signup' + history.location.search);
      } else {
        history.push('/login' + history.location.search);
      }
    }
  }

  onToggle(e) {
    if (this.state.submitting) return;
    this.setToggle(e.target.textContent)
  }

  onFormClose() {
    const {
      setAppState,
      history,
    } = this.props;

    this.setState({ toggled: null });
    setAppState({ disabledBody: false });
    history.push('/' + history.location.search);
  }

  onLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const { setAppState } = this.props;
    
    postLogin({
      username, 
      password,
    })
      .then(json => {
        if (json.success) {
          window.localStorage.setItem('token', json.id_token);
          setAppState({
            username: json.username,
          })
          this.onFormClose();          
        } else {
          console.log(json.msg);
        }
      })
  }

  onSignup(e) {
    e.preventDefault();

    const { setAppState } = this.props;

    const username = e.target.username.value,
          email = e.target.email.value,
          password = e.target.password.value,
          confirm = e.target.confirm.value;

    if (password === confirm) {
      postSignup({
        username,
        email,
        password,
      })
        .then(json => {
          if (json.success) {
            window.localStorage.setItem('token', json.id_token);
            setAppState({
              username: json.username,
            })
            this.onFormClose();
          } else {
            console.log(json.msg);
          }
        })
    }
  }

  renderIfLoggedIn() {
    const { username } = this.props;
    return (
      <Fragment>
        <MenuButton>&equiv;</MenuButton>
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
      renderIfLoggedIn,
      renderIfNotLoggedIn
    } = this;

    const { username } = this.props;

    return (
      <Fragment>
        <LogoLabel>geddit</LogoLabel>
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