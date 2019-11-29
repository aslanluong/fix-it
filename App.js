import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';



import Rate from './src/Rate';
import Timeline from './src/Timeline';



export default class App extends Component {
  render() {
    return (
      <Timeline/>
    )
  }
}
