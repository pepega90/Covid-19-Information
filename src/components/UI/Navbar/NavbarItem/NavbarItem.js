import React from 'react';
import styling from './NavbarItem.module.css';

const navbarItem = props => (
  <ul className={styling.NavbarItem}>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
  </ul>
);

export default navbarItem;
