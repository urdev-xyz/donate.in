import React from 'react';
import './Grid.css';
import Card from '../Card/Card';


const grid = props => (
    <div className="outer-grid" >
    <h1 className="grid-title">Trending</h1>
    <div className="grid">
      <Card/>
      <Card/>
      <Card/>
    </div>
    <h1 className="grid-title">New</h1>
    <div className="grid">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
);

export default grid;
