/**
 * FinishDescription
 * @module 🔗:src/pages/Host/Listing/Finish/FinishDescription/FinishDescription.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Hosting Finish Description Page
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";

const FinishDescription = (props) => {


  return (
    <React.Fragment>
      <div className="FinishDescription-outer mv-44">
        <div className="FinishDescription-content">
            <p className="mh-16 mv-16">Describe your vehicle, tell user what makes your vehicle great, let user know how things work on your vehicle and be clear what is allowed and what is not allowed inside your vehicle</p>
            <div className="FinishDescription-info_text_outer">
                <p className="FinishDescription-info_text">Smoking is not allowed inside the car and please do not make it dirty.</p>
            </div>
        </div>
        <div className="FinishDescription-footer">
            <Button title={"Continue"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default FinishDescription;