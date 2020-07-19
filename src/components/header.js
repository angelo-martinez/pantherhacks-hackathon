import { Link } from "gatsby";
import logo from "../images/logo.png";
import React from "react";

const Header = props => (
  <nav className="nav-bar">
    <Link to="/">
      <img src={logo} alt="logo" className="logo" />
    </Link>
    {props.button && (
      <Link to="/login" className="btn btn-a">
        <span>Log in</span>
      </Link>
    )}
  </nav>
);

export default Header;
