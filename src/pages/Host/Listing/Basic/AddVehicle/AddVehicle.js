/**
 * AddVehicle
 * @module 🔗:src/pages/Host/Listing/AddVehicle/AddVehicle.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Add Vehicle as Host
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const AddVehicle = (props) => {


  return (
    <React.Fragment>
      <div className="AddVehicle-outer">
        <div className="AddVehicle-content">
          <p className="AddVehicle-small_text">WHERE YOUR CAR LOCATED? </p>
          <List leftText={"Enter address"} style={{"opacity":'.6'}} />
          <p className="AddVehicle-small_text mt-44">WHAT VEHICLE DO YOU HAVE?</p>
          <List leftText={"Honda Civic 2018"} style={{"borderBottom":'none'}} rightTextStyle={{"color":'red',"opacity":'1 '}} rightText={"Edit"} />
          <List leftText={"Odometer"} style={{"borderBottom":'none'}} rightText={"Select"} />
          <List leftText={"Transmission"} style={{"borderBottom":'none'}} rightText={"Select"} />
          <List leftText={"Fuel type"} rightText={"Select"} />
          <div className="mv-44">
            <List leftText={"This vehicle has never had any main accident"} rightArrowNone={true} />
          </div>
          <Button title={"Learn more"} style={{"color":'red',"background":'transparent',"width":'auto',"marginLeft":'16px'}}  />
        </div>
        <div className="AddVehicle-footer">
          <Button title={"Next"} />

        </div>
      </div>
    </React.Fragment>
  )
}

export default AddVehicle;