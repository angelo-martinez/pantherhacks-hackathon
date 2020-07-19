import React, { useState, useRef } from "react";
import { Link, navigate } from "gatsby";

import SEO from "../components/seo";
import video from "../images/3dprinter.mp4";
import logo from "../images/Better_Logo.png";

const LogInPage = () => {
  const [loggingIn, setloggingIn] = useState(false);
  const username = useRef(null);
  const password = useRef(null);

  function handleLogIn(e) {
    window.objAccounts.forEach((obj, i) => {
      if (
        obj.username === username.current.value &&
        obj.password === password.current.value
      ) {
        window.loggedInAcc = window.objAccounts[i];
        navigate("/dashboard");
      }
    });
  }

  return (
    <>
      <SEO title="Login" />
      <video autoPlay muted loop id="bgVideo">
        <source src={video} type="video/mp4" />
      </video>

      <div className="center">
        <article className="login-card">
          <div className="login-card__img">
            <img src={logo} alt="3d print logo" />
          </div>
          <h1 className="login-card__name">PrintMD</h1>
          <div
            className={`js-login-wrapper ${loggingIn ? "is-logging-in" : ""}`}
          >
            <div className="login-card__buttons">
              <button
                type="button"
                className="btn js-login"
                onClick={() => setloggingIn(!loggingIn)}
              >
                <span>Log In</span>
              </button>
              <Link to="/register" className="btn btn-a">
                <span>Register</span>
              </Link>
            </div>
            <div className="login-card__form">
              <input
                type="text"
                placeholder="Enter Username"
                ref={username}
                required
                className="login-card__input"
              />
              <input
                type="password"
                placeholder="Enter Password"
                ref={password}
                required
                className="login-card__input"
              />
              <a className="btn btn-a" onClick={handleLogIn}>
                Login
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default LogInPage;
