/**
 * YourVehicle
 * @module 🔗:src/pages/Host/Manager/Basic/YourVehicle/YourVehicle.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Listed Vehicle
 * 
 */


import React from "react";
import { AiFillStar } from "react-icons/ai";
import DemoCar from "../../../../../assets/images/Demo-Car.jpg";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";
import { GoPrimitiveDot } from "react-icons/go";

const YourVehicle = (props) => {


  return (
    <React.Fragment>
      <div className="YourVehicle-outer mv-44">
        <div className="YourVehicle-img_outer">
          <div className="YourVehicle-img_label"><GoPrimitiveDot fontSize={22} color="#24d024"/>  LISTED</div>
          <img src={DemoCar} alt="Your Vehicle" className="YourVehicle-img" />
        </div>
        <div className="YourVehicle-heading">
          <h2>Mercedes  Benz 2018</h2>
          <p>AAG-167</p>
          <p>4.7 &nbsp; <AiFillStar color="red" /> &nbsp; {"(500 trips)"} </p>
        </div>
        <div className="YourVehicle-lists mt-44">
          <div className="YourVehicle-list">
            <List style={{"borderTop":'none'}} leftText={[<h3>Pickup & return location</h3>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>Vehicle location & delivery zone</p>]} />
          </div>
          <div className="YourVehicle-list">
            <List style={{"borderTop":'none'}} leftText={[<h3>Vehicle Photos</h3>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>Add, Edit & Set main photo</p>]} />
          </div>
          <div className="YourVehicle-list">
            <List style={{"borderTop":'none'}} leftText={[<h3>Details</h3>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>Basic, Features & Description</p>]} />
          </div>
          <div className="YourVehicle-list">
            <List style={{"borderTop":'none'}} leftText={[<h3>Extras</h3>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>Earn more 90% with Extras</p>]} />
          </div>
          <div className="YourVehicle-list">
            <List style={{"borderTop":'none'}} leftText={[<h3>Distance included per day</h3>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>Set Distance limit and additional fee</p>]} />
          </div>
          <div className="YourVehicle-list">
            <List style={{"borderTop":'none'}} leftText={[<h3>Vehicle protection plan</h3>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>Earning 75% of trip price now</p>]} />
          </div>
          <div className="YourVehicle-list">
            <List style={{"borderTop":'none'}} leftText={[<h3>Trip History</h3>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>Trips, earning & review</p>]} />
          </div>
          <div className="YourVehicle-list">
            <List style={{"borderTop":'none',"borderBottom":'none'}} leftText={[<h3>Trip settings</h3>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>Trip length and what you allow</p>]} />
          </div>
        </div>

        <div className="YourVehicle-footer mt-44">
          <Button style={{"backgroundColor":'transparent',"color":'black',"border":'1px solid #00000040'}} title={[<GoPrimitiveDot fontSize={34} color="yellow" />, <strong>Snoozed until Jun 08, 10:00 PM </strong>]} />
          <p>We unlisted your vehicle, To relist, please contact us</p>
        </div>

      </div>
    </React.Fragment>
  )
}

export default YourVehicle;