/**
 * IdentifyVehicle
 * @module 🔗:src/pages/Host/Listing/IdentifyVehicle/IdentifyVehicle.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Identify Vehicle
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const IdentifyVehicle = (props) => {


  return (
    <React.Fragment>
      <div className="IdentifyVehicle-outer mv-44">
        <div className="IdentifyVehicle-content">
          <p className="IdentifyVehicle-small_text">IDENTIFY YOUR VEHICLE</p>
          <List leftText={"Year"} rightText={"Select"} style={{"borderBottom":'none'}} />
          <List leftText={"Make"} rightText={"Select"} style={{"borderBottom":'none'}} />
          <List leftText={"Model"} rightText={"Select"} />
        </div>
        <div className="IdentifyVehicle-footer">
          <Button title={"Confirm"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default IdentifyVehicle;