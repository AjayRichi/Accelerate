import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Nav></Nav>
      <Route exact path="/" component={Home} ></Route>
    </Router>
    )
  }
}

export default App;
