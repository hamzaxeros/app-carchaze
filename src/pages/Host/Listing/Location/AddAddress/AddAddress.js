/**
 * AddAddress
 * @module 🔗:src/pages/Host/Listing/AddAddress/AddAddress.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Adding Custom Address for Car Listing
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const AddAddress = (props) => {


  return (
    <React.Fragment>
      <div className="AddAddress-outer mv-44">
        <div className="AddAddress-content">
          <p className="AddAddress-small_text">PLEASE ENTER SPECIFIC ADDRESS</p>
          <List style={{"borderBottom":'none',"opacity":'.6 '}} leftText={"Street Lane"} rightArrowNone={true} />
          <List leftText={"Phase / Mohallah"} rightArrowNone={true} style={{"borderBottom":'none',"opacity":'.6'}} />
          <List leftText={"Twon / Village"} rightArrowNone={true} style={{"borderBottom":'none',"opacity":'.6'}} />
          <List leftText={"District / City"} rightArrowNone={true} style={{"opacity":'.6'}} />
        </div>

        <div className="AddAddress-footer">
          <Button title={"Continue"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default AddAddress;