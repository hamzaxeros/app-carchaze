/**
 * HostTripSetting
 * @module 🔗:src/pages/Host/Manager/Basic/TripSetting/HostTripSetting.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Trip Setting
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const HostTripSetting = (props) => {


  return (
    <React.Fragment>
      <div className="HostTripSetting-outer mv-44">
        <h2 className="mh-16">Book instantly</h2>
        <p className="mt-16 mh-16">Choose locations where drivers can book your car instantly without your confirmation</p>
        <div className="HostTripSetting-lists mt-16">
          <List leftText={"At Vehicle location"} />
          <List style={{"border":'none'}} leftText={"At Delivery location "} />
          <List leftText={"At Driver's location"} />
        </div>
        
        <h2 className="mt-44 mh-16">Advance booking</h2>
        <p className="mt-16 mh-16">Block requests for your vehicle  that don't request enough earlier before trip start</p>
        <div className="HostTripSetting-lists mt-16">
          <List ArrowDown={true} leftText={"At Vehicle location"} rightText={"1 hour"} />
          <List ArrowDown={true} style={{"border":'none'}} leftText={"At Delivery location"} rightText={"12 hour"} />
          <List ArrowDown={true} leftText={"At Driver's location"} rightText={"12 hour"} />
        </div>

        <h2 className="mt-44 mh-16">Trip buffer</h2>
        <p className="mt-16 mh-16">Automatically block request before and after every trip</p>
        <div className="HostTripSetting-lists mt-16">
          <List ArrowDown={true} leftText={"At Vehicle location"} rightText={"1 hour"} />
          <List ArrowDown={true} style={{"border":'none'}} leftText={"At Delivery location"} rightText={"12 hour"} />
          <List ArrowDown={true} leftText={"At Driver's location"} rightText={"12 hour"} />
        </div>

        <h2 className="mt-44 mh-16">Trip duration</h2>
        <p className="mt-16 mh-16">Block request for trips that are too short or too long. Maximise earning by selecting "Any".</p>
        <div className="HostTripSetting-lists mt-16">
          <List ArrowDown={true} style={{"borderBottom":'none'}} leftText={"Shortest Possible trip"} rightText={"1 hour"} />
          <List ArrowDown={true} leftText={"Longest Possible trip"} rightText={"12 hour"} />     
        </div>

        <h2 className="mt-44 mh-16">Weekend trip duration</h2>
        <p className="mh-16 mv-16">Require a 2-days minimum for trips that start Friday or Saturday</p>
        <List leftText={"Minimum 2-days weekend trip"} />

        <h2 className="mt-44 mh-16">Long term trips</h2>
        <p className="mv-16 mh-16">Renters who search for long-terms trips will see your vehicle in search results</p>
        <List leftText={"Accept long-term trips"} />
        
        <div className="HostTripSetting-footer mt-44">
          <Button title={"Save"} />
        </div>


      </div>
    </React.Fragment>
  )
}

export default HostTripSetting;