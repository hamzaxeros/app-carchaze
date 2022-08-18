/**
 * ExactLocation
 * @module 🔗:src/pages/Host/Listing/ExactLocation/ExactLocation.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Exact Location of the Host Car
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";

const ExactLocation = (props) => {


  return (
    <React.Fragment>
      <div className="ExactLocation-outer mv-44">
        <div className="ExactLocation-content">
          <p className="ExactLocation-head_text">Driver will pick your vehicle here, but your exact location will not be visible until trip is booked</p>
          <div className="ExactLocation-map">
            Map Location
          </div>
        </div>
        <div className="ExactLocation-footer">
          <Button title={"Confirm"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default ExactLocation;