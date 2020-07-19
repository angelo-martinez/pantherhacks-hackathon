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
        <Link
          to={Object.keys(loggedInAcc).length !== 0 ? "/dashboard" : "/login"}
          className="btn btn-a"
        >
          <span>
            {Object.keys(loggedInAcc).length !== 0 ? "Dashboard" : "Log in"}
          </span>
        </Link>
      )}
    </nav>
  );
};

export default Header;
