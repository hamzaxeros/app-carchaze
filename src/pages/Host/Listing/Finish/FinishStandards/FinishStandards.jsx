/**
 * FinishStandards
 * @module 🔗:src/pages/Host/Listing/Finish/FinishStandards/FinishStandards.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description After providing hosting details it's hosting standards page
 * 
 */

import React from "react";
import reviewBadge from "../../../../../assets/images/Review-Badge.png";
import Button from "../../../../../components/public/resources/Button/Button";

const FinishStandards = (props) => {


  return (
    <React.Fragment>
      <div className="FinishStandards-outer mv-44 mh-16">
        <div className="FinishStandards-img_outer">
          <img  alt="Reveiw" src={reviewBadge} className="FinishStandards-img" />
        </div>
        <div className="FinishStandards-content">

            <h1 className="mt-44">Safety & quality standards</h1>
            <p className="mt-16 mb-44">We strive to maintain a safe and reliable car sharing community. As a host you're expected to uphold these standards</p>
            {/* <div > */}
              <ul className="FinishStandards-list_outer">
                <li className="mt-16">Keep your vehicle well maintained so your drivers are safe on the road</li>
                <li className="mt-16">Clean and refuel your vehicle before every trip so your drivers have an enjoyable experience</li>
                <li className="mv-16">CarChaze dosen't permit host to list the same vehicle on other sharing platform so drivers can count on a consistent experience</li>
              </ul>
            {/* </div> */}

        </div>
        <p>By submit your listing you agree to the <span className="FinishStandards-terms">CarChaze terms of services</span></p>

        <div className="FinishStandards-footer mt-44">
            <Button title={"Submit"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default FinishStandards;