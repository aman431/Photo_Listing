import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

function index() {
    return (
            <nav className="navbar1">
                <ul className="navbar1_item">
                    <li></li>
                    {/* <li>
                        <Link to="/dashboard" className="list"> Home</Link>
                    </li> */}
                    <li>
                        <Link to="/" className="list">Logout</Link>
                    </li>
                </ul>
            </nav>
    )
}

export default index;
