import React, { Component, Fragment } from 'react';

import {
  PostView,
  CommentView,
} from './styled';

import CommentSection from './CommentSection';

import parseQueryString from 'lib/parseQueryString';
import getPost from 'lib/getPost';

class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: null,
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

    const commentSectionProps = {
      comments,
    }

    return (
      loading
        ? <div></div>
        :  <Fragment>
            <PostView>

            </PostView>

            <CommentView>
              <CommentSection { ...commentSectionProps } />
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