/**
 * ChangerNumber
 * @module 🔗:src/pages/Account/ChangeNumber/ChangerNumber.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Change Number page to change user mobile number
 * 
 */

import React from "react";
import MobilesConnection from "../../../assets/images/Mobiles-Connection.png";
import Button from "../../../components/public/resources/Button/Button";

const ChangeNumber = (props) => {


  return (
    <React.Fragment>
      <div className="AccChangeNum-outer mv-44 mh-16">
        <img src={MobilesConnection} alt="Change Number" />
        <p className="mv-44">Use change number to migrate your account info, vehicles, trips, and messages from your current phone number to a new phone number. You can't undo this change </p>
        <p className="mv-44">To proceed, confirm that your new number can recieve SMS or calls and tap continue to verify that number.</p>
        <Button title={"Change number"} />
        
      </div>
    </React.Fragment>
  )
}

export default ChangeNumber;