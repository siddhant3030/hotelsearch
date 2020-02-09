import React, { Component } from 'react';
import Header from './components/Header'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      applicationName: 'TrafficMap'
    }
  }

  render() {
    return (
      <div className="App">
      <Header appName={this.state.applicationName}/>
      </div>
    )
  }
}
export default App;
