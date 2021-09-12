import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from '../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className="">
      <ul className="">
        <li className="">
          <NavLink
            exact
            to="/"
            className=""
            activeClassName=""
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className="">
            <NavLink
              to="/contacts"
              className=""
              activeClassName=""
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
    // </div>
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