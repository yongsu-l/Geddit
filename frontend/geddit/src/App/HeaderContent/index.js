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

class HeaderContent extends Component {
  constructor() {
    super();

    this.state = {
      toggled: null,
    }

    this.onToggle = this.onToggle.bind(this);
    this.setHeaderContentState = this.setHeaderContentState.bind(this);
    this.renderIfLoggedIn = this.renderIfLoggedIn.bind(this);
    this.renderIfNotLoggedIn = this.renderIfNotLoggedIn.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;

    switch(history.location.pathname) {
      case '/signup':
        this.onToggle({ target: { textContent: 'Sign Up' } });
        break;
      case '/login':
        this.onToggle({ target: { textContent: 'Log In' } });
        break;
      default:
        break;
    }
  }

  setHeaderContentState(state) {
    this.setState(state);
  }

  onToggle(e) {
    const { textContent } = e.target;
    const {
      setAppState,
      history,
    } = this.props;

    var pathname = '/'

    if (this.state.toggled === textContent) {
      this.setState({ toggled: null });
      setAppState({ disabledBody: false });

    } else {
      this.setState({ toggled: textContent });
      setAppState({ disabledBody: true });
      if (textContent === 'Sign Up') {
        pathname = '/signup';
      } else {
        pathname = '/login';
      }

      const bodyView = document.getElementById('body-view');
      bodyView.addEventListener(
        'click', 
        () => {
          this.setState({ toggled: null });
          setAppState({ disabledBody: false });
          history.push('/' + history.location.search);
        },
        { once: true }
      );
    }

    history.push(pathname + history.location.search);
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
    const { setHeaderContentState } = this,
          { setAppState } = this.props,
          { toggled } = this.state;

    const controlButtonProps = {
      onClick: this.onToggle,
    }
    const formProps = {
      setHeaderContentState,
      setAppState,
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