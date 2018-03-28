import React from 'react';

import {
  DiscussionForm,
  FormTitle,
  TitleInput,
  ContentTextArea,
  SubmitPostButton,
  CancelButton,
} from './styled';


const PostForm = props => {
  const {
    onPostDiscussion,
    onPostFormToggle,
  } = props;

  return (
    <DiscussionForm
      onSubmit={onPostDiscussion} >

      <FormTitle>Start a New Discussion</FormTitle>

      <TitleInput
        placeholder='Title'
        type='text'
        name='title'
        required />

      <ContentTextArea
        placeholder='Text'
        type='text'
        name='content'
        required />

      <SubmitPostButton 
        type='submit' >Post</SubmitPostButton>

      <CancelButton 
        type='button'
        onClick={onPostFormToggle}>Cancel</CancelButton>
        
    </DiscussionForm>
  );
};

export default PostForm;