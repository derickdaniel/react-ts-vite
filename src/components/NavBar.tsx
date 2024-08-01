import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg"; // with import

const NavBar = () => {
  console.log("NavBar componenet");
  return (
    <>
      <NavLink className="navbar-brand" to="https://www.google.com">
        <img
          src={logo}
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        Developer Book 1.0
      </NavLink>
      {/* Menu bar  */}
      <nav className="navbar bg-body-tertiary">
        <ul className="nav nav-tabs mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/table">
              Table
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/list">
              List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/listGrp">
              List Group
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/alert">
              Alert
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              to="#"
              role="button"
              aria-expanded="false"
            >
              Actions
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" to="#">
                  Register Issue
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Dev Book
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
