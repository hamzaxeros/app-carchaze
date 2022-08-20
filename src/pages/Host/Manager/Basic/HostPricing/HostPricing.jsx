/**
 * Pricing
 * @module 🔗:src/pages/Host/Manager/Basic/Pricing/Pricing.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host to set pricing
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";

const HostPricing = (props) => {


  return (
    <React.Fragment>
      <div className="HostPricing-outer mv-44">
        <List leftText={"Automatic pricing"} rightArrowNone={true} />

        <p className="HostPricing-text mh-16 mv-16">
          Boost earning by letting your price automatically adjust to match demand. Your daily price stays within the range you set 
          and you can change your price anytime
        </p>

        <div className="HostPricing-lists mt-44">
          <div className="HostPricing-list">
            <List style={{"borderTop":'none'}} leftText={[<p>Default Price</p>,<small style={{"opacity":'.6',"margin":'4px 0px'}}>Rs. 5000</small>]} rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red'}}>Edit</p>]} />
          </div>
          <div className="HostPricing-list">
            <List style={{"borderTop":'none'}} leftText={[<p>Discount</p>,<small style={{"opacity":'.6',"margin":'4px 0px'}}>15% Weekly, 25% monthly</small>]} rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red'}}>Edit</p>]} />
          </div>
          <div className="HostPricing-list">
            <List style={{"borderTop":'none',"borderBottom":'none'}} leftText={[<p>Custom Prices</p>,<small style={{"opacity":'.6',"margin":'4px 0px'}}>Price for specific days</small>]} rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red'}}>Edit</p>]} />
          </div>
        </div>
        <div className="mt-44">
          <List leftText={[<p>How much will I earn</p>]} rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'red'}}>View</p>]} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostPricing;