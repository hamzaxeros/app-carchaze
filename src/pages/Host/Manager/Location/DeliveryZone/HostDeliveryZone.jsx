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

// For slider half to be colored must check this url, we can do it with js values
// https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider


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
            <p className="HostDeliveryZone-price opacity-6">Rs. 5000</p>
            <p className="opacity-6">Delivery fee included pickup & return</p>
            <div className="HostDeliveryZone-range_input">
              <Input type={"range"} iconNone={true} />
            </div>

          </div>
          <p className="HostDeliveryZone-small_text mt-44 mh-16">
            DELIVERY WITH ZONE DISTANCE
          </p>
          <List ArrowDown={true} leftText={"Distance"} rightText={"Up to 15 miles"} />
        </div>
        <div className="HostDeliveryZone-footer">
          <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostDeliveryZone;