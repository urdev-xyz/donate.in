import React from 'react';
import './Checkout.css';
import donate from '../Card/add.svg';


class Donation extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div className="donation">
      <div className="donation-remove">
        <img src={donate}/>
      </div>
      <div className="donation-info">
        <h1>{this.props.name}</h1>
      </div>
      <div className="donation-cost">
        <h1>$12</h1>
      </div>
    </div>
  )
  }
};

class Checkout extends React.Component {
    constructor(props){
      super(props);
      console.log(this.props)
    }
    generateCart = (shoppingCart) => {
      let cards = [];
      for (var i = 0;i < shoppingCart.length; i++) {
        cards.push(<Donation name={shoppingCart[i].name}/>);
      }
      return cards
    };
    render(){
      return(
        <div className="checkout">
          <h1>Donations -</h1>
          {this.generateCart(this.props.shoppingCart)}
          <div className="checkout-total">
            <h1> Total: $12 </h1>
            <button>Checkout</button>
          </div>
        </div>
      )
  }
};

export default Checkout;
