/**
 * HostVehicleLocation
 * @module 🔗:src/pages/Host/Manager/Location/VehicleLocation/HostVehicleLocation.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host to add host vehicle location
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const HostVehicleLocation = (props) => {


  return (
    <React.Fragment>
      <div className="HostVehicleLocation-outer">
        <div className="HostVehicleLocation-content">
          <div className="HostVehicleLocation-location"></div>
          <p className="HostVehicleLocation-small_text mt-44 mh-16">
            ADDRESS
          </p>
          <List style={{"padding":'12px'}} leftText={[<p>18-26, Chuancy street, Cambridge, GB MA 02138</p>]} 
          rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red',"padding":'4px'}}>Edit</p>]} />

          <p className="HostVehicleLocation-small_text mt-44">
              PARKING DETAILS
          </p>
          <div className="HostVehicleLocation-p_details_outer">
            <p className="HostVehicleLocation-p_details mh-16">
              Tell your drivers about parking options in your neightbourhood Share tips for finding street locations, or let them know if you offer on-site parking.
            </p>
          </div>
        </div>

        <div className="HostVehicleLocation-footer">
            <Button title={"Save"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostVehicleLocation;