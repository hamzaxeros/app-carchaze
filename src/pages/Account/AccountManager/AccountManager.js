/**
 * AccountManager
 * @module 🔗:src/pages/Account/AccountManager/AccountManager.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description User Account Manager
 * 
 */

import React from "react";
import List from "../../../components/public/resources/List/List";
import Button from "../../../components/public/resources/Button/Button";

const AccountManager = (props) => {



  return (
    <React.Fragment>
      <div className="AccountManager-outer">
        <p className="AccountManager-small_heading">REACHABLE AT</p>
        <List leftText="Changer Phone" rightText={"+923001234567"} />
        <List leftText={"Facebook"} rightText={"Not connected"} />
        <List leftText={"Email"} rightText={"Not connected"} />
        <div className="space-44"></div>
        <p className="AccountManager-small_heading">TRANSACTION METHODS</p>
        <List leftText={"Payment Card"}  />
        <List leftText={"Payout methods"} />
        <List leftText={"Travel credits"} rightText={"Rs.3000"} />
        <div className="space-44"></div>
        <p className="AccountManager-small_heading">MOBILE NOTIFICATONS</p>
        <List leftText={"Text message notifications"} rightArrow={false} />
        <List leftText={"Push notifications"} />
        <div className="space-44"></div>
        <Button style={{"color":'red',"backgroundColor":'transparent'}} title={"Close my account"} />
      </div>
    </React.Fragment>
  )
}

export default AccountManager;