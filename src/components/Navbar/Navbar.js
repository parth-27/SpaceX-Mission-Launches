import React from 'react';
import { Link } from 'react-router-dom';
import space from './Spacex.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

export default function Navbar () {
    const { logout, isAuthenticated } = useAuth0();
    const history = useHistory();
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
                    <li className="nav-item" style={{ paddingRight: "20%" }}>
                        <Link to="/launches/">
                            Launches
                        </Link>
                    </li>
                    {
                        isAuthenticated &&
                        <li className="nav-item" style={{ paddingRight: "20%" }}>
                            <Link onClick={() => {
                                logout();
                                history.push("/login");
                            }}>
                            LogOut
                        </Link>
                        </li>
                    }
                </ul>
            </nav>
        )
}
