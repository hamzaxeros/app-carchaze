/**
 * HostFilter
 * @module 🔗:src/pages/Host/Manager/Basic/HostFilter/HostFilter.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Filter Pages
 * 
 */

import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";
import List from "../../../../../components/public/resources/List/List";

const HostFilter = (props) => {


  return (
    <React.Fragment>
      <div className="HostFilter-outer mv-44">
        <p className="HostFilter-small_text">PRICE</p>
        <div className="HostFilter-range_input_outer">
            <p>Rs. 5000 or less per day</p>
            <Input type={'range'} iconNone={true} />

        </div>
        <p className="HostFilter-small_text mt-44">MILES INCLUDED PER DAY</p>
        <List leftText={"Distance per day"} rightText={"At least 200"} rightTextStyle={{"color":'red',"fontSize":'large',"opacity":'1'}} ArrowDown={true}  />
      
        <p className="HostFilter-small_text mt-44">BOOK INSTANTLY</p>
        <List rightArrowNone={true} leftText={"Vehicles you can book without waiting for host approval"} />

        <p className="HostFilter-small_text mt-44">DELIVERY</p>
        <List leftText={"Get the vehicle deliverd you"} rightArrowNone={true} />


        <p className="HostFilter-small_text mv-44">VEHICLE TYPE</p>


        <p className="HostFilter-small_text mt-44">ADVANCED</p>
        <div className="HostFilter-lists">
            <div className="HostFilter-list">
                <List style={{"border":'none'}} leftText={"Vehicle Age"} ArrowDown={true} rightText={"All"} rightTextStyle={{"color":'red',"fontSize":'large',"opacity":'1'}} />
            </div>
            <div className="HostFilter-list">
                <List style={{"borderBottom":'none'}}  leftText={"Vehicle Age"} ArrowDown={true} rightText={"All"} rightTextStyle={{"color":'red',"fontSize":'large',"opacity":'1'}} />
            </div>
            <div className="HostFilter-list">
                <List leftText={"Vehicle Age"} ArrowDown={true} rightText={"All"} rightTextStyle={{"color":'red',"fontSize":'large',"opacity":'1'}} />
            </div>
            <div className="HostFilter-list">
                <List style={{"border":'none'}} leftText={"Vehicle Age"} ArrowDown={true} rightText={"All"} rightTextStyle={{"color":'red',"fontSize":'large',"opacity":'1'}} />
            </div>
        </div>


        <div className="mv-44 mh-16">
            <Button title={"View results"} />    
        </div>      
      
      </div>
    </React.Fragment>
  )
}

export default HostFilter;