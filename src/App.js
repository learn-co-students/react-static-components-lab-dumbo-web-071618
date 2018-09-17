import React, { Component } from 'react';
import CatComponent from '../src/CatComponent.js'
import FordQuoteComponent from '../src/FordQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
  render() {
    // your code in the return statement below!
    return (
      <div className="App">
        <CatComponent />
        <FordQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;
