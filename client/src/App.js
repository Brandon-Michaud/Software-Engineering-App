import React from "react";
import './App.css';
import Searchbar from './components/Searchbar';
import LoginButton from './components/loginButton';
 // this is where everthing is render

function App() {
  return (
    <div>
      <header className="App"> 
        <LoginButton />
      </header>
      <body className="App-Search">
        <Searchbar /> 
      </body>
    </div>
  )
}

export default App;
