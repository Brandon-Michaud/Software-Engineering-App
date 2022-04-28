import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'

// Define a functional component for the navigation bar that includes links pages
function Navbar(){

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt='logo'></img>
            </div>
            <ul className='pages'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to="/profile">
                    <li>Profile</li>
                </Link>
            </ul>
            <ul className='personal'>
                <Link to='/login'>
                    <li>Log In</li>
                </Link>
                <Link to='/signup'>
                    <li>Sign Up</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;