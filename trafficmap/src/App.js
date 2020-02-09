import { Container } from 'reactstrap'
import React, { Component } from 'react';
import Header from './components/Header'
import Map from './components/Map'

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
      <Container>
        <Map />
      </Container>
      </div>
    )
  }
}
export default App;
