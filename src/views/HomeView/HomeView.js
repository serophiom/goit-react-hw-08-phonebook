import React from 'react';
import { useSelector } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className="homeview">
      <h1 className="title">
        Welcome to your Phonebook application{' '}
      </h1>

      {/* <p className="">
        Create your own Phone list
      </p> */}

      {!isLoggedIn && (
        <p className="">
          <span className="">Sign up</span> or
          <span className=""> Login</span> to Create your own Phone list.
        </p>
      )}
    </div>
  );
};

export default HomeView;