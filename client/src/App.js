import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Routes} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'

// Define a functional component for the whole app. Include route paths for certain pages
function App() {

  // Define a state that will hold the user when they are logged in
  const [user, setUser] = useState(null);

  // Define a function to login that will be passed to other components
  const login = (newUser) => {
    setUser(newUser);
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
                <Route path="/" exact element = {<Home user={user} login={login}/>} />
                <Route path="/profile" element = {<Profile user={user}/>} />
                <Route path="/login" element = {<Login login={login}/>} />
                <Route path= "/signup" element = {<Signup/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
