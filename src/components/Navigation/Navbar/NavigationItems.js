import React from 'react';
import {NavLink} from 'react-router-dom';

// import classes from './NavigationItems.module.css';

const navigationItems = props => {
  let active = ['navbar-menu'];
  if (props.open) {
    active = ['navbar-menu', 'is-active'];
  }
  return (
    <div
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <h1
          className="title is-3"
          style={{color: '#fff', padding: '5px 0', margin: '0 2rem'}}
        >
          Covid-19 Report
        </h1>
        <a
          onClick={props.click}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={active.join(' ')}>
        <div className="navbar-start">
          {/* <a class="navbar-item">Covid-19 Information</a>
      <a class="navbar-item">News</a> */}
          <NavLink to="/" className="navbar-item" exact>
            Covid-19 Information
          </NavLink>
          <NavLink className="navbar-item" to="/news">
            News
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default navigationItems;
