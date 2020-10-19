import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import Search from './Components/Home/Home'


class App extends React.Component{
  render(){
    return(
      <Search></Search>
    )
  }
}

export default App;
