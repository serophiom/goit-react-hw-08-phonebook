import React from 'react';
import { useSelector } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import './HomeView.css';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className="homeview">
      <h1 className="title">
        Welcome to your Phonebook application{' '}
      </h1>

      {!isLoggedIn && (
        <p className="home-text">
          <span className="home-span">Signup</span> or
          <span className="home-span"> Login</span> to create your own Phone list.
        </p>
      )}
    </div>
  );
};

export default HomeView;