import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'

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
                <li>Profile</li>
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