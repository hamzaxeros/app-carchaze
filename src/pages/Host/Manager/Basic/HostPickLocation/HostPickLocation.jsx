/**
 * HostPickLocation
 * @module 🔗:src/pages/Host/Manager/Basic/HostPickLocation/HostPickLocation.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Pick Up location
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const HostPickLocation = (props) => {


  return (
    <React.Fragment>
      <div className="HostPickLocation-outer">
        <div className="HostPickLocation-map">map location</div>
        <h3 className="mv-16 mh-16">Pick at vehicle location</h3>
        <List rightTextStyle={{"opacity":'1',"fontSize":'medium'}} leftText={"Phase 7, Hayatabad, Pesha"} rightText={"Free"} rightArrowNone={true} />
        <p className="HostPickLocation-small">We'll send you the exact address once your trip is booked</p>

        <h3 className="mt-44 mh-16 mb-16">Delivery location</h3>
        <List style={{"borderBottom":'none'}} rightTextStyle={{"opacity":'1',"fontSize":'medium'}} leftText={[<p>Lahore airport</p>,<p style={{"opacity":'.6',"fontSize":'medium',"paddingTop":'4px'}}>Airport</p>]} rightText={"Rs.1000"} rightArrowNone={true} />
        <List rightTextStyle={{"opacity":'1',"fontSize":'medium'}} leftText={[<p>ThoKar Niaz Bag</p>,<p style={{"opacity":'.6',"fontSize":'medium',"paddingTop":'4px'}}>Bus stand</p>,<p style={{"opacity":'.6',"fontSize":'medium',"paddingTop":'4px'}}>Daewoo stand, G.T. Road, Lahore</p>]} rightText={"Rs.1000"} rightArrowNone={true} />
        
        <h3 className="mt-44 mh-16 mb-16">Delivered to you </h3>
        <List leftText={"Enter delivery address"} rightTextStyle={{"opacity":'1',"fontSize":'medium'}} rightText={"Rs. 1000"} />
        <p className="HostPickLocation-small">The host offer delivery with in 15 miles radius of vehicle location</p>
        <div className="mv-44 mh-16">
            <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostPickLocation;