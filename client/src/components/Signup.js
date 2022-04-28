import React, {useState} from 'react';
import './Signup.css'

// Define a functional component for the sign up page
function Signup(){

    // Define a state for the inputs
    const [input, setInput] = useState({email: '', password: '', gender: 'null', age: '', height: '', weight: '', activity: 'null'})

    // When the form is submitted, convert the activity level to a number and call the sign up route with the input data
    const submitHandler = (event) => {
        event.preventDefault();
        let activityLevel;
        if (event.currentTarget.elements.activity.value === 'Sedentary') {
            activityLevel = 1.2;
        }
        else if (event.currentTarget.elements.activity.value === 'Lightly Active') {
            activityLevel = 1.375;
        }
        else if (event.currentTarget.elements.activity.value === 'Moderately Active') {
            activityLevel = 1.55;
        }
        else if (event.currentTarget.elements.activity.value === 'Very Active') {
            activityLevel = 1.725;
        }
        else {
            activityLevel = 1.9;
        }
        fetch(`http://localhost:9000/signup/${encodeURIComponent(event.currentTarget.elements.email.value)}/${encodeURIComponent(event.currentTarget.elements.password.value)}/${encodeURIComponent(event.currentTarget.elements.gender.value)}/${encodeURIComponent(event.currentTarget.elements.age.value)}/${encodeURIComponent(event.currentTarget.elements.height.value)}/${encodeURIComponent(event.currentTarget.elements.weight.value)}/${encodeURIComponent(activityLevel)}`)
        setInput({...input, email: '', password: '', gender: 'null', age: '', height: '', weight: '', activity: 'null'})
    }

    return (
        <div className='signup'>
            <div className='background'>
                <form className='signupForm' onSubmit={submitHandler}>
                    <p className='title'>Sign Up</p>
                    <input type='email' placeholder='Email Address' className='email' id='email' onChange={e => setInput({...input, email: e.target.value})} value={input.email} required></input>
                    <input type='password' placeholder='Password' className='pass' id='password' onChange={e => setInput({...input, password: e.target.value})} value={input.password} required></input>
                    <select className='gender' id='gender' onChange={e => setInput({...input, gender: e.target.value})} value={input.gender} required>
                        <option hidden disabled selected value='null'>Select a Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="number" placeholder='Age in Years' className='age' id='age' onChange={e => setInput({...input, age: e.target.value})} value={input.age} required></input>
                    <input type="number" placeholder='Height in Inches' className='height' id='height' onChange={e => setInput({...input, height: e.target.value})} value={input.height} required></input>
                    <input type="number" placeholder='Weight in Pounds' className='weight' id='weight' onChange={e => setInput({...input, weight: e.target.value})} value={input.weight} required></input>
                    <select className='activity' id='activity' onChange={e => setInput({...input, activity: e.target.value})} value={input.activity} required>
                        <option hidden disabled selected value='null'>Select an Activity Level</option>
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