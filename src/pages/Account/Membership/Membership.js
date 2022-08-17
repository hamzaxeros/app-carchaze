/**
 * Membership
 * @module 🔗:src/pages/Account/Membership/Membership.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Membership Page for user Membership
 * 
 */

import React from "react";
import Button from "../../../components/public/resources/Button/Button";
import ListWithIcons from "../../../components/public/resources/ListWithIcons/ListWithIcons";


const Membership = (props) => {


  return (
    <React.Fragment>
      <div className="AccMembership-outer mv-44">
        <div className="AccMembership-content">
            <div className="AccMembership-header mh-16 mb-44">
                <h1>Membership</h1>
                <p className="mv-16">Before your first trip or listing, you will need to provide us with some more information for verification before you proceed</p>
            </div>
            <ListWithIcons  title={"Take Selfie"} info={"Require to indentify you at pickup"} style={{"borderBottom":'none'}} />
            <ListWithIcons title={"Connect Facebook"} info={"Built trust and see mututal friends"} style={{"borderBottom":'none'}} />
            <ListWithIcons title={"Driving License "} info={"Must require to use CarChaze"} />
        </div>
        
        <div className="AccMembership-footer mh-16">
            <Button title={"Request Membership"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default Membership;