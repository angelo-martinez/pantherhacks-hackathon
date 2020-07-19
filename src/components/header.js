import { Link } from "gatsby";
import logo from "../images/logo.png";
import React from "react";

const Header = props => {
  let loggedInAcc = {};
  if (typeof window !== "undefined") {
    loggedInAcc = window.loggedInAcc;
  }
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      {props.button && (
        <Link to={loggedInAcc ? "/dashboard" : "/login"} className="btn btn-a">
          <span>{loggedInAcc ? "Dashboard" : "Log in"}</span>
        </Link>
      )}
    </nav>
  );
};

export default Header;
