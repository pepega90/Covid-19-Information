import React from 'react';
import styling from './Navbar.module.css';

import NavbarItem from './NavbarItem/NavbarItem';

const navbar = props => (
  <>
    <div className={styling.Navbar}>
      <NavbarItem />
    </div>
  </>
);

export default navbar;
