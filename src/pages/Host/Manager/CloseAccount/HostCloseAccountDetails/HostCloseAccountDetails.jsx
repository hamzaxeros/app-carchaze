/**
 * HostCloseAccountDetails
 * @module 🔗:src/pages/Host/Manager/CloseAccount/HostCloseAccountDetails/HostCloseAccountDetails.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host close account details
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button"; 

const HostCloseAccountDetails = (props) => {


  return (
    <React.Fragment>
      <div className="HostCloseAccountDetails-outer mv-44 mh-16">
        <div className="HostCloseAccountDetails-content">
            <h3>What does closing your account mean?</h3>
            <p className="mv-16">We not like to see you go. Are you sure you want to close your CarChaze account? Please be advised if you chose to proceed,
                your Account closure will be irreversible.
            </p>
            <ul>
                <li>You will no longer be able to book trips or list your car on CarChaze </li>
                <li>Your vehicle(s) will be deleted and unlisted.</li>
                <li>Any information related your will nor be publicly viewable on our app.</li>
                <li>Any booked or pending trips will be cancalled immediately.</li>
                <li>Currently you have 0 booked and/ pending trips.</li>
                <li>You can't reopen your account. To make your account active again, you must contact customer support.</li>
                <li>You are still obligated to pay any unpaid tickets, tolls, fees, reimbursements, or claims tied to past trips.</li>
                
            </ul>
            <h3 className="mv-44">Do you want to continue?</h3>
        </div>
        <div className="HostCloseAccountDetails-footer">
            <Button title={"Continue"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostCloseAccountDetails;