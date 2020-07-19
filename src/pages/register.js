import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import video from "../images/3dprinter.mp4";

const RegisterPage = () => (
  <>
    <SEO title="Register" />
    <video autoPlay muted loop id="bgVideo">
      <source src={video} type="video/mp4" />
    </video>

    <div className="center">
      <article className="register-card">
        <h1>register</h1>
        <Link to="/dashboard" className="btn btn-a">
          <span>Goto Dashboard</span>
        </Link>
      </article>
    </div>
  </>
);

export default RegisterPage;
