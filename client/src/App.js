import React, { Component } from "react";
import './App.css';
import Searchbar from './components/Searchbar';
import LoginButton from './components/loginButton';
 // this is where everthing is render

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { serverResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testServer")
      .then(res => res.text())
      .then(res => this.setState({ serverResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <header className="App"> 
          <LoginButton />
        </header>
        <header className="App-header">
          Three A Mangos
        </header>
        <body className="App-Search">
          <Searchbar /> 
        </body>
      </div>
    )
  }
}

export default App;
