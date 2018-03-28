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
  LoaderWrapper,
  InvertedLoader,
} from './styled';

const SignupForm = props => {
  const {
    onSignup,
    onFormClose,
    submitting,
  } = props;

  return (
    <SignupFormView
      onSubmit={onSignup} >

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
        <FormFieldLabel >Email</FormFieldLabel>
        <FormFieldInput
          type='text'
          name='email'
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
        <FormFieldLabel >Confirm Password</FormFieldLabel>
        <FormFieldInput
          type='password'
          name='confirm'
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
          submitting={submitting} >Sign Up</FormButton>
      </FormField>
    </SignupFormView>
  );
};

export default SignupForm;