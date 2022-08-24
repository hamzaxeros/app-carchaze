/**
 * CustomisePrice
 * @module 🔗:src/pages/Host/Manager/Basic/CustomisePrice/CustomisePrice.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host to customise price
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const CustomisePrice = (props) => {


  return (
    <React.Fragment>
      <div className="HostCustomisePrice-outer mv-44">
        <div className="HostCustomisePrice-Content">
            <h2 className="mh-16">Customise Price</h2>
            <p className="mh-16 mt-16">Set custom daily price for specific days.</p>
            <p className="mh-16">Prices are before any applicable discounts</p>
            <div className="mt-44 ">
              <List rightArrowNone={true} rightTextStyle={{"opacity":'1'}} leftText={[<p>Default Price</p>]} rightText={[<strong style={{"opacity":'1',"fontSize":'large'}}>Rs. 4000</strong>]} />
            </div>
            <p className="HostCustomisePrice-small_text">We recommend Rs. 3500</p>

            <div className="HostCustomisePrice-lists mt-44">
              <div className="HostCustomisePrice-list">
                <List ArrowDown={true} rightTextStyle={{"opacity":'1'}} style={{"borderTop":'none'}} leftText={[<p>Start date</p>]} rightText={[<p style={{"opacity":'1',"fontSize":'large'}}>Thu, Jan 22</p>]} />
                <List ArrowDown={true} rightTextStyle={{"opacity":'1'}} style={{"borderBottom":'none',"borderTop":'none '}} leftText={[<p>End date</p>]} rightText={[<p style={{"opacity":'1',"fontSize":'large'}}>Thu, Jan 28</p>]} />
              </div>
            </div>
        </div>

        <div className="HostCustomisePrice-footer">
          <Button title={"Save"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default CustomisePrice;