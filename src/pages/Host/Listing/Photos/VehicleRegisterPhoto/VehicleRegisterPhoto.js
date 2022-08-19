/**
 * VehicleRegisterPhoto
 * @module 🔗:src/pages/Host/Listing/Photos/VehicleRegisterPhoto/VehicleRegisterPhoto.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Add Vehicle Registration Photots
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";

const VehicleRegisterPhoto = (props) => {


  return (
    <React.Fragment>
      <div className="VehicleRegisterPhoto-outer mv-44 mh-16">
        <div className="VehicleRegisterPhoto-content">
          <p>Take clear photo of your vehicle registration book</p>
          <div className="VehicleRegisterPhoto-container mt-16">
            <div className="VehicleRegisterPhoto-add_photo">
              Attach <br /> photos
            </div>

            <div className="VehicleRegisterPhoto-photo_outer">
              <div className="VehicleRegisterPhoto-photo">

              </div>
              <small className="VehicleRegisterPhoto-photo_date">May 5, 21, 5:30 PM</small>
            </div>

          </div>
        </div>
        <div className="VehicleRegisterPhoto-footer">
          <Button title={"Add registration photos"} style={{"backgroundColor":'white',"border":'1px solid red',"color":'red',"marginBottom":'16px'}} />
          <Button title={"Continue"} />
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default VehicleRegisterPhoto;