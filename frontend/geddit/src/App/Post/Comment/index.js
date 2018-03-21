import React, { Component } from 'react';
import _ from 'lodash';

import {
  CommentWrapper,
  CommentP,
  CommentCount,
  ReplyLabel,
  DateLabel,
  HandleLabel,
  CountWrapper,
  CommentContainer,
  ReplyContainer,
  ReplyBox,
  ReplyButton,
  CancelButton,
} from './styled';

import parseTimestamp from 'lib/parseTimestamp';
import parseQueryString from 'lib/parseQueryString';
import postComment from 'lib/postComment';

class Comment extends Component {
  constructor(props) {
    super();

    this.state = {
      collapsed: true,
      visibleReplyBox: false,
      comments: props.comment.comments,
    }

    this.onUncollapse = this.onUncollapse.bind(this);
    this.onReplyToggle = this.onReplyToggle.bind(this);
    this.onReplyComment = this.onReplyComment.bind(this);
  }

  onUncollapse() {
    this.setState({
      collapsed: false,
    })
  }

  onReplyToggle() {
    this.setState(({ visibleReplyBox }) => ({
      visibleReplyBox: !visibleReplyBox,
    }))
  }

  onReplyComment(e) {
    e.preventDefault();
    const { 
      history,
      comment,
      postID,
    } = this.props;

    const content = e.target.content.value;
    const token = window.localStorage.getItem('token');

    postComment({
      token,
      content,
      postID,
      parentID: comment.commentID,
    })
      .then(json => {
        if (json && json.success) {
          this.setState(({ comments }) => {
            comments.push(json.newComment);
            return {
              comments,
            }
          })
          this.onUncollapse();
          this.onReplyToggle();
        }
        console.log(json);
      })
  }

  render() {
    const {
      onUncollapse,
      onReplyToggle,
      onReplyComment,
    } = this;

    const { 
      comment,
      postID,
    } = this.props;

    const {
      collapsed,
      visibleReplyBox,
      comments
    } = this.state;

    const {
      content,
      username,
      dateCreated,
    } = comment;

    const s = comments.length > 1 ? 's' : '';
    const { date, time } = parseTimestamp(dateCreated);

    return (
      <CommentContainer>
        <CommentWrapper >
          <CommentP>{ content }</CommentP>
          <DateLabel>{ date } { time }</DateLabel>
          <CountWrapper>
            <ReplyLabel
              onClick={this.onReplyToggle} >Reply</ReplyLabel>
            <ReplyLabel>Share</ReplyLabel>
            <ReplyLabel>Report</ReplyLabel>
            <HandleLabel>submitted by { username }</HandleLabel>
            {
              comments.length > 0 && collapsed &&
              <CommentCount
                onClick={onUncollapse} >{comments.length} comment{s}</CommentCount>
            }
          </CountWrapper>
        </CommentWrapper>
        <form
          onSubmit={onReplyComment} >
          <ReplyContainer
            visible={visibleReplyBox} >
            <ReplyBox 
              type='text'
              name='content'
              required />
            <CancelButton
              type='button'
              onClick={onReplyToggle} >X</CancelButton>
            <ReplyButton
              type='submit' >Reply</ReplyButton>
          </ReplyContainer>
        </form>
        {
          !collapsed && 
          _.map(comments, (comment, index) => 
            <Comment 
              comment={comment}
              key={index}
              postID={postID}
            />)
        }
      </CommentContainer>      
    )
  }
}

export default Comment;