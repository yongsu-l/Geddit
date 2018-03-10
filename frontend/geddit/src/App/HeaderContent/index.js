import React, { Component, Fragment } from 'react';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import {
  LogoLabel,
  ControlButton,
} from './styled';

class HeaderContent extends Component {
  constructor() {
    super();

    this.state = {
      toggled: null,
    }

    this.onToggle = this.onToggle.bind(this);
    this.setHeaderContentState = this.setHeaderContentState.bind(this);
  }

  setHeaderContentState(state) {
    this.setState(state);
  }

  onToggle(e) {
    if (this.state.toggled === e.target.textContent) {
      this.setState({
        toggled: null,
      })
    } else {
      this.setState({
        toggled: e.target.textContent,
      })
    }
  }

  render() {
    const {
      toggled,
    } = this.state; 

    const controlButtonProps = {
      onClick: this.onToggle,
    }

    const formProps = {
      setHeaderContentState: this.setHeaderContentState,
    }

    return (
      <Fragment>
        <LogoLabel>geddit</LogoLabel>
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
}

export default HeaderContent;