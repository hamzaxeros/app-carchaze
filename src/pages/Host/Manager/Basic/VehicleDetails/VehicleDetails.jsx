/**
 * VehicleDetails
 * @module 🔗:src/pages/Host/Manager/Basic/VehicleDetails/VehicleDetails.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Listed Vehicle Details
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const VehicleDetails = (props) => {


  return (
    <React.Fragment>
      <div className="VehicleDetails-outer mv-44">
        <h2 className="mh-16 mv-16">Display Name</h2>
        <List leftText={"Osman's Honda"} rightArrowNone={true} />
        <h2 className="mh-16 mb-16 mt-44">Basics</h2>
        <div className="VehicleDetails-lists">
          <div className="VehicleDetails-list">
            <List style={{"borderTop":'none'}} leftText={"Car"} rightArrowNone={true} rightText={"Honda Civic 2018"} />
          </div>
          <div className="VehicleDetails-list">
            <List style={{"borderTop":'none'}} leftText={"Plate Number"} rightArrowNone={true} rightText={"ABC 123"} />
          </div>
          <div className="VehicleDetails-list">
            <List style={{"borderTop":'none'}} leftText={"Chassis number"} rightArrowNone={true} rightText={"NZE81234567"} />
          </div>
          <div className="VehicleDetails-list">  
            <List style={{"borderTop":'none'}} leftText={"Registered at"}  rightText={"Select"} />
          </div>
          <div className="VehicleDetails-list">
            
            <List style={{"borderTop":'none'}} leftText={"Token paid upto"}  rightText={"Select"} />
          </div>
          <div className="VehicleDetails-list">
            
            <List style={{"borderTop":'none'}} leftText={"Body color"}  rightText={"Select"} />
          </div>
          <div className="VehicleDetails-list">
            
            <List style={{"borderTop":'none'}} leftText={"No. of doors"}  rightText={"Select"} />
          </div>
          <div className="VehicleDetails-list">
            
            <List style={{"borderTop":'none'}} leftText={"No. of seats"}  rightText={"Select"} />
          </div>
          <div className="VehicleDetails-list">
            
            <List style={{"borderTop":'none'}} leftText={"Vehicle type"}  rightText={"Select"} />
          </div>
          <div className="VehicleDetails-list">
            
            <List style={{"borderTop":'none'}} leftText={"Transmission"}  rightText={"Select"} />
          </div>
          <div className="VehicleDetails-list">
            
            <List style={{"borderTop":'none',"borderBottom":'none'}} leftText={"Fuel type"}  rightText={"Select"} />
          </div>
        
        </div>

        <h2 className="mt-44 mh-16 mb-16">Description</h2>
        <div className="VehicleDetails-description_outer">
          <p className="VehicleDetaisl-description">Describe your vehicle, tell user what makes your vehicle great, let user know how things work on your vehicle and be clear what is allowed and what is not allowed inside your vehicle</p>
        </div>
        <div className="VehicleDetails-footer mv-44">
          <Button title={"Save"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default VehicleDetails;