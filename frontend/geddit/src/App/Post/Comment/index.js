import React, { Component } from 'react';
import _ from 'lodash';

import {
  CommentWrapper,
  CommentP,
  CommentCount,
  HandleLabel,
  CountWrapper,
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
      onUncollapse,
    } = this;

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

    const s = comments.length > 1 ? 's' : '';

    return (
      <CommentWrapper 
        colorId={colorId} 
        collapsed={collapsed} >

        <CommentP>{ content }</CommentP>
        <HandleLabel>{ username }</HandleLabel>
        {
          comments.length > 0
            ? collapsed
                ? <CountWrapper>
                    <CommentCount
                      onClick={onUncollapse} >{comments.length} comment{s}</CommentCount>
                  </CountWrapper>
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

Comment.defaultProps = {
  colorId: 0,
}

export default Comment;