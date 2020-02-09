import React, { Component } from 'react';
import Header from './components/Header'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="App">
      <Header />
      </div>
    )
  }
}
export default App;
