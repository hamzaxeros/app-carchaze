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
      <div className="HostVehicleLocation-outer mv-44">
        <div className="HostVehicleLocation-content">
          <div className="HostVehicleLocation-location"></div>
          <p className="HostVehicleLocation-small_text mt-44 mh-16">
            ADDRESS
          </p>
          <List style={{"padding":'12px'}} leftText={[<p>18-26, Chuancy street, Cambridge, GB MA 02138</p>]} 
          rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red',"padding":'4px'}}>Edit</p>]} />

          <p className="HostVehicleLocation-small_text mt-44">
              PARKING DETAILS (Optional)
          </p>
          <div className="HostVehicleLocation-p_details_outer">
            <textarea rows={10} col={30} className="HostVehicleLocation-p_details mh-16" placeholder="Tell your drivers about parking options in your neightbourhood Share tips for finding street locations, or let them know if you offer on-site parking.">
            </textarea>
          </div>
        </div>
        <p className="HostVehicleLocation-text_max">
          5000 characters max
        </p>

        <div className="HostVehicleLocation-footer mt-44">
            <Button title={"Save"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostVehicleLocation;