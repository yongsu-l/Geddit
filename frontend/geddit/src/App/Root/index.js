import React, { Component, Fragment } from 'react';

import {
  FeedControl,
  ToggleButton,
  FeedView,
  PostFormView,
} from './styled';

import Feed from './Feed';
import PostForm from './PostForm';

import getFeed from 'lib/getFeed';
import verifyQueryString from 'lib/verifyQueryString';
import parseQueryString from 'lib/parseQueryString';

class Root extends Component {
  constructor(props) {
    super();

    this.state = {
      type: null,
      page: null,
      feed: feedSample,
    }

    this.onToggle = this.onToggle.bind(this);
    this.loadFeed = this.loadFeed.bind(this);
    this.onNextPage = this.onNextPage.bind(this);
    this.onGoToPage = this.onGoToPage.bind(this);
  }

  componentDidMount() {
    const { history } = this.props
    
    this.removeHistoryListener = history.listen(location => {
      this.loadFeed(location.search);
    })

    this.loadFeed(history.location.search);
  }

  componentWillUnmount() {
    this.removeHistoryListener();
  }

  loadFeed(queryString) {
    const { history } = this.props;

    if (verifyQueryString(queryString)) {
      var { type, page } = parseQueryString(queryString);

      type = type || 'New';
      page = page || '1';

      this.setState({
        type,
        page,
      })
      
      getFeed({
        type,
        page,
      })
        .then(json => {
          // set state feed
        })

    } else {
      history.push(history.location.pathname);
    }
  }

  onToggle(e) {
    const { textContent } = e.target,
          { type } = this.state,
          { history } = this.props;

    if (textContent !== type) {
      const { pathname } = history.location;
      history.push(`${pathname}?type=${textContent}&page=1`);
    }
  }

  onNextPage() {
    const { page, type } = this.state,
          { history } = this.props;

    const { pathname } = history.location;
    history.push(`${pathname}?type=${type}&page=${parseInt(page, 10)+1}`);
  }

  onGoToPage(e) {
    const { textContent } = e.target,
          { type, page } = this.state,
          { history } = this.props;

    if (textContent !== page) {
      const { pathname } = history.location;
      history.push(`${pathname}?type=${type}&page=${textContent}`);
    }
  }

  render() {
    const {
      type,
      feed
    } = this.state;

    const newToggleProps = {
      onClick: this.onToggle,
      toggled: type === 'New',
    }

    const topToggleProps = {
      onClick: this.onToggle,
      toggled: type === 'Top',
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