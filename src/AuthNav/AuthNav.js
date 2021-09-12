import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div className="">
    <ul className="">
      <li className="">
        <NavLink
          to="/register"
          exact
          className=""
          activeClassName=""
        >
          Signup
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/login"
          exact
          className=""
          activeClassName=""
        >
          Login
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AuthNav;