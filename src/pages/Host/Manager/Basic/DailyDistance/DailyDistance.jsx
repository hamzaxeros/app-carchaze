/**
 * DailyDistance
 * @module 🔗:src/pages/Host/Manager/Basic/Daily Distance/DailyDistance.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host to set Daily distance of vehicle
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const DailyDistance = (props) => {


  return (
    <React.Fragment>
      <div className="HostDailyDistance-outer">
        <div className="HostDailyDistance-content mv-44">
          <h2 className="mh-16 mv-16">Daily distance included</h2>
          <p className="mh-16 mt-16 mb-44">Decide how far you'll allow drivers to drive the minimum distance per day. Get a 
            special badge and attract more bookings by offering unlimited distance
          </p>
          <List ArrowDown={true} rightTextStyle={{"opacity":'1'}} leftText={[<p>Kilometers per day</p>]} rightText={[<strong style={{"opacity":'1',"fontSize":'large'}}>200</strong>]} />

          <h2 className="mt-44 mh-16">Additional distance fee</h2>
          <p className="mh-16 mt-16">If your driver drives farther than the distance included, they'll be charge a fee per kilometer calculated using your daily price</p>
          
          <p className="mt-16 HostDailyDistance-red_text mh-16">How is distance fee calculated ?</p>
        </div>
        <div className="HostDailyDistance-footer">
          <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DailyDistance;