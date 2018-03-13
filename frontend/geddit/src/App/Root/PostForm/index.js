import React, { Component } from 'react';

import {
  PostFormView,
  PostButton,
  DiscussionForm,
  FormTitle,
  TitleInput,
  ContentTextArea,
  SubmitPostButton,
  CancelButton,
} from './styled';

import postDiscussion from 'lib/postDiscussion';

class PostForm extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
    }

    this.onToggle = this.onToggle.bind(this);
    this.onPostDiscussion = this.onPostDiscussion.bind(this);
  }

  onToggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  onPostDiscussion(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;

    postDiscussion({
      title,
      content,
    })
      .then(post => {
        // redirect to post

        console.log(post);
      })
  }

  render() {
    const { collapsed } = this.state;

    const postFormViewProps = {
      collapsed,
    }

    const postButtonProps = {
      onClick: this.onToggle,
    }

    const discussionFormProps = {
      onSubmit: this.onPostDiscussion,
    }

    const titleInputProps = {
      placeholder: 'Title',
      type: 'text',
      name: 'title',
      required: true,
    }

    const ContentTextAreaProps = {
      placeholder: 'Text Content',
      type: 'text',
      name: 'content',
      required: true,
    }

    const submitPostButtonProps = {
      type: 'submit',
    }

    const cancelButtonProps = {
      type: 'button',
      onClick: this.onToggle,
    }

    return (
      <PostFormView { ...postFormViewProps } >
        {
          collapsed
            ? <PostButton { ...postButtonProps } >Start a New Discussion</PostButton>
            : <DiscussionForm { ...discussionFormProps } >
                <FormTitle>Start a New Discussion</FormTitle>
                <TitleInput { ...titleInputProps } />
                <ContentTextArea { ...ContentTextAreaProps } />
                <SubmitPostButton { ...submitPostButtonProps } >Post</SubmitPostButton>
                <CancelButton { ...cancelButtonProps } >Cancel</CancelButton>
              </DiscussionForm>
        }
      </PostFormView>
    )
  }
}

export default PostForm;