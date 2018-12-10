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
let shoppingCart = [
  {name: 'Python Foundation', price: '12'},
  {name: 'Python Foundation', price: '12'},
  {name: 'Python Foundation', price: '12'},
  {name: 'Python Foundation', price: '12'},
]

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    document.title = "donate.in"
  }

  addDonation(foundationName, donationPrice) {
    let newItem = {name: foundationName, price: donationPrice}
    shoppingCart.push(newItem);
    console.log(shoppingCart)
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="app-content">
        <Toolbar shoppingCart={shoppingCart}/>
        <Grid trendingCards={trendingf} newCards={newf} addDonation={this.addDonation}/>
        </div>
      </div>
    );
  }
}

export default App;
