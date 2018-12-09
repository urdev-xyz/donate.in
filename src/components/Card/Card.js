import React from 'react';
import './Card.css';


const card = props => (
  <div className="card">
    <div className="image"></div>
    <div className="content">
      <h1 className="org">Python Foundation</h1>
      <h2 className="org-info">Maintains the python programming language</h2>
    </div>
    <div className="purchase">

      <form>
      <h1>$</h1>
        <input title="dollar"
        type = "number"
        maxlength = "6" step="0.01" placeholder="0.00"/>
      </form>
    </div>
  </div>
);

export default card;
