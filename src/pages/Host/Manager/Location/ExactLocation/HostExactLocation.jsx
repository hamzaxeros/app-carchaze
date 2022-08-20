/**
 * HostExactLocation
 * @module 🔗:src/pages/Host/Manager/Location/ExactLocation/HostExactLocation.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host to add exact location
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";

const HostExactLocation = (props) => {


  return (
    <React.Fragment>
      <div className="HostExactLocation-outer">
        <div className="HostExactLocation-content">
          <div className="HostExactLocation-map"></div>

        </div>
        <div className="HostExactLocation-footer">
          <h3>Bacha Khan international Airport</h3>
          <small className="opacity-6">Airport</small>
          <p className="opacity-6">Khyber road, Cantonment board, Peshawar</p>

          <Button style={{"borderRadius":'2px'}} title={"Add location"} />
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default HostExactLocation;