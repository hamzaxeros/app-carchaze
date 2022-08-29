/**
 * HostCloseAccountReason
 * @module 🔗:src/pages/Host/Manager/CloseAccount/HostCloseAccountReason/HostCloseAccountReason.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host close accoutn reason
 * 
 */

import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";

const HostCloseAccountReason = (props) => {


  return (
    <React.Fragment>
      <div className="HostCloseAccountReason-outer mv-44">
        <div className="HostCloseAccountReason-content">
            <p className="mh-16 mb-16">Select reason for closing your account</p>
            <div className="HostCloseAccountReason-lists">
                
                <p><span>I've another CarChaze account </span><span><Input iconNone={true} type={'checkbox'} /></span></p>
                <p><span>I have had negative experirence  </span><span><Input iconNone={true} type={'checkbox'} /></span></p>
                <p><span>Insurance, trust or safety concern</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
                <p><span>I have privicy concern</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
                <p><span>I wasn't able to find/book any good car</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
                <p><span>My car is no longer available</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
                <p><span>I'm not earning enough</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
                <p style={{"border":'none'}}><span>Other</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
            </div>
        </div>
        <div className="HostCloseAccountReason-footer ">
            <Button title={"Next"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostCloseAccountReason;