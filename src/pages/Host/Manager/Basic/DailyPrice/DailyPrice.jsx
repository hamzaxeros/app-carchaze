/**
 * DailyPrice
 * @module 🔗:src/pages/Host/Manager/Basic/DailyPrice/DailyPrice.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host set daily price
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const DailyPrice = (props) => {


  return (
    <React.Fragment>
      <div className="DailyPrice-outer mv-44">
        <div className="DailyPrice-content">
            <h1 className="mv-16 mh-16">Daily Price range</h1>
            <p className="mh-16">Set your minimum and maximum daily price, and automatic price will adapt your price within that range. Prices don't include weekly/monthly discounts.</p>
            <div className="DailyPrice-list mt-44">
                <List leftText={"Maximum Price "} rightTextStyle={{"opacity":'1'}} rightText={[<strong style={{"opacity":'1',"fontSize":'large'}}>Rs. 4000</strong>]} rightArrowNone={true} />
            </div>
            <p className="DailyPrice-small_text">Recommended: Rs. 30000</p>
            <div className="DailyPrice-list mt-44">
                <List leftText={"Maximum Price"} style={{"borderBottom":'1px solid #00000040'}} rightTextStyle={{"opacity":'1'}} rightText={[<strong style={{"opacity":'1',"fontSize":'large'}}>Rs. 4000</strong>]} rightArrowNone={true} />
            </div>
            <p className="DailyPrice-small_text">Recommended: Rs. 3000</p>
        </div>
        <div className="DailyPrice-footer">
            <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DailyPrice;