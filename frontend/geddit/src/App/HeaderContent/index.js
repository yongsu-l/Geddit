import React, { Component, Fragment } from 'react';

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

  setHeaderContentState(state) {
    this.setState(state);
  }

  onToggle(e) {
    const {
      setAppState,
    } = this.props;

    if (this.state.toggled === e.target.textContent) {
      this.setState({ toggled: null });
      setAppState({ disabledBody: false });

    } else {
      this.setState({ toggled: e.target.textContent });
      setAppState({ disabledBody: true });

      const bodyView = document.getElementById('body-view');
      bodyView.addEventListener(
        'click', 
        () => {
          this.setState({ toggled: null });
          setAppState({ disabledBody: false });
        },
        { once: true }
      );

    }
  }

  renderIfLoggedIn() {
    const { user } = this.props;
    return (
      <Fragment>
        <MenuButton>&equiv;</MenuButton>
        <UsernameLabel>{ user.username }</UsernameLabel>        
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

    const { user } = this.props;

    return (
      <Fragment>
        <LogoLabel>geddit</LogoLabel>
        {
          (user)
            ? renderIfLoggedIn()
            : renderIfNotLoggedIn()
        }
      </Fragment>
    )
  }
}

export default HeaderContent;