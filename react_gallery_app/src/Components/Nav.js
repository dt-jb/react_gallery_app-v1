import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/landscapes'>Landscapes</NavLink></li>
      <li><NavLink to='/cityscapes'>Cityscapes</NavLink></li>
      <li><NavLink to='/seascapes'>Seascapes</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
