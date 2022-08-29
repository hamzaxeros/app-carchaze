/**
 * ApprovalPending
 * @module 🔗:src/pages/Host/Manager/Basic/ApprovalPending/ApprovalPending.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Approval pending screen
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";
import ApprovalPendingImage from "../../../../../assets/images/Approval-Pending.png";

const ApprovalPending = (props) => {


  return (
    <React.Fragment>
      <div className="ApprovalPending-outer mv-44">
        <div className="ApprovalPending-content">
            <h1 className="mh-16">Approval Pending</h1>
            <p className="mv-16 mh-16">Thanks for your interest in CarChaze, Currently our team is reviewing your profile.</p>
            <img src={ApprovalPendingImage} alt="" />
            <p className="mt-16 mh-16">We will notify you about your approval status in less then 48 hours or you can check your status on your account page anytime.</p>
            <p className="mt-44 mh-16">For more infomation you can see our <span>Eligibility criteria</span></p>
        </div>
        <div className="ApprovalPending-footer mt-16">
            <Button title={"Got it"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ApprovalPending