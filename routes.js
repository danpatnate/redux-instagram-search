import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './components/App';
import Self from './containers/self/Self';
import NotFound from './components/NotFound';

export default (
  <Route component={App}>
    <Route path="/navName" component={Self} />
    <Route path="/home" component={Self} />
    <Redirect from="/" to="/home" />
    <Route path="*" component={NotFound} />
  </Route>
);
