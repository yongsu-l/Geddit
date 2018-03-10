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

import login from 'lib/login';

class LoginForm extends Component {
  constructor() {
    super();

    this.onClose = this.onClose.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onClose() {
    this.props.setHeaderContentState({
      toggled: null,
    })
  }

  onLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
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

    const emailInputProps = {
      type: 'text',
      name: 'email',
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
          <FormFieldLabel >Email</FormFieldLabel>
          <FormFieldInput { ...emailInputProps } />
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