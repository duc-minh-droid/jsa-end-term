import {NavLink, Link} from "react-router-dom";
import Logout from "../LogOut/Logout";
import './navbar.css'

function NavBar() {
  return (
    <nav className="my-navbar">
      <ul className="">
        <li>
          <Link to="/" className="nav-link">
            <img src='https://iili.io/jHxmLN.png' alt='logo'/>
          </Link>
        </li>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" className="nav-link">
            Library
          </NavLink>
        </li>
        <li>
          <NavLink to="/recommended" className="nav-link">
            Recommended
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </li>
      </ul>

      <div>
        <Logout />
      </div>
    </nav>
  );
}

export default NavBar;
