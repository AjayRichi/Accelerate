import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import { Doughnut } from 'react-chartjs-2'

import './Home.css'

const state = {
    labels: ['Health', 'Misc Health', 'Other', 'Retirement'],
    datasets: [
        {
            label: 'Insurance',
            backgroundColor: [
                '#6600ff',
                '#00ff00',
                '#ffff00',
                '#ff3333',

            ],
            hoverBackgroundColor: [
                '#3d0099',
                '#00b300',
                '#e6e600',
                '#b30000',
            ],
            data: [40, 15, 20, 25,],
        }
    ]
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <React.Fragment>
                <Nav></Nav>
                <div className="sidenav">
                    <a href="">Dashboard</a>
                    <a href="#accounts">Accounts</a>
                    <a href="#profile">Profile</a>
                    <a href="#activity">Activity</a>
                    <a href="#support">Support</a>
                    <a href="#addcash">Add Cash</a>
                    <a href="#getcash">Get Cash</a>

                </div>
                <div className="container">
                    <h4 className="heading">Welcome to Your personalized benefit dashboard,ABC </h4>
                    <h2 style={{fontWeight:"bold"}}>Dashboard</h2>
                    <div className="row">
                        <div className="card col-md-5" >
                            <div className="card-body">
                                <h3 className="card-title">Benefits overview <a className="link" href="#edit" >Edit</a></h3>
                                <Doughnut width="250"
                                    data={state}
                                    options={{
                                        title: {
                                            display: true,
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right',
                                        }
                                    }}
                                />
                                {/* <div className="outer">
                                    <div className="inner">
                                        
                                    </div>
                                </div> */}
                                {/* <div className="values">
                                    <h6 style={{ color: " rgb(0, 60, 255) " }}>40% Health</h6>
                                    <h6 style={{ color: "green" }}>15% Misc Health</h6>
                                    <h6 style={{ color: "yellow" }}>20% Other</h6>
                                    <h6 style={{ color: "red" }}>25% Retirement</h6>
                                </div> */}
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div className="card col-md-6 " >
                            <div className="card-body">
                                <h3 className="card-title">Contributions overview  <a className="link" href="#edit" >Edit</a></h3>
                                <br />
                                <div className="card1">
                                    <span>TOTAL BALANCE</span>
                                    <h3>$0</h3>
                                </div>
                                <div className="row">
                                    <div className="card1 col-md-6 ">
                                        <span>TOTAL VANGUARD ASSETS </span>
                                        <h4>$0</h4>
                                    </div>
                                    <div className="card1 col-md-6 ">
                                        <span>CONNECTED ACCOUNTS BALANCE </span>
                                        <h4>$0</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card1 col-md-6 ">
                                        <span>TOTAL YEARLY CONTRIBUTIONS </span>
                                        <h4>$0</h4>
                                    </div>
                                    <div className="card1 col-md-6 ">
                                        <span>ATTRIBUTE</span>
                                        <h4>Moderate</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="footer"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home