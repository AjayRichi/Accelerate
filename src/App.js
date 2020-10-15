import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import Search from './Components/Search'

function App() {
  return (
    <Router>
      <Route path="" component={Search}></Route>
      
    </Router>
  );
}

export default App;
