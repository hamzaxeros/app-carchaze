/**
 * FinishInReview
 * @module 🔗:src/pages/Host/Listing/Finish/FinishInReview/FinishInReview.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description After finishing hosting setup last review page`
 * 
 */

import React from "react";
import FinishCarReview from "../../../../../assets/images/Finish-Car-Review.png";
import Button from "../../../../../components/public/resources/Button/Button";

const FinishInReview = (props) => {


  return (
    <React.Fragment>
      <div className="FinishInReview-outer mt-44 mh-16">
        <div className="FinishInReview-content">
          <h1>Listing in review</h1>
          <p className="mt-16">Thank you for listing your vehicle on CarChaze, Currently our team is reviewing your vehicle.</p>
          <div className="FinishInReview-img_outer">
            <img src={FinishCarReview} alt="Car Review" className="FinishInReview-img" />
          </div>
        </div>

        <div className="FinishInReview-footer mb-16">
          <p>You may customise your vehicle details.</p>
          <p className="mb-16">Usually it takes less then 48 hours to verify and appear in search results or you can check listing status on your vehicle page anytime.</p>
          <Button title={"Got it"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default FinishInReview;