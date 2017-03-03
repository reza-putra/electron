// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import PlusPage from './containers/PlusPage';
import TodoPage from './containers/TodoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/plus" component={PlusPage} />
    <Route path="/todo" component={TodoPage} />
  </Route>
);
