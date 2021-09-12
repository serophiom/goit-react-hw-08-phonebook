import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.css'

const AuthNav = () => (
  <div className="auth-nav">
    <ul className="">
      <li className="">
        <NavLink
          to="/register"
          exact
          className="link-singup"
          activeClassName="link-singup__active"
        >
          Signup
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/login"
          exact
          className="link-login"
          activeClassName="link-login__active"
        >
          Login
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AuthNav;