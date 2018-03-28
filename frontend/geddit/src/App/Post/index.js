import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import {
  PostBG,
  PostContainer,
  PostView,
  TitleLabel,
  ContentP,
  HandleLabel,
  Control,
  ControlButton,
  VoteCount,
  VoteButton,
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
import putUpvote from 'lib/putUpvote';

class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: null,
      comments: null,
      visibleCommentBox: false,
    };

    this.onToggleCommentBox = this.onToggleCommentBox.bind(this);
    this.onCommentPost = this.onCommentPost.bind(this);
    this.onUpvote = this.onUpvote.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { id } = parseQueryString(history.location.search);

    if (id && !this.state.post) {
      getPost(id)
        .then(json => {
          if (json && json.success) {
            this.setState({
              post: json.post,
              comments: json.post.comments,
            });
          } else {
            history.push('/');
          }
          console.log(json);
        });
    } else {
      history.push('/');
    }
  }

  onToggleCommentBox() {
    this.setState(state => ({
      visibleCommentBox: !state.visibleCommentBox,
    }));
  }

  onCommentPost(e) {
    e.preventDefault();
    e.persist();    

    const token = window.localStorage.getItem('token');
    const content = e.target.comment.value;
    const { history } = this.props;
    const { id } = parseQueryString(history.location.search);    

    postComment({
      token,
      postID: id,
      content,
    })
      .then(json => {
        if (json && json.success) {
          this.setState(({ comments }) => {
            comments.push(json.newComment);
            return {
              comments,
              visibleCommentBox: false,
            };
          });
        }
        e.target.comment.textContent = '';        
        console.log(json);
      });
  }

  onUpvote(e) {
    const token = window.localStorage.getItem('token');
    const { history } = this.props;
    const { id } = parseQueryString(history.location.search);

    putUpvote({ 
      token, 
      postID: id, 
      upvote: true
    })
      .then(json => {
        if (json && json.success) {
          this.setState(({ post }) => {
            post.votes++;
            return {
              post,
            };
          });
        }
        console.log(json);
      });
  }

  render() {
    const {
      onToggleCommentBox,
      onCommentPost,
    } = this;

    const {
      post,
      comments,
      visibleCommentBox,
    } = this.state;

    const parsedTimestamp = post && parseTimestamp(post.dateCreated);
    const postID = parseQueryString(this.props.history.location.search).id;

    return (
      post &&
        <PostBG>
          <PostContainer>
            <PostView>
              <TitleLabel>{ post.title }</TitleLabel>
              <HandleLabel>submitted by { post.username }</HandleLabel>
              <ContentP>{ post.content }</ContentP>
              <DateLabel>{ parsedTimestamp.date }</DateLabel>
              <TimeLabel>{ parsedTimestamp.time }</TimeLabel>
            </PostView>
            <Control
              visibleCommentBox={visibleCommentBox} >
              <VoteButton
                style={{
                  color: 'darkblue',
                }}
                onClick={this.onUpvote} >thumb_up</VoteButton>
              <VoteCount
                votes={post.votes} >{ post.votes }</VoteCount>
              <VoteButton
                style={{
                  transform: 'rotate(180deg)',
                  color: 'darkred',
                }} >thumb_up</VoteButton>            
              {
                visibleCommentBox
                  ? <form
                      onSubmit={onCommentPost}>
                      <div style={{ 
                        fontSize: 12, 
                        color: '#777',
                        marginTop: 12,
                        }} >Comment</div>
                      <CommentBox 
                        type='text'
                        name='comment'
                        required />
                      <ControlButton>Comment</ControlButton>
                      <ControlButton
                        type='button'
                        style={{
                          color: 'red',
                        }}
                        onClick={onToggleCommentBox} >Cancel</ControlButton>                    
                    </form>
                  : <Fragment>
                      <ControlButton
                        onClick={onToggleCommentBox}>Comment</ControlButton>
                    </Fragment>
              }
            </Control>
          </PostContainer>

          <CommentView>
            <div 
              style={{
                color: 'white',
                fontWeight: 400,
              }} >{ comments.length === 0 && 'No ' }Comments</div>
            { 
              _.map(comments, (comment, id) =>
                <Comment
                  comment={comment}
                  key={id}
                  postID={postID} />
              )
            }
          </CommentView>
        </PostBG>
        
    );
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
];