import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Grid from './components/Grid/Grid';
import Toolbar from './components/Toolbar/Toolbar'


class App extends Component {
  componentDidMount(){
    document.title = "donate.in"
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="app-content">
        <Toolbar/>
        <Grid/>
        </div>
      </div>
    );
  }
}

export default App;
