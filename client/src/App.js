import React from "react";
import './App.css';
import Searchbar from './components/Searchbar';
import LoginButton from './components/loginButton';
 // this is where everthing is render

function App() {
  return (
    <>
      <header className="App"> 
        <LoginButton />
      </header>
      <Searchbar /> 
    </>
  )
}

export default App;
