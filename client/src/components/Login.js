import React from 'react';
import Navbar from './Navbar';
import './Login.css'

 function Login(){
    return (
        <>
            <Navbar />
            <div className='background'>
                <form className='loginForm'>
                    <p className='title'>Log In</p>
                    <input type='text' placeholder='Email Address' className='email'></input>
                    <input type='text' placeholder='Password' className='pass'></input>
                    <button className='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;