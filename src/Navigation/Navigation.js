import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from '../redux/auth/auth-selectors';
import './Navigation.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className="nav-home">
      <ul className="">
        <li className="">
          <NavLink
            exact
            to="/"
            className="link-home"
            activeClassName="link-home__active"
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className="">
            <NavLink
              to="/contacts"
              className="link-contacts"
              activeClassName="link-contacts__active"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;




// import { NavLink } from "react-router-dom";
// import './Navigation.css';

// const Navigation = () => (
//     <nav>
//         <NavLink exact to="/" className="nav-link" activeClassName="nav-link__active">Home</NavLink>
//         <NavLink to="/contacts" className="nav-link" activeClassName="nav-link__active">Contacts</NavLink>
//         <NavLink to="/register" className="nav-link" activeClassName="nav-link__active">Singup</NavLink>
//         <NavLink to="/login" className="nav-link" activeClassName="nav-link__active">Login</NavLink>
//     </nav>
// )

// export default Navigation;