import React from 'react';
import Navbar from './Navbar';
import './Signup.css'

 function Signup(){
    return (
        <div className='signup'>
            <Navbar />
            <div className='background'>
                <form className='signupForm'>
                    <p className='title'>Sign Up</p>
                    <input type='email' placeholder='Email Address' className='email' required></input>
                    <input type='password' placeholder='Password' className='pass' required></input>
                    <select className='gender' required>
                        <option hidden disabled selected value>Select a Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="number" placeholder='Age in Years' className='age' required></input>
                    <input type="number" placeholder='Height in Inches' className='height' required></input>
                    <input type="number" placeholder='Weight in Pounds' className='weight' required></input>
                    <select className='activity' required>
                        <option hidden disabled selected value>Select an Activity Level</option>
                        <option>Sedentary</option>
                        <option>Lightly Active</option>
                        <option>Moderately Active</option>
                        <option>Very Active</option>
                        <option>Extra Active</option>
                    </select>
                    <button className='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;