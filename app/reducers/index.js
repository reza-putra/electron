// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import plus from './plus/plus';
import todo from './todo';

const rootReducer = combineReducers({
  counter,
  routing,
  plus,
  todo
});

export default rootReducer;
