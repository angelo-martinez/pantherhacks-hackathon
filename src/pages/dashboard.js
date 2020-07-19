import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/header";

const DashboardPage = () => (
  <>
    <SEO title="Dashboard" />
    <Header />
    <main class="content">
      <div class="sidebar js-sidebar">
        <div class="sidebar__img">
          <img src="./images/avi.png" alt="Account avi" />
        </div>
        <h2 class="sidebar__username">Username</h2>
        <ul class="sidebar__links">
          <li>
            <button type="button" class="sidebar__btn js-overview">
              <i class="fa fa-address-card-o" aria-hidden="true"></i> Overview
            </button>
          </li>
          <li>
            <button type="button" class="sidebar__btn js-overview">
              <i class="fa fa-envelope-o" aria-hidden="true"></i> Messages
            </button>
          </li>
          <li>
            <button type="button" class="sidebar__btn js-queue">
              <i class="fa fa-hourglass-half" aria-hidden="true"></i> Queue
            </button>
          </li>
          <li>
            <button type="button" class="sidebar__btn js-overview">
              <i class="fa fa-sign-out" aria-hidden="true"></i> Sign Off
            </button>
          </li>
        </ul>
      </div>
      <div class="dashboard js-dashboard">
        <div class="dashboard-top">
          <div class="dashboard-top__dropdown js-dashboard-date">
            Today <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div class="dashboard-order js-dashboard-date">Order</div>
        </div>
        <div class="dashboard-content"></div>
      </div>
    </main>
  </>
);

export default DashboardPage;
