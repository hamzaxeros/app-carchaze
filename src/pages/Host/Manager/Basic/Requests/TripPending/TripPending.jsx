/**
 * TripPending
 * @module 🔗:src/pages/Host/Manager/Basic/Requests/TripPending/TripPending.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Trip Pending
 * 
 */

import React from "react";
import ClockIcon from "../../../../../../assets/images/Clock-Icon.png";
import Button from "../../../../../../components/public/resources/Button/Button";

const TripPending = (props) => {


  return (
    <React.Fragment>
      <div className="TripPending-outer mv-44 mh-16">
          <div className="TripPending-content">
            <img src={ClockIcon} alt="Tick" />
            <div>
              <h1 className="mt-44 mb-16">Trip request pending</h1>
              <p className="mv-16">This vehicle doesn't offer instant booking, please wait for host confirmation.</p>
            </div>
          </div>
          <div className="TripPending-footer mt-44">
            <Button title={"Go to trip"}  />
          </div>

      </div>
    </React.Fragment>
  )
}

export default TripPending;