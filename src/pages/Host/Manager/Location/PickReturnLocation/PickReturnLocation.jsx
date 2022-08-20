/**
 * PickReturnLocation
 * @module 🔗:src/pages/Host/Manager/Location/PickReturnLocation/PickReturnLocation.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host ot add Pickup and Return Location
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";

const PickReturnLocation = (props) => {


  return (
    <React.Fragment>
        <div className="HostPickReturnLocation-outer">
        <h2 className="mv-44 mh-16">Pick up & return locations</h2>

        <p className="HostPickReturnLocation-small_text">
          VEHICLE LOCATION
        </p>
        <List leftText={[<p>18-26, Chauncy street, Cambridge, GB MA 02138</p>,<p style={{"opacity":'.6',"fontSize":'small'}}>No delivery fee at home location</p>]}
         rightText={[<p style={{"color":'red',"fontSize":'large',"padding":'4px'}}>Edit</p>]} />

        <p className="HostPickReturnLocation-small_text mt-44">DELIVERY LOCATIONS</p>
        <List leftText={[<p>Islamabad International Airport</p>,<p style={{"color":'red',"fontSize":'small'}}>Rs. 500</p>]} 
        rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red'}}>Edit</p>]} />
        <List style={{"borderTop":'none'}} leftText={[<p>Add a delivery location by browsing on the map.</p>]} 
        rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red'}}>Add</p>]} />
        
        <p className="HostPickReturnLocation-small_text mt-44">DRIVER LOCATION</p>
        <List leftText={[<p>Deliver vehicle with in a zone and earn delivery fees</p>,<p style={{"fontSize":'small',"opacity":'.6'}}>Rs. 500 &nbsp; &nbsp; Up to 15 miles</p>]} 
        rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red'}}>Edit</p>]} />

        <p className="HostPickReturnLocation-small_text mt-44">DELIVERY DISCOUNT</p>
        <List leftText={[<p>Attract more Drivers by offering free delivery for longer trips</p>,<p style={{"fontSize":'small',"opacity":'.6'}}>Do not offer &nbsp; &nbsp; Trip length</p>]} 
        rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red'}}>Edit</p>]} />

      </div>
    </React.Fragment>
  )
}

export default PickReturnLocation;