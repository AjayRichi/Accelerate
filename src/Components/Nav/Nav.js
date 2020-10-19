import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-left navbar-expand-sm sticky-top">
        <h2 className="head">Vanguard</h2>
        <a className="nav-link participant" href="#">Participant</a>
      </nav>
    )
  }
}

export default Nav