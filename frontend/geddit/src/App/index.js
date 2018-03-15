import React, { Fragment, Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import HeaderContent from './HeaderContent';
import Root from './Root';
import Post from './Post';

import {
  AppView,
  HeaderView,
  BodyView,
  Mask,
  LoaderWrapper,
} from './styled';

import {
  Loader,
} from 'styled';

import getAuthorization from 'lib/getAuthorization';
import setTimeoutUntilExec from 'lib/setTimeoutUntilExec';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      username: null,
      disabledBody: false,
    }

    this.setAppState = this.setAppState.bind(this);
  }

  componentDidMount() {
    window.localStorage.clear();
    const {
      history,
    } = this.props;

    const updateLoadingState = setTimeoutUntilExec(() => {
      this.setState({
        loading: false,
      })
    }, 1500);
    
    const token = window.localStorage.getItem('token');

    const redirect = (pathname) => {
      switch (pathname) {
        case '/signup':
        case '/login':
        case '/':
          break;
        default:
          history.push('/' + history.location.search);
      }
    }

    if (token) {
      getAuthorization(token)
        .then(json => {
          const {
            success,
            username,
          } = json;

          if (success) {
            this.setState({
              username,
              loading: false,
            })
          } else {
            redirect(history.location.pathname);
            updateLoadingState();
          }
        })
    } else {
      redirect(history.location.pathname); 
      updateLoadingState();
    }
  }

  setAppState(state) {
    this.setState(state);
  }

  render() {
    const {
      setAppState,
    } = this;
    const {
      loading,
      username,
      disabledBody,
    } = this.state;

    const headerProps = {
      username,
      setAppState,
    }

    return (
      <AppView id='app-view' >
        {
          loading
            ? <Loader />
            : <Fragment>
                <HeaderView id='header-view'>
                  <HeaderContent { ...headerProps } />
                </HeaderView>
                
                <BodyView id='body-view'>
                  {
                    disabledBody && <Mask />
                  }
                  <Switch>
                    <Route exact path='/post' component={Post} />
                    <Route path='/' component={Root} />
                  </Switch>
                </BodyView>
              </Fragment>
        }
      </AppView>
    );
  }
}

export default withRouter(App);

const sampleUser = {
  username: 'yaoc1996',
}