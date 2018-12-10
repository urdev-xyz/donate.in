import React from 'react';
import './Checkout.css';
import donate from '../Card/add.svg';

const Donation = props => (
    <div className="donation">
      <div className="donation-remove">
        <img src={donate}/>
      </div>
      <div className="donation-info">
        <h1>Python Foundation</h1>
      </div>
      <div className="donation-cost">
        <h1>$12</h1>
      </div>
    </div>
);

const checkout = props => (
    <div className="checkout">
      <h1>Donations -</h1>
      <Donation/>
      <Donation/>
      <Donation/>
      <div className="checkout-total">
        <h1> Total: $12 </h1>
        <button>Checkout</button>

      </div>
    </div>
);

export default checkout;
