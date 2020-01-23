import React from 'react';
// import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import {Route, Switch} from 'react-router-dom'


function App() {
  return  <>
  <Route exact path="/" component={Home}/>
  <Route exact path="/rooms/" component={Rooms}/>
  <Route exact path="/single-room" component={SingleRoom}/>
  </>
}

export default App;
