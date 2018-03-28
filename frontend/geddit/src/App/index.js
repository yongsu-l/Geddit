import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import HeaderContent from './HeaderContent';
import Root from './Root';
import Post from './Post';

import {
  AppView,
  HeaderView,
  BodyView,
  Mask,
  LoadingView,
  LoaderWrapper,
} from './styled';

import {
  Loader,
} from 'styled';

import getAuthorization from 'lib/getAuthorization';
import setTimeoutOrUntilExec from 'lib/setTimeoutOrUntilExec';
import withLoader from 'lib/withLoader';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: null,
      disabledBody: false,
    };

    this.setAppState = this.setAppState.bind(this);
    this.loadApp = this.loadApp.bind(this);
  }

  componentDidMount() {
    const {
      history,
      show,
    } = this.props;

    const exec = setTimeoutOrUntilExec(show, 1666);
    
    const token = window.localStorage.getItem('token');

    const redirect = (pathname) => {
      switch (pathname) {
        case '/post':
        case '/':
          break;
        default:
          history.push('/' + history.location.search);
      }
    };

    if (token) {
      getAuthorization(token)
        .then(json => {
          if (json && json.success) {
            this.setState({
              username: json.username,
            });
          } else {
            redirect(history.location.pathname);
          }
          exec();
        });
    } else {
      redirect(history.location.pathname); 
      exec();
    }
  }

  setAppState(state) {
    this.setState(state);
  }

  loadApp(timeout) {
    this.props.load();
    setTimeout(this.props.show, timeout);
  }

  render() {
    const {
      setAppState,
      loadApp,
    } = this;

    const {
      username,
      disabledBody,
    } = this.state;

    return (
      <AppView id='app-view' >
        <HeaderView id='header-view'>
          <HeaderContent
            username={username}
            setAppState={setAppState}
            loadApp={loadApp} />
        </HeaderView>
        
        <BodyView id='body-view'>
          {
            disabledBody && <Mask />
          }
          <Switch>
            <Route 
              exact 
              path='/post' 
              render={props => 
                <Post
                  username={username}
                  { ...props } />
              } />
            <Route 
              path='/' 
              render={props =>
                <Root
                  setAppState={setAppState}
                  loadApp={loadApp}
                  { ...props } />
              } />
          </Switch>
        </BodyView>
      </AppView>
    );
  }
}

const AppLoader = props =>
  <LoadingView>
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  </LoadingView>;

export default withRouter(withLoader({
  Component: App,
  Loader: AppLoader,
}));