import React, { Component } from 'react';

import {
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormButton,
} from 'styled';

import {
  LoginFormView,
  CloseButton,
} from './styled';

import postLogin from 'lib/postLogin';

class LoginForm extends Component {
  constructor() {
    super();

    this.onClose = this.onClose.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onClose() {
    const {
      setHeaderContentState,
      setAppState,
    } = this.props;

    setHeaderContentState({ toggled: null });
    setAppState({ disabledBody: false });
  }

  onLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    postLogin({
      username, 
      password,
    })
      .then(json => {
        //store token and update state
        console.log(json);
      })
  }

  render() {
    const closeButtonProps = {
      type: 'button',
      onClick: this.onClose,
    }

    const usernameInputProps = {
      type: 'text',
      name: 'username',
      required: true,
    }

    const passwordInputProps = {
      type: 'password',
      name: 'password',
      required: true,
    }

    const formProps = {
      onSubmit: this.onLogin,
    }

    return (
      <LoginFormView { ...formProps } >
        <CloseButton { ...closeButtonProps } >x</CloseButton>
        <FormField>
          <FormFieldLabel >Username</FormFieldLabel>
          <FormFieldInput { ...usernameInputProps } />
        </FormField>
        <FormField>
          <FormFieldLabel >Password</FormFieldLabel>
          <FormFieldInput { ...passwordInputProps } />
        </FormField>
        <FormField>
          <FormButton>Log In</FormButton>
        </FormField>
      </LoginFormView>
    )
  }
}

export default LoginForm;