import React from 'react';
import './Toolbar.css';
import Checkout from '../Checkout/Checkout';

const toolbar = props => (
    <div className="toolbar">
      <form>
        <input type="text" className="search" placeholder="Search..."/>
      </form>
      <Checkout/>
    </div>
);

export default toolbar;
