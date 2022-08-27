/**
 * HostEnterTrustAndSafe
 * @module 🔗:src/pages/Host/Manager/Entrance/TrustAndSafe/HostEnterTrustAndSafe.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Trust and Safe entrance page
 * 
 */

import React from "react";
import TrustAndSafe from "../../../../../assets/images/Trust-And-Safe.png";
import Button from "../../../../../components/public/resources/Button/Button";

const HostEnterTrustAndSafe = (props) => {


  return (
    <React.Fragment>
      <div className="HostEnterTrustAndSafe-outer mv-44 mh-16">
        <div className="HostEnterTrustAndSafe-content">
            <img src={TrustAndSafe} alt="" />
            <h1 >Trust and Safety</h1>
            <p className="mv-44">Every driver provide a valid driver's license, phone number and other information. While You can see your driver reviews before hosting them.
                CarChaze has strict rules of road and excepts all renters to care of you car as if it were their own.
            </p>
        </div>

        <div className="HostEnterTrustAndSafe-footer">
            <Button title={"Continue"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostEnterTrustAndSafe;