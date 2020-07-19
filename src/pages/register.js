import React, { useState, useRef } from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import video from "../images/3dprinter.mp4";

const RegisterPage = () => {
  const [typeOfAcc, settypeOfAcc] = useState(false);
  const username = useRef(null);

  function createAccount() {
    const acc = {
      username: username.current.value,
      type: "",
    };

    window.loggedInAcc = acc;
  }

  return (
    <>
      <SEO title="Register" />
      <video autoPlay muted loop id="bgVideo">
        <source src={video} type="video/mp4" />
      </video>

      <div className="center">
        <article className="register-card">
          <form
            className={`registration-form ${typeOfAcc ? typeOfAcc : "none"}`}
          >
            <input type="text" placeholder="Username" ref={username} />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <div className="decider">
              <input
                type="radio"
                id="Medic"
                name="drone"
                value="Medic"
                onChange={e => settypeOfAcc(e.currentTarget.value)}
              />
              <label htmlFor="Medic">Medic</label>
              <div className="float-right">
                <input
                  type="radio"
                  id="Maker"
                  name="drone"
                  value="Maker"
                  onChange={e => settypeOfAcc(e.currentTarget.value)}
                />
                <label htmlFor="Maker">Maker</label>
              </div>
            </div>
            <div className="hospital">
              <input type="text" placeholder="Hospital of employment" />
              <input type="email" placeholder="Work Email" />
              <input type="email" placeholder="Confirm Work Email" />
              <input type="text" placeholder="Hospital Address" />
              <div>
                <p>Preferred drop off times (select all that apply):</p>
                <input type="checkbox" id="morning" name="morning" />
                <label htmlFor="morning">Morning</label>
                <input type="checkbox" id="afternoon" name="afternoon" />
                <label htmlFor="afternoon">Afternoon</label>
                <input type="checkbox" id="evening" name="evening" />
                <label htmlFor="evening">Evening</label>
              </div>
              <div>
                <p>Preferred drop off days (select all that apply):</p>
                <input type="checkbox" id="weekday" name="weekday" />
                <label htmlFor="weekday">Weekday</label>
                <input type="checkbox" id="weekend" name="weekend" />
                <label htmlFor="weekend">Weekend</label>
              </div>
              <div>
                <p>Preferred delivery options (select all that apply):</p>
                <input type="checkbox" id="pick-up" name="pick-up" />
                <label htmlFor="pick-up">Pick-Up</label>
                <input
                  type="checkbox"
                  id="delivery-by-printer"
                  name="delivery-by-printer"
                />
                <label htmlFor="delivery-by-printer">
                  Delivered by Printer
                </label>
                <input type="checkbox" id="usps" name="usps" />
                <label htmlFor="usps">Shipped by mail</label>
              </div>
            </div>
            <div className="maker">
              <input type="email" placeholder="Email Address" />
              <input type="email" placeholder="Confirm Work Email" />
              <input type="text" placeholder="Address" />
              <div>
                <p>Available Filaments (select all that apply):</p>
                <input type="checkbox" id="PLA" name="PLA" />
                <label htmlFor="PLA">Poly Lactic Acid</label>
                <input type="checkbox" id="ABS" name="ABS" />
                <label htmlFor="ABS">Acrylonitrile Butadiene Styrene</label>
                <input type="checkbox" id="c-PLA" name="c-PLA" />
                <label htmlFor="c-PLA">Filament, Wood Fiber</label>
                <input type="checkbox" id="PET" name="PET" />
                <label htmlFor="PET">Polyethylene Terephthalate</label>
                <input type="checkbox" id="TPU" name="TPU" />
                <label htmlFor="TPU">
                  Ninjaflex &amp; Thermoplastic Urethane
                </label>
                <input type="checkbox" id="Nilon" name="Nilon" />
                <label htmlFor="Nilon">Nylon Filament</label>
              </div>
              <div>
                <p>Printer Availabilty (select all that apply):</p>
                <input type="checkbox" id="weekday-M" name="weekday-M" />
                <label htmlFor="weekday-M">Weekday</label>
                <input type="checkbox" id="weekend-M" name="weekend-M" />
                <label htmlFor="weekend-M">Weekend</label>
              </div>
              <div>
                <p>Delivery Options (select all that apply):</p>
                <input type="checkbox" id="pick-up-M" name="pick-up-M" />
                <label htmlFor="pick-up-M">Pick-Up</label>
                <input
                  type="checkbox"
                  id="delivery-by-printer-M"
                  name="delivery-by-printer-M"
                />
                <label htmlFor="delivery-by-printer-M">Delivered by You</label>
                <input type="checkbox" id="usps-M" name="usps-M" />
                <label htmlFor="usps-M">Shipped by mail</label>
              </div>
            </div>
          </form>
          <Link
            to="/dashboard"
            className="btn"
            style={{ width: "250px", margin: "0 auto", display: "block" }}
            onClick={createAccount}
          >
            <span>Create Account</span>
          </Link>
        </article>
      </div>
    </>
  );
};

export default RegisterPage;
