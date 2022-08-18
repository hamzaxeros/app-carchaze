/**
 * Eligible
 * @module 🔗:src/pages/Host/Listing/Eligibility/Eligible/Eligible.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Eligible Host Page
 * 
 */

import React from "react";
import TickIcon from "../../../../../assets/images/Tick-Icon.png";
import Button from "../../../../../components/public/resources/Button/Button";

const Eligible = (props) => {


  return (
    <React.Fragment>
      <div className="Eligible-outer mv-44 mh-16">
        <div className="Eligible-content">
          <img src={TickIcon} alt="Tick" />
          <div>
            <h1 className="mt-44 mb-16">Vehicle eligible</h1>
            <p className="mv-16">We need more information to set up your vehicle listing.</p>
          </div>
        </div>
        <div className="Eligible-footer mt-44">
          <Button title={"Continue"}  />
        </div>

      </div>
    </React.Fragment>
  )
}

export default Eligible;