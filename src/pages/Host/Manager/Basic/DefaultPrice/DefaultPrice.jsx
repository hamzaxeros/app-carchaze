/**
 * DefaultPrice
 * @module 🔗:src/pages/Host/Manager/Basic/DefaultPrice/DefaultPrice.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host default prices
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";
import List from "../../../../../components/public/resources/List/List";

const DefaultPrice = (props) => {


  return (
    <React.Fragment>
      <div className="HostDefaultPrice-outer mv-44">
        <div className="HostDefaultPrice-content">
          <h2 className="mh-16">Default Price</h2>
          <p className="mt-16 mh-16">Set your default price, Prices are before any applicable discounts</p>
          <div className="HostDefaultPrice-list mt-44">
            <List leftText={"Price"} rightArrowNone={true} rightText={[<p style={{"opacity":'1',"fontSize":'large',"color":'black'}}>Rs. 4000</p>]} />
          </div>
          <p className="HostDefaultPrice-small_text">Recommended: Rs. 3000</p>
        </div>
        <div className="HostDefaultPrice-footer">
          <Button title={"Save"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default DefaultPrice;