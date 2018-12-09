import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <div className="toolbar">
      <form>
        <input type="text" className="search" placeholder="Search..."/>
      </form>
    </div>
);

export default toolbar;
