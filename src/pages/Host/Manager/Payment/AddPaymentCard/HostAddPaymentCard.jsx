/**
 * AddPaymentCard
 * @module 🔗:src/pages/Host/Manager/Payment/AddPaymentCard/AddPaymentCard.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Add Payment Card in Payment method
 * 
 */

import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";
import {FaCcMastercard} from "react-icons/fa";
import { BsLock } from "react-icons/bs";


const HostAddPaymentCard = (props) => {


  return (
    <React.Fragment>
      <div className="HostAddPayCard-outer mv-44">
        <div className="HostAddPayCard-content">
          <p className="mh-16">You won't be charged until you booked</p>
          <p className="HostAddPayCard-small_text">NAME ON CARD</p>
          <Input iconNone={true} placeholder={"Enter name on payment card"} />
          <p className="HostAddPayCard-small_text">CREDIT CARD OR DEBIT CARD NUMBER</p>
          <div className="HostAddPayCard-card_input">
            <Input  icon={<FaCcMastercard fontSize={24}/>} placeholder={"1234-5678-1234-5678"} />
          </div>
          <p className="HostAddPayCard-small_text">EXPIREY</p>
          <Input  iconNone={true} placeholder={"1234-5678-1234-5678"} />
          <p className="HostAddPayCard-small_text">SECURITY CODE</p>
          <Input iconNone={true} placeholder={"1234-5678-1234-5678"} />
        </div>
        <div className="HostAddPayCard-footer">
          <p><BsLock/> Your information is stored securely</p>
          <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostAddPaymentCard;