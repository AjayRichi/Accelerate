import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'

class App extends React.Component{
  render(){
    return(
      <Router>
      <Route exact path="/" component={Dashboard} ></Route>
    </Router>
    )
  }
}

export default App;
