import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import HeaderContent from './HeaderContent';
import Root from './Root';

import {
  AppView,
  HeaderView,
  BodyView,
} from './styled';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
    }
  }

  render() {
    const {
      user,
    } = this.state;

    const headerProps = {
      user,
    }

    return (
      <AppView>
        <HeaderView>
          <HeaderContent { ...headerProps } />
        </HeaderView>

        <BodyView>
          <Switch>
            <Route exact to='/' component={Root} />
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