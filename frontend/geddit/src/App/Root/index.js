import React, { Component, Fragment } from 'react';

import {
  FeedControl,
  ToggleButton,
  FeedView,
  PostFormView,
} from './styled';

import Feed from './Feed';
import PostForm from './PostForm';

class Root extends Component {
  constructor() {
    super();

    this.state = {
      feedType: 'New',
      feed: feedSample,
    }

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    const { textContent } = e.target,
          { feedType } = this.state;

    if (textContent !== feedType) {

      this.setState({
        feedType: textContent,
      })
    }
  }

  render() {
    const {
      feedType,
      feed
    } = this.state;

    const newToggleProps = {
      onClick: this.onToggle,
      toggled: feedType === 'New',
    }

    const topToggleProps = {
      onClick: this.onToggle,
      toggled: feedType === 'Top',
    }

    const feedProps = {
      feed,
    }

    return (
      <Fragment>
        
        <FeedControl>
          <ToggleButton { ...newToggleProps } >New</ToggleButton>
          <ToggleButton { ...topToggleProps } >Top</ToggleButton>
        </FeedControl>

        <FeedView>
          <Feed { ...feedProps } />
        </FeedView>

        <PostFormView>
          <PostForm />
        </PostFormView>

      </Fragment>
    )
  }
}

export default Root;

const feedSample = [
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfs d fsa f a f a s d flasdjflasdlfj asdlfjlasj flajsdklfjasldfasdfas asdfasdfa sfdas fas fa sdfas df asa sasd'
  },
  {
    title: 'Some random Post Titles adfssad fas df sdaf sda fasd f dfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles ad asd fsad f dsf asd fas f asdf asfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfssad fas df sdaf sda fasd f dfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
  {
    title: 'Some random Post Titles ad asd fsad f dsf asd fas f asdf asfsdfasd'
  },
  {
    title: 'Some random Post Titles adfsdfasd'
  },
]