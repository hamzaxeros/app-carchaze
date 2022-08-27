/**
 * HostCheckoutTrip
 * @module 🔗:src/pages/Host/Manager/Basic/CheckoutTrip/HostCheckoutTrip.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Checkout trip
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import DemoCar from "../../../../../assets/images/Demo-Car.jpg";
import { AiFillStar } from "react-icons/ai";
import {GoLocation} from "react-icons/go"
import Button from "../../../../../components/public/resources/Button/Button";

const HostCheckoutTrip = (props) => {


  return (
    <React.Fragment>
      <div className="HostCheckoutTrip-outer mv-44">
        <div className="HostCheckoutTrip-car_details">
            <List style={{"border":'none'}} rightArrowNone={true} leftText={[<div ><p>Osman's</p><h2>Honda Civic 2019</h2><p style={{"padding":'6px 0px',"display":'flex',"alignItems":'center'}}>5.0 &nbsp;  <AiFillStar color="red" fontSize={22}/> &nbsp; (8 trips)</p></div>]} rightText={<img style={{"height":'70px'}} src={DemoCar} alt="Car Image" />}  />
        </div>

        <div className="mt-44">
            <List style={{"borderBottom":'none',"padding":'16px'}} leftText={[<p>Tue, Jun 09</p>,<p>5:00 PM</p>]} rightText={[<p>Fri, Jan 12</p>,<p>5:00 PM</p>]} rightArrowNone={true} rightTextStyle={{"opacity":'1',"fontSize":'large'}} />
        </div>
        <div>
            <List style={{"padding":'16px'}} leftText={[<p style={{"display":'flex',"justifyContent":"center","alignItems":'center'}}><GoLocation fontSize={32}/><span style={{"paddingLeft":'5px'}}>18-26, Chauncy street, Cambridge, GB MA 01234</span></p>]} rightArrowNone={true} />
        </div>

        <div className="HostCheckoutTrip-items_list mt-44">
            <p><span>3-days trip</span> <span>Rs. 1000/day</span></p>
            <p><span>3-days trip</span> <span>Rs. 1000/day</span></p>
            <p><span>3-days trip</span> <span>Rs. 1000/day</span></p>
            <p><span>3-days trip</span> <span>Rs. 1000/day</span></p>
            <p><strong>Total per day</strong> <stron>Rs. 13500</stron></p>
        </div>

        <div className="HostCheckoutTrip-total_list mt-44">
            <p><span>3-days trip</span> <span>Rs. 1000/day</span></p>
            <p><span>600 total Km</span> <span>free</span></p>
            <p><span>Delivery fee</span> <span>Rs. 200</span></p>
            <p><span>Post trip cleaning</span> <span>Rs. 200</span></p>
            <p><strong>Total per day</strong> <stron>Rs. 13500</stron></p>
        </div>

        <div>
            <List leftText={[<strong>Promo code</strong>]} rightText={"Add"} rightTextStyle={{"color":'red',"opacity":'1',"fontSize":'large'}} />
        </div>

        <p className="HostCheckoutTrip-small_text">
            STEPS TO BOOK
        </p>
        <div>
            <List leftText={[<strong>Promo code</strong>]} rightText={"Add"} rightTextStyle={{"color":'red',"opacity":'1',"fontSize":'large'}} />
            <List style={{"border":'none'}} leftText={[<strong>Extras</strong>]} rightText={"Minimum"} rightTextStyle={{"opacity":'1',"fontSize":'large'}} />
            <List leftText={[<strong>Payment info   </strong>]} rightText={"VISA0123"} rightTextStyle={{"opacity":'1',"fontSize":'large'}} />
        </div>
        <p className="mh-16  mt-16">You'll be able to messege your host after checkout</p>

        <div className="mt-44 mh-16">
            <Button title={"Book his trip"} />
        </div>


      </div>
    </React.Fragment>
  )
}

export default HostCheckoutTrip;