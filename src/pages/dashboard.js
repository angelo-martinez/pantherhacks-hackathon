import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import avi from "../images/avi.png";

const DashboardPage = () => (
  <>
    <SEO title="Dashboard" />
    <Header />
    <main className="dash-content">
      <div className="sidebar js-sidebar">
        <div className="sidebar__img">
          <img src={avi} alt="Account avi" />
        </div>
        <h2 className="sidebar__username">Username</h2>
        <ul className="sidebar__links">
          <li>
            <button type="button" className="sidebar__btn js-overview">
              <i className="fa fa-address-card-o" aria-hidden="true"></i>{" "}
              Overview
            </button>
          </li>
          <li>
            <button type="button" className="sidebar__btn js-overview">
              <i className="fa fa-envelope-o" aria-hidden="true"></i> Messages
            </button>
          </li>
          <li>
            <button type="button" className="sidebar__btn js-queue">
              <i className="fa fa-hourglass-half" aria-hidden="true"></i> Queue
            </button>
          </li>
          <li>
            <button type="button" className="sidebar__btn js-overview">
              <i className="fa fa-sign-out" aria-hidden="true"></i> Sign Off
            </button>
          </li>
        </ul>
      </div>
      <div className="dashboard js-dashboard">
        <div className="dashboard-top">
          <div className="dashboard-top__dropdown js-dashboard-date">
            Today <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div className="dashboard-order js-dashboard-date">Order</div>
        </div>
        <div className="dashboard-content"></div>
      </div>
    </main>
  </>
);

export default DashboardPage;
