import {NavLink, Link} from "react-router-dom";
import Logout from "../LogOut/Logout";
import './navbar.css'
import {MdQueueMusic, MdOutlineLibraryBooks, MdHome, MdSearch} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

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
            <div className="nav-section">
              <MdHome size={32} />
              Home
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" className="nav-link">
            <div className="nav-section">
              <MdOutlineLibraryBooks size={32} />
              Library
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/recommended" className="nav-link">
            <div className="nav-section">
              <MdQueueMusic size={32}/>
              For you
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className="nav-link">
            <div className="nav-section">
              <MdSearch size={32} />
              Search
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link">
            <div className="nav-section">
              <CgProfile size={32} />
              Profile
            </div>
          </NavLink>
        </li>
      </ul>

      <div className="logout-container">
        <Logout />
      </div>
    </nav>
  );
}

export default NavBar;
