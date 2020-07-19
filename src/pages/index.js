import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/header";
import nurses from "../images/nurses.jpg";
import faceshield from "../images/face-shield-icon.png";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="content">
      <Header button={true} />
      <main>
        <div className="container">
          <div className="container__left">
            <div className="facemask-img">
              <img src={faceshield} alt="face shield icon" />
            </div>
            <h1 className="text-lead">Helping front line heroes!</h1>
            <p>
              We are aiming to link makers with 3d printers with hospitals and
              hospital staff that are in need of 3d printed personal protective
              equipment and devices.
            </p>
            <p>
              Are you a maker with a 3d printer? Sign up and find postings for
              open jobs that you can help to fulfill.
            </p>
            <p>
              Are you a hospital employee looking for extra resources? Sign up
              and post your requirements we will find willing volunteers to help
              you get your materials.
            </p>
          </div>
          <div className="container__right">
            <img src={nurses} alt="Thankful nurses" />
          </div>
        </div>
      </main>
    </div>
    <footer className="footer">Built with ❤️ at FIU Pantherhacks</footer>
  </>
);

export default IndexPage;
