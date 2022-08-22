/**
 * TripBooked
 * @module 🔗:src/pages/Host/Manager/Basic/Requests/TripBooked/TripBooked.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Trip Booked Successfully
 * 
 */

import React from "react";
import TickIcon from "../../../../../../assets/images/Tick-Icon.png";
import Button from "../../../../../../components/public/resources/Button/Button";

const TripBooked = (props) => {


  return (
    <React.Fragment>
        <div className="TripBooked-outer mv-44 mh-16">
          <div className="TripBooked-content">
            <img src={TickIcon} alt="Tick" />
            <div>
              <h1 className="mt-44 mb-16">Your trip is booked</h1>
              <p className="mv-16">To help host prepare, please share some details about your trip.</p>
            </div>
          </div>
          <div className="TripBooked-footer mt-44">
            <Button title={"Go to messeges"}  />
          </div>

        </div>
    </React.Fragment>
  )
}

export default TripBooked;