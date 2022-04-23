import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <div className='navbar'>
            <img href='../../public/logo.png' alt='logo' className='logo'></img>
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