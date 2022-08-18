/**
 * NotEligible
 * @module 🔗:src/pages/Host/Listing/Eligibility/NotEligilble/NotEligible.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Not Eligible Host
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";
import CrossIcon from "../../../../../assets/images/Cross-Icon.png";

const NotEligible = (props) => {


  return (
    <React.Fragment>
      <div className="NotEligible-outer mv-44 mh-16">
        <div className="NotEligible-content">
          <img src={CrossIcon} alt="Tick" />
          <div>
            <h1 className="mt-44 mb-16">WE,RE SORRY</h1>
            <p className="mv-16">Unfortunately, your vehicle doesn't meet the currunt eligibility requirements to be listed on CarChaze</p>
          </div>  
        </div>
        <div className="NotEligible-footer mt-44">
          <Button title={"Learn about eligibility"} style={{"border":'1px solid white',"color":'white',"backgroundColor":'black',"marginBottom":'16px'}} />
          <Button title={"Continue"}  />
        </div>

      </div>
    </React.Fragment>
  )
}

export default NotEligible;