import React from 'react';

import {
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormButton,
} from 'styled';

import {
  SignupFormView,
  CloseButton,
} from './styled';

const SignupForm = props => {
  const {
    onSignup,
    onFormClose,
  } = props;

  const signupFormProps = {
    onSubmit: onSignup,
  }

  const closeButtonProps = {
    type: 'button',
    onClick: onFormClose,
  }

  const usernameInputProps = {
    type: 'text',
    name: 'username',
    required: true,
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

  const confirmInputProps = {
    ...passwordInputProps,
    name: 'confirm',
  }

  return (
    <SignupFormView { ...signupFormProps } >
      <CloseButton { ...closeButtonProps } >x</CloseButton>
      <FormField>
        <FormFieldLabel >Username</FormFieldLabel>
        <FormFieldInput { ...usernameInputProps } />
      </FormField>
      <FormField>
        <FormFieldLabel >Email</FormFieldLabel>
        <FormFieldInput { ...emailInputProps } />
      </FormField>
      <FormField>
        <FormFieldLabel >Password</FormFieldLabel>
        <FormFieldInput { ...passwordInputProps } />
      </FormField>
      <FormField>
        <FormFieldLabel >Confirm Password</FormFieldLabel>
        <FormFieldInput { ...confirmInputProps } />
      </FormField>
      <FormField>
        <FormButton>Sign Up</FormButton>
      </FormField>
    </SignupFormView>
  )
}

export default SignupForm;