import React from 'react';
import './Nav.scss';

function Nav(props) {
  return (
    <nav className="navbar" >
      <div className="navbar-logo">
        ETH-Todo
      </div>
      <ul className="navbar-list" >
        <p> {props.account} </p>
      </ul>
    </nav>
  );
}

export default Nav;