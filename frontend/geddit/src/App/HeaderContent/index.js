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
    const { toggled } = this.state;

    const controlButtonProps = {
      onClick: this.onToggle,
    }
    const formProps = {
      setHeaderContentState: this.setHeaderContentState,
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