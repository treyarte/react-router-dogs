import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='dog-nav'>
      <ul>
        <li>
          <NavLink exact to='/dogs'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/dogs/whiskey'>
            whiskey
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/dogs/duke'>
            Duke
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/dogs/perry'>
            Perry
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/dogs/tubby'>
            Tubby
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
