import React from 'react';
import './Navbar.css';
import arrow from './arrow.svg';
import heart from './heart.svg';

const navbar = props => (
  <header className="outer-navbar">
    <nav className="navbar">
      <div className="logo"><a href="#">donate.in</a></div>
      <div className="tools">
        <ul className="toollist">
          <li className="tool"><button>DONATE</button></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
