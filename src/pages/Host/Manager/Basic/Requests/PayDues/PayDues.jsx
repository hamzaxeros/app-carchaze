/**
 * PayDues
 * @module 🔗:src/pages/Host/Manager/Basic/Requests/PayDues/PayDues.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Pay remaining Dues to book a trip
 * 
 */

import React from "react";
import ErrorIcon from "../../../../../../assets/images/Error-Icon.png";
import Button from "../../../../../../components/public/resources/Button/Button";

const PayDues = (props) => {


  return (
    <React.Fragment>
      <div className="PayDues-outer mv-44 mh-16">
          <div className="PayDues-content">
            <img src={ErrorIcon} alt="Tick" />
            <div>
              <h1 className="mt-44 mb-16">Pay Rs. 2000</h1>
              <p className="mv-16">Unfortunately, you won't be able to book a car Unless you pay all of outstanding dues on your account.</p>
            </div>
          </div>
          <div className="PayDues-footer mt-44">
            <Button style={{"backgroundColor":"transparent","color":'#ff3b30',"border":'1px solid #ff3b30',"marginBottom":'16px'}} title={"View receipt"} />
            <Button title={"Pay & continue"}  />
          </div>

      </div>
    </React.Fragment>
  )
}

export default PayDues;