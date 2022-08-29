/**
 * HostProtectionPlan
 * @module 🔗:src/pages/Host/Manager/Basic/HostProtectionPlan/HostProtectionPlan.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Protection plans
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const HostProtectionPlan = (props) => {


  return (
    <React.Fragment>
      <div className="HostProtectionPlan-outer mv-44">
        <p className="mv-44 mh-16">Choose a protection plan that includes coverage under a policy of insurance from Liberty mutual offered through CarChaze Insurance Agency, LLC.</p>
        
        <div>
            <List leftText={<strong>Premier</strong>} rightArrowNone={true} />
            <div className="HostProtectionPlan-lists">
                <p><strong>Peace of mind-</strong> Chill out and drive happy with a maximum coverage plan.</p>
                <ul>
                    <li>Up to  PKR10000000 in liability insurance</li>
                    <li>No out-of-pocket costs for vehicle damage or theft</li>
                </ul>
            </div>
        </div>

        <div className="mt-44">
            <List leftText={<strong>Standard</strong>} rightArrowNone={true} />
            <div className="HostProtectionPlan-lists">
                <p><strong>Happy medium-</strong> Hit the road confidently with solid protection.</p>
                <ul>
                    <li>Up to  PKR10000000 in liability insurance</li>
                    <li>PKR500000 max out-of-pocket for vehicle damage or theft</li>
                </ul>
            </div>
        </div>

        <div className="mv-44">
            <List leftText={<strong>Minimum</strong>} rightArrowNone={true} />
            <div className="HostProtectionPlan-lists">
                <p><strong>Cost effective-</strong> Stay covered while pinching some pennies.</p>
                <ul>
                    <li>State minimum liability insurance</li>
                    <li>PKR300000 max out-of-pocket for vehicle damage or theft</li>
                </ul>
            </div>
        </div>

        <List leftText={[<p>Decline protection</p>,<p style={{"fonSize":'small',"opacity":'.6'}}>You will be responsible for all damages and third-party liability insurance</p>]} rightArrowNone={true} />

        <div className="mt-44 mh-16">
            <Button title={"Save"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostProtectionPlan;