/**
 * PhoneNumberInputer
 * @module 🔗:src/pages/Auth/PhoneNumberInput/PhoneNumberInputer.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Authentication page with enter phone number
 * 
 */

 import React from "react"
//  import Input from "../../components/public/resources/Input/Input";
//  import Button from "../../components/public/resources/Button/Button";
import Input from "../../../components/public/resources/Input/Input";
import Button from "../../../components/public/resources/Button/Button";
 
 const AuthPhoneNumber = (props) => {
 
 
 
   return (
     <React.Fragment>
         <div className="Auth__EnterPhone-outer">
             <div>
                  <p className="Auth__EnterPhone-top_text">Please Provide phone number registered in your name to connect you about trip and to connect host with driver</p>
                  <div className="Auth__EnterPhone-input_number"><Input label={"Phone Number"} placeholder={"Enter Phone Number"}/></div>
                  <p className="Auth__EnterPhone-small_text opacity-6 mt-16">By entering your phone number may recieve an SMS for varificataion, Messesge and data rate may applay</p>
             </div>

             <div className="Auth__EnterPhone-footer">
                <p className="Auth__EnterPhone-Agree_text">Tap "Agree & continue" to accept the CarChaze </p>
                <p className="Auth__EnterPhone-terms_text">Terms of Services & Privicy policy</p>
    
                <Button title={"Agree & Continue"} />
             </div>
         </div>
     </React.Fragment>
   )
 }
 
 export default AuthPhoneNumber;