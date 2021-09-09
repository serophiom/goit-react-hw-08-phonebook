import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => (
    <nav>
        <NavLink exact to="/" className="nav-link" activeClassName="nav-link__active">Home</NavLink>
        <NavLink to="/contacts" className="nav-link" activeClassName="nav-link__active">Contacts</NavLink>
        <NavLink to="/register" className="nav-link" activeClassName="nav-link__active">Singup</NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="nav-link__active">Login</NavLink>
    </nav>
)

export default Navigation;