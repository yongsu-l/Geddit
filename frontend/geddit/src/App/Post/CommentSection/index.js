import React, { Fragment, Component } from 'react';
import _ from 'lodash';

import {
  CommentWrapper,
  CommentCount,
} from './styled';


class Comment extends Component {
  constructor(props) {
    super();

    this.state = {
      collapsed: true,
    }

    this.onUncollapse = this.onUncollapse.bind(this);
  }

  onUncollapse() {
    this.setState({
      collapsed: false,
    })
  }

  render() {
    const { 
      colorId,
      comment,
    } = this.props;

    const { collapsed } = this.state;

    const {
      content,
      username,
      comments,
    } = comment;

    const commentCountProps = {
      onClick: this.onUncollapse,
    }

    return (
      <CommentWrapper colorId={colorId}>
        <div>{ content }</div>
        <label style={{ marginLeft: 16, color: 'blue', }}>by: { username }</label>
        {
          comments.length > 0
            ? collapsed
                ? <CommentCount { ...commentCountProps } >
                    {comments.length} comment{comments.length > 1 ? 's' : ''}
                  </CommentCount>
                : _.map(comments, (comment, index) => 
                    <Comment 
                      colorId={colorId+1}
                      comment={comment}
                      key={index}
                    />)
            : null
        }
      </CommentWrapper>
    )
  }
}

const CommentSection = props => {
  return (
    _.map(props.comments, (comment, index) =>
      <Comment
        colorId={0}
        comment={comment}
        key={index}
      />
    )
  )
}

export default CommentSection;