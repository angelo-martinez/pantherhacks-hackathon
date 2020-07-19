import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import video from "../images/3dprinter.mp4";
import logo from "../images/Better_Logo.png";

const LogInPage = () => (
  <>
    <SEO title="Login" />
    <video autoplay muted loop id="bgVideo">
      <source src={video} type="video/mp4" />
    </video>

    <div className="center">
      <article className="login-card">
        <div className="login-card__img">
          <img src={logo} alt="3d print logo" />
        </div>
        <h1 className="login-card__name">PrintMD</h1>
        <div className="js-login-wrapper">
          <div className="login-card__buttons">
            <button type="button" className="btn js-login">
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
              required
              className="login-card__input"
            />
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="login-card__input"
            />
            <Link to="/dashboard" className="btn">
              Login
            </Link>
          </div>
        </div>
      </article>
    </div>
  </>
);

export default LogInPage;
