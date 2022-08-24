/**
 * Discount
 * @module 🔗:src/pages/Host/Manager/Basic/Discount/Discount.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host to set discount
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const Discount = (props) => {


  return (
    <React.Fragment>
        <div className="Discount-outer mv-44">
        <div className="Discount-content">
            <h1 className="mv-16 mh-16">Discounts</h1>
            <p className="mh-16">Encourage drivers to book longer trip by offering discounts for weekly and monthly trips</p>
            <div className="Discount-list mt-44">
                <List leftText={"Weekly discount "} rightTextStyle={{"opacity":'1'}} rightText={[<strong style={{"opacity":'1',"fontSize":'large'}}>15%</strong>]} rightArrowNone={true} />
            </div>
            <p className="Discount-small_text">Recommended: 15%</p>
            <div className="Discount-list mt-44">
                <List leftText={"Monthly discount"} style={{"borderBottom":'1px solid #00000040'}} rightTextStyle={{"opacity":'1'}} rightText={[<strong style={{"opacity":'1',"fontSize":'large'}}>25%</strong>]} rightArrowNone={true} />
            </div>
            <p className="Discount-small_text">Recommended: 25%</p>
        </div>
        <div className="Discount-footer">
            <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Discount;