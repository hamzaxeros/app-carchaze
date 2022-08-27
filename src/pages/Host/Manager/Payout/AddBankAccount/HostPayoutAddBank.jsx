/**
 * AddBankAccount
 * @module 🔗:src/pages/Host/Manager/Payout/AddBankAccount/AddBankAccount.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Add Bank account for payout
 * 
 */

import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";
import { BsLock } from "react-icons/bs";


const HostPayoutAddBank = (props) => {


  return (
    <React.Fragment>
      <div className="HostPayoutAddBank-outer mv-44">
        <div className="HostPayoutAddBank-content">
          <p className="mh-16">You won't be charged until you booked</p>
          <p className="HostPayoutAddBank-small_text">ACCOUNT TITLE</p>
          <Input iconNone={true} placeholder={"Enter bank account title"} />
          <p className="HostPayoutAddBank-small_text">ACCOUNT NUMBER</p>
          <div className="HostPayoutAddBank-card_input">
            <Input  iconNone={true} placeholder={"Enter A/C number from your cheque book"} />
          </div>
          <p className="HostPayoutAddBank-small_text">BANK NAME </p>
          <Input  iconNone={true} placeholder={"Enter Bank name"} />
          <p className="HostPayoutAddBank-small_text">BRANCH CODE</p>
          <Input iconNone={true} placeholder={"Enter Branch code"} />
        </div>
        <div className="HostPayoutAddBank-footer">
          <p className="mb-16"><BsLock/> Your information is stored securely</p>
          <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostPayoutAddBank;