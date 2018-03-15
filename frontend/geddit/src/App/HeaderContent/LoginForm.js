import React from 'react';

import {
  FieldSet,
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormButton,
} from 'styled';

import {
  LoginFormView,
  CloseButton,
} from './styled';

const LoginForm = props => {
  const { 
    submitting,
    onFormClose,
    onLogin,
  } = props;

  const closeButtonProps = {
    type: 'button',
    onClick: onFormClose,
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
    onSubmit: onLogin,
  }

  return (
    <LoginFormView { ...formProps } >
      <FieldSet disabled={submitting}>
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
      </FieldSet>
    </LoginFormView>
  )
}

export default LoginForm;