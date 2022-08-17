/**
 * DrivingLicense
 * @module 🔗:src/pages/Account/DrivingLicense/DrivingLicense.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Driving License Page to get Picture of user Driving License pics
 * 
 */

import React from "react";
import LicenseFront from "../../../assets/images/License-Front.png";
import LicenseBack from "../../../assets/images/License-Back.png";
import Button from "../../../components/public/resources/Button/Button";



const DrivingLicense = (props) => {


  return (
    <React.Fragment>
      <div className="AccLicense-outer mv-44 mh-16">
        <p>Learners and temporary driving licenses are not allowed.</p>
        <div className="AccLicense-Front">
          <p className="AccLicense-pic_text">LICENSE FRONT PHOTO</p>
          <img className="AccLicense-front_pic" src={LicenseFront} alt="License Front" />
        </div>
        <div className="AccLicense-Back">
          <p className="AccLicense-pic_text">LICENSE BACK PHOTO</p>
          <img src={LicenseBack} className="AccLicense-back_pic" alt="License Back" />
        </div>
        <div className="AccLicense-footer">
          <Button title={"Done"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default DrivingLicense;