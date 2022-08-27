/**
 * HostEnterYouCovered
 * @module 🔗:src/pages/Host/Manager/Entrance/YouCovered/HostEnterYouCovered.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Covered Entrance Page
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";
import YouCovered from "../../../../../assets/images/You-Covered.png";

const HostEnterYouCovered = (props) => {


  return (
    <React.Fragment>
       <div className="HostEnterYouCovered-outer mv-44 mh-16">
        <div className="HostEnterYouCovered-content">
            <img src={YouCovered} alt="" />
            <h1 >You're Covered</h1>
            <p className="mv-44">Pick any protection plans that's right for you, Each with a diffrent level of contractual reimbursement from CarChaze in the unlikely event
            your vehicle is damaged, stolen or vandalised during a trip.
            </p>

        </div>

        <div className="HostEnterYouCovered-footer">
            <Button title={"Get started"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostEnterYouCovered;