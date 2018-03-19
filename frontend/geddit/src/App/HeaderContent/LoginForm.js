import React from 'react';

import {
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormButton,
} from 'styled';

import {
  LoginFormView,
  CloseButton,
  LoaderWrapper,
  InvertedLoader,
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

  const formButtonProps = {
    submitting,
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
          {
            submitting &&
              <LoaderWrapper>
                <InvertedLoader />
              </LoaderWrapper>
          }
          <FormButton { ...formButtonProps } >Log In</FormButton>
        </FormField>
    </LoginFormView>
  )
}

export default LoginForm;