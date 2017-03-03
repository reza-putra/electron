// @flow
import request from 'request';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export type counterStateType = {
  counter: number
};

type actionType = {
  type: string
};

export default function counter(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

export function plus(state: number = 1, action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

function google() {
  return request.get('http://google.com')
  .on('response', (response) => {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']); // 'image/png'
  });
}
