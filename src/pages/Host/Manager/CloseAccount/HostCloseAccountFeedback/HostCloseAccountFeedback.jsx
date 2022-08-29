/**
 * HostCloseAccountFeedback
 * @module 🔗:src/pages/Host/Manager/CloseAccount/HostCloseAccountFeedback/HostCloseAccountFeedback.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host close account feedback and final page
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";

const HostCloseAccountFeedback = (props) => {


  return (
    <React.Fragment>
      <div className="HostCloseAccountFeedback-outer">
        <div className="HostCloseAccountFeedback-content">
          <h1 className="mv-44">We are closing your account</h1>
          <p className="mv-44"><strong>Let us know what's going on</strong></p>
          <textarea name="" id="" cols="30" rows="10" placeholder="Feel free to tell us more? (optional)"></textarea>
        </div>
        <div className="HostCloseAccountFeedback-footer">
          <Button title={"Close my account"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostCloseAccountFeedback;