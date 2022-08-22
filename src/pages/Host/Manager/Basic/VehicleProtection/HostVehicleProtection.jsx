/**
 * HostVehicleProtection
 * @module 🔗:src/pages/Host/Manager/Basic/VehicleProtection/HostVehicleProtection.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Vehicle Protection
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";

const HostVehicleProtection = (props) => {


  return (
    <React.Fragment>
      <div className="HostVehicleProtection-outer mv-44">
        <h1 className="mh-16">Vehicle Protection</h1>
        <p className="mv-16 mh-16">Insurance coverage from Adam Jee offered through CarChaze (Pvt.) ltd.</p>
        <List leftText={"75 plan"} rightText={<p style={{"color":'red',"fontSize":'large'}}>Change</p>} />
        <p className="mh-16 mt-16"><strong>Spring for solid coverage with a minimal deductible</strong></p>
        <ul className="mh-16 mv-16">
          <li>Earn 75% of the trip price</li>
          <li>Upto Rs. 3 million in third party liability insurance</li>
          <li>100% of eligible damage costs above the deductible are remibursed</li>
          <li>Not deductible</li>
          <li>Loss of hosting income during repair are not included</li>
          <li>Courtesy car not included</li>
        </ul>

        <div className="HostVehicleProtection-lists mt-44">
          <List style={{"borderBottom":'none'}} leftText={"Legal info"} />
          <List leftText={"Insurance Provider"} />
        </div>

        <p className="HostVehicleProtection-small_text mt-44">LEARN MORE</p>
        <List leftText={"Vehicle protection for hosts"} />

        <p className="HostVehicleProtection-small_text mt-44">MORE OPTIONS</p>
        <List leftText={[<p>Decline Protection</p>,<p style={{"opacity":'.6',"fontSize":'small'}}>Require your own commercial Insurance. Earn 90% of the trip price</p>]} />

      </div>
    </React.Fragment>
  )
}

export default HostVehicleProtection;