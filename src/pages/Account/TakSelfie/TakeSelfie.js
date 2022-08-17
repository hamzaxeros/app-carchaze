/**
 * TakeSelfie
 * @module 🔗:src/pages/Account/TakSelfie/TakeSelfie.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description TakeSelfie page for user to take user selfie
 * 
 */

import React from "react";
import ProfileVector from "../../../assets/images/ProfileVector.png";
import Button from "../../../components/public/resources/Button/Button";

const TakeSelfie = (props) => {


  return (
    <React.Fragment>
      <div className="AccTakeSelfie-outer mv-44 mh-16">
            <p>Please provide a clear photo of your face so users can recognize you at pickup</p>
            <div className="AccTakeSelfie-image-outer">
                <img className="AccTakeSelfie-image" src={ProfileVector} alt="Profile Vector" />
            </div>

            <Button title={"Take Selfie"} />
      </div>
    </React.Fragment>
  )
}

export default TakeSelfie;