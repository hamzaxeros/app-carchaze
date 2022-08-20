/**
 * HostDeliveryZone
 * @module 🔗:src/pages/Host/Manager/Location/DeliveryZone/HostDeliveryZone.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host to add delivery zone of vehicle
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";
import Input from "../../../../../components/public/resources/Input/Input";


const HostDeliveryZone = (props) => {


  return (
    <React.Fragment>
     <div className="HostDeliveryZone-outer">
        <div className="HostDeliveryZone-content">
            <div className="HostDeliveryZone-location mt-44">
            <List leftText={'Delivery with in zone'} rightArrowNone={true} />

          </div>
          <p className="HostDeliveryZone-small_text mh-16 mt-44">DELIVERY FEES</p>
          <div className="HostDeliveryZone-range">
            <p className="HostDeliveryZone-price">Rs. 5000</p>
            <p className="opacity-6">Delivery fee included pickup & return</p>
            <Input type={"range"} iconNone={true} />

          </div>
          <p className="HostDeliveryZone-small_text mt-44 mh-16">
            DELIVERY WITH ZONE DISTANCE
          </p>
          <List leftText={"Distance"} rightText={"Up to 15 miles"} />
        </div>
        <div className="HostDeliveryZone-footer">
          <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostDeliveryZone;