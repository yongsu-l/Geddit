import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import {
  PostView,
  CommentView,
} from './styled';

import Comment from './Comment';

import parseQueryString from 'lib/parseQueryString';
import getPost from 'lib/getPost';

class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: {},
      comments: commentSamples,
      loading: true,
    }
  }

  componentDidMount() {
    const { history } = this.props;
    const { id } = parseQueryString(history.location.search);

    if (id) {
      getPost(id)
        .then(json => {
          console.log(json);
          this.setState({
            loading: false,
            post: json.post,
          })
        })
    } else {
      history.push('/')
    }
  }

  render() {
    const {
      post,
      comments,
      loading,
    } = this.state;
    
    return (
      loading
      ? <div></div>
      :  <Fragment>
            <PostView>
              {post.title} {post.content}
            </PostView>

            <CommentView>
              { 
                _.map(comments, (comment, id) =>
                  <Comment
                    comment={comment}
                    key={id} />
                )
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