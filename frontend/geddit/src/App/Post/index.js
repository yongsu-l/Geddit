import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import {
  PostView,
  TitleLabel,
  ContentP,
  HandleLabel,
  Control,
  ControlButton,
  CommentView,
  CommentBox,
  DateLabel,
  TimeLabel,
} from './styled';

import Comment from './Comment';

import parseQueryString from 'lib/parseQueryString';
import parseTimestamp from 'lib/parseTimestamp';
import getPost from 'lib/getPost';
import postComment from 'lib/postComment';

class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: null,
      visibleCommentBox: false,
    }

    this.onToggleCommentBox = this.onToggleCommentBox.bind(this);
    this.onCommentPost = this.onCommentPost.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { id } = parseQueryString(history.location.search);

    if (id) {
      getPost(id)
        .then(json => {
          if (json && json.success) {
            this.setState({
              post: json.post,
            })
          } else {
            history.push('/');
          }
          console.log(json);
        })
    } else {
      history.push('/')
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.post !== nextState.post
        || this.state.visibleCommentBox !== nextState.visibleCommentBox;
  }

  onToggleCommentBox() {
    this.setState(state => ({
      visibleCommentBox: !state.visibleCommentBox,
    }))
  }

  onCommentPost(e) {
    e.preventDefault();

    const token = window.localStorage.getItem('token');
    const { postID } = this.state.post;
    const content = e.target.comment.value;

    postComment({
      token,
      postID,
      content,
    })
      .then(json => {
        if (json && json.success) {
          this.setState(({ post }) => {
            post.comments.push(json.newComment);
            return {
              post,
              visibleCommentBox: false,
            }
          })
        }
        console.log(json);
      })
  }

  render() {
    const {
      onToggleCommentBox,
      onCommentPost,
    } = this;

    const {
      post,
      visibleCommentBox,
    } = this.state;

    const parsedTimestamp = post && parseTimestamp(post.dateCreated);
    
    return (
      post &&
        <Fragment>
          <PostView>
            <TitleLabel>{ post.title }</TitleLabel>
            <HandleLabel>@{ post.username }</HandleLabel>
            <ContentP>{ post.content }</ContentP>
            <DateLabel>{ parsedTimestamp.date }</DateLabel>
            <TimeLabel>{ parsedTimestamp.time }</TimeLabel>
          </PostView>
          <Control
            visibleCommentBox={visibleCommentBox}>
            {
              visibleCommentBox
                ? <form
                    onSubmit={onCommentPost}>
                    <div style={{ fontSize: 12, color: '#777' }}>Comment</div>
                    <CommentBox 
                      type='text'
                      name='comment'
                      required />
                    <ControlButton>Comment</ControlButton>
                    <ControlButton
                      type='button'
                      onClick={onToggleCommentBox} >Cancel</ControlButton>                    
                  </form>
                : <Fragment>
                    <ControlButton
                      onClick={onToggleCommentBox}>Comment</ControlButton>
                  </Fragment>
            }
          </Control>

          <CommentView>
            { 
              (post.comments.length > 0)
                ? _.map(post.comments, (comment, id) =>
                    <Comment
                      comment={comment}
                      key={id} />
                  )
                : <div>No Comments</div>
            }
          </CommentView>
        </Fragment>
        
    )
  }
}

export default Post;

const commentSamples = [
  {
    username: 'asdf23',
    content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
    comments: [
      {
        username: 'asdf23',
        content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
        comments: [
          {
            username: 'asdf23',
            content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
            comments: [
              {
                username: 'asdf23',
                content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
                comments: [
                  {
                    username: 'asdf23',
                    content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
                    comments: [],
                  },
                  {
                    username: 'asdf23',
                    content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
                    comments: [],
                  },
                  {
                    username: 'asdf23',
                    content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
                    comments: [
                      {
                        username: 'asdf23',
                        content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
                        comments: [],
                      }
                    ],
                  }
                ],
              }
            ],
          }
        ]
      }
    ]
  },
  {
    username: 'asdf23',
    content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
    comments: [
      {
        username: 'asdf23',
        content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
        comments: [],
      }
    ]
  },
  {
    username: 'asdf23',
    content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
    comments: [
      {
        username: 'asdf23',
        content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
        comments: [],
      }
    ]
  },
  {
    username: 'asdf23',
    content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
    comments: [
      {
        username: 'asdf23',
        content: 'asdflas;fj sadf sadf asdf asdf asdf asd fasdf asf asd fasdf asf',
        comments: [],
      }
    ]
  }
]