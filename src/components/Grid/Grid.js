import React from 'react';
import './Grid.css';
import Card from '../Card/Card';

export function updateCart() {
  this.setState()
}

class grid extends React.Component{

    generateCard = (foundations) => {
      let cards = [];
      for (var i = 0;i < foundations.length; i++) {
        cards.push(<Card name={foundations[i].name} desc={foundations[i].desc} addDonation={this.props.addDonation}/>);
      }
      return cards
    };
    render() {
      return(
        <div className="outer-grid" >
        <h1 className="grid-title">Trending</h1>
        <div className="grid">
        {this.generateCard(this.props.trendingCards)}
        </div>
        <h1 className="grid-title">New</h1>
        <div className="grid">
        {this.generateCard(this.props.newCards)}

        </div>
        </div>
)}};

export default grid;
