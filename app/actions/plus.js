// @flow
import fetch from 'isomorphic-fetch';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ASKINGSERVER = 'ASKINGSERVER';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function askingServer() {
  return (dispatch: () => void) => {
    requestToServer((data: {}) => {
      console.log(data);
      dispatch({
        type: ASKINGSERVER,
        state: data,
      });
    });
  };
}

function requestToServer(callback: ({}) => void) {
  const url = 'http://127.0.0.1:3001/test';
  return fetch(url).then(response => response.json())
  .then(data => callback(data))
  .catch(error => {
    console.log('api failed', error);
  });
}
