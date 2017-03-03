// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <Link to="/plus"> to Plus </Link>
          <Link to="/todo"> to todo </Link>
        </div>
      </div>
    );
  }
}
