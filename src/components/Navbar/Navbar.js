import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import space from './Spacex.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-sm bg-dark">
                <Link to="/">
                    <img src={space} alt="" />
                </Link>
                <ul className="navbar-nav ml-auto" style={{ paddingRight: "5%",fontSize:"1.5rem" }}>
                    {/* <li class="nav-item" style={{ paddingRight: "20%" }}>
                        <Link to="missions/">
                            Missions
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/launches/">
                            Launches
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        )
    }
}
