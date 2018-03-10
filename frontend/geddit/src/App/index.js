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
  render() {
    return (
      <AppView>
        <HeaderView>
          <HeaderContent />
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
