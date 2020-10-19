import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidenav">
          <a href="">Dashboard</a>
          <a href="#accounts">Accounts</a>
          <a href="#profile">Profile</a>
          <a href="#activity">Activity</a>
          <a href="#support">Support</a>
          <a href="#addcash">Add Cash</a>
          <a href="#getcash">Get Cash</a>
        </div>
        <nav className="navbar navbar-left navbar-expand-sm sticky-top">
          <h2 className="head">Vanguard</h2>
          <a className="nav-link participant" href="#">Participant</a>
        </nav>
      </React.Fragment>

    )
  }
}

export default Nav