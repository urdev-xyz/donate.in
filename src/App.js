import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Grid from './components/Grid/Grid';
import Toolbar from './components/Toolbar/Toolbar'

let trendingf = [
  {name: 'Python Foundation', desc: 'The Python Foundation maintains the python programming language.'},
  {name: 'Linux Foundation', desc: 'The Python Foundation maintains the Linux Operating System.'},
  {name: 'Python Foundation', desc: 'The Python Foundation maintains the python programming language.'},
];
let newf = [
  {name: 'Python Foundation', desc: 'The Python Foundation maintains the python programming language.'},
  {name: 'Linux Foundation', desc: 'The Python Foundation maintains the Linux Operating System.'},
  {name: 'Python Foundation', desc: 'The Python Foundation maintains the python programming language.'},
  {name: 'Python Foundation', desc: 'The Python Foundation maintains the python programming language.'},
  {name: 'Linux Foundation', desc: 'The Python Foundation maintains the Linux Operating System.'},
  {name: 'Python Foundation', desc: 'The Python Foundation maintains the python programming language.'},
  {name: 'Python Foundation', desc: 'The Python Foundation maintains the python programming language.'},
  {name: 'Linux Foundation', desc: 'The Python Foundation maintains the Linux Operating System.'},
  {name: 'Python Foundation', desc: 'The Python Foundation maintains the python programming language.'},
];

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
        <Grid trendingCards={trendingf} newCards={newf}/>
        </div>
      </div>
    );
  }
}

export default App;
