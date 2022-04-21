import React from 'react';
import Navbar from './Navbar';
import './Login.css'

 function Login(){
    return (
        <div className='login'>
            <Navbar />
            <div className='background'>
                <form className='loginForm'>
                    <p className='title'>Log In</p>
                    <input type='email' placeholder='Email Address' className='email' required></input>
                    <input type='password' placeholder='Password' className='pass' required></input>
                    <button className='submit'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;