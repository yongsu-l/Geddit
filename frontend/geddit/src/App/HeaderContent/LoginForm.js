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

  return (
    <LoginFormView
      onSubmit={onLogin} >

      <CloseButton
        type='button'
        onClick={onFormClose} >x</CloseButton>
      <FormField>
        <FormFieldLabel >Username</FormFieldLabel>
        <FormFieldInput
          type='text'
          name='username'
          required />
      </FormField>
      <FormField>
        <FormFieldLabel >Password</FormFieldLabel>
        <FormFieldInput
          type='password'
          name='password'
          required />
      </FormField>
      <FormField>
        {
          submitting &&
            <LoaderWrapper>
              <InvertedLoader />
            </LoaderWrapper>
        }
        <FormButton 
          submitting={submitting} >Log In</FormButton>
      </FormField>
    </LoginFormView>
  )
}

export default LoginForm;