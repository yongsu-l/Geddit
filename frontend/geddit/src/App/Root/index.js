import React, { Component, Fragment } from 'react';

import {
  FeedControlView,
  FeedView,
  PostFormView,
  PageNavigationView,
  PostButton,
} from './styled';

import FeedControl from './FeedControl';
import Feed from './Feed';
import PageNavigation from './PageNavigation';
import PostForm from './PostForm';

import getFeed from 'lib/getFeed';
import postDiscussion from 'lib/postDiscussion';
import verifyQueryString from 'lib/verifyQueryString';
import parseQueryString from 'lib/parseQueryString';

class Root extends Component {
  constructor(props) {
    super();

    this.state = {
      type: null,
      page: null,
      numPage: 16,
      feed: [],
      collapsedForm: true,
    }

    this.onToggle = this.onToggle.bind(this);
    this.onPostFormToggle = this.onPostFormToggle.bind(this);
    this.loadFeed = this.loadFeed.bind(this);
    this.onNextPage = this.onNextPage.bind(this);
    this.onGoToPage = this.onGoToPage.bind(this);
    this.onPostDiscussion = this.onPostDiscussion.bind(this);  
    this.redirectToPost = this.redirectToPost.bind(this);  
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

      type = type || 'new';
      page = page || '1';

      if (type !== this.state.type || page !== this.state.page) {
        this.setState({
          type,
          page,
        })
        
        getFeed({
          type,
          page,
        })
          .then(json => {
            if (json && json.success) {
              this.setState({
                feed: json.posts,
              })
            } else {
              console.log('error');
            }
          })
      }
    } else {
      history.push(history.location.pathname);
    }
  }

  onToggle(e) {
    const textContent = e.target.textContent.toLowerCase(),
          { type } = this.state,
          { history } = this.props;

    if (textContent !== type) {
      const { pathname } = history.location;
      history.push(`${pathname}?type=${textContent}&page=1`);
    }
  }

  redirectToPost(id) {
    const { history } = this.props;
    return () => {
      history.push(`/post?id=${id}`)
    }
  }

  onPostFormToggle() {
    this.setState({
      collapsedForm: !this.state.collapsedForm,
    })
  }

  onNextPage() {
    const { 
      page, 
      type,
      numPage,
    } = this.state;

    if (parseInt(page, 10) < parseInt(numPage, 10)) {
      const { history } = this.props;
      const { pathname } = history.location;
      
      history.push(`${pathname}?type=${type}&page=${parseInt(page, 10)+1}`);
    }
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

  onPostDiscussion(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;
    const token = window.localStorage.getItem('token');

    postDiscussion(token, {
      title,
      content,
    })
      .then(json => {
        // redirect to post
        if (json && json.success) {
          this.props.history.push('/post?id=' + json.id);
        } else {
          // failed to create post
        }
      })
  }

  render() {
    const {
      onToggle,
      onPostFormToggle,
      onNextPage,
      onGoToPage,
      onPostDiscussion,
      redirectToPost,
    } = this;

    const {
      feed,
      type,
      page,
      numPage,
      collapsedForm,
    } = this.state;

    return (
      <Fragment>
        
        <FeedControlView>
            <FeedControl 
              onToggle={onToggle}
              type={type} />
        </FeedControlView>

        <FeedView>
            <Feed
              feed={feed}
              redirectToPost={redirectToPost} />
        </FeedView>

        <PageNavigationView>
            <PageNavigation
              page={page}
              numPage={numPage}
              onNextPage={onNextPage}
              onGoToPage={onGoToPage} />
        </PageNavigationView>

        <PostFormView
          collapsedForm={collapsedForm}>
          {
            collapsedForm
              ? <PostButton
                  onClick={onPostFormToggle}
                  children={
                    'Start a New Discussion'
                  } />
              : <PostForm 
                  onPostFormToggle={onPostFormToggle}
                  onPostDiscussion={onPostDiscussion} />
          }
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