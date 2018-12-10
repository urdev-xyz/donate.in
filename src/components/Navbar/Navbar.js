import React from 'react';
import './Navbar.css';
import arrow from './arrow.svg';
import heart from './heart.svg';

const navbar = props => (
  <header className="outer-navbar" style={{position: 'fixed', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0, zIndex: 100}}>
    <nav className="navbar">
      <div className="logo"><a href="#">urdonation</a></div>
      <div className="tools">
        <ul className="toollist">
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
