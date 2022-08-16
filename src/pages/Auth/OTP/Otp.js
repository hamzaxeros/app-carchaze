/**
 * Otp
 * @module 🔗:src/pages/Auth/OTP/Otp.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Authentication page of otp
 * 
 */
import React from "react";
import Input from "../../../components/public/resources/Input/Input";
import Button from "../../../components/public/resources/Button/Button";

const Otp = (props) => {



  return (
      <div className="Auth__Otp-outer">
        <p className="Auth__Otp-top_text">Please enter 6 digit code sent to </p>
        <p className="Auth__Otp-number_text"><b>+923001234567</b></p>
        <div className="Auth__Otp-input_code">
            <Input label={"OTP"} placeholder={"OTP Code"}/>
        </div>

        <div className="Auth__Otp-resend_btn">
            <Button style={{"background":'transparent',"color":'black'}} title={"Resend Code"} />
        </div>

        <div className="Auth__Otp-call_btn">
            <Button style={{"background":'transparent',"color":'black'}} title={"Call Me"} />
        </div>


      </div>
  )
}

export default Otp