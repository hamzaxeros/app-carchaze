/**
 * HostDeliveredYou
 * @module 🔗:src/pages/Host/Manager/Basic/HostDeliveredYou/HostDeliveredYou.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host delivered to you location
 * 
 */

import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";
import { BsSearch } from "react-icons/bs";

const HostDeliveredYou = (props) => {


  return (
    <React.Fragment>
      <div className="HostDeliverdYou-outer mt-44">
        <div className="HostDeliverdYou-content">
            <p className="mh-16 mv-16">Where would you like the car delivered?</p>
            <div className="HostDeliverdYou-input">
                <Input style={{"all":'unset',"marginLeft":'34px'}} icon={<BsSearch/>} placeholder={"Address"} />
            </div>
        </div>
        <div className="HostDeliverdYou-footer ">
            <Button title={"Save"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostDeliveredYou;