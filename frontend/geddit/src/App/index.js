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
} from './styled';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: null,
      disabledBody: false,
    }

    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(state) {
    this.setState(state);
  }

  render() {
    const {
      setAppState,
    } = this;
    const {
      username,
      disabledBody,
    } = this.state;

    const headerProps = {
      username,
      setAppState,
    }

    return (
      <AppView id='app-view' >
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

      </AppView>
    );
  }
}

export default withRouter(App);

const sampleUser = {
  username: 'yaoc1996',
}