import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'

function App() {

  const [user, setUser] = useState(null);

  const login = (newUser) => {
    setUser(newUser);
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
                <Route path="/" exact element = {<Home user={user}/>} />
                <Route path="/login" element = {<Login login={login}/>} />
                <Route path= "/signup" element = {<Signup/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
