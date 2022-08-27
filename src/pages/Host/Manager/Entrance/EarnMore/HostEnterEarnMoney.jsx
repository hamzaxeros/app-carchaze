/**
 * HostEnterEarnMoney
 * @module 🔗:src/pages/Host/Manager/Entrance/EarnMore/HostEnterEarnMoney.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Earn money entrance page
 * 
 */

import React from "react";
import EarnMoney from "../../../../../assets/images/Earn-Money.png";
import Button from "../../../../../components/public/resources/Button/Button";

const HostEnterEarnMoney = (props) => {


  return (
    <React.Fragment>
      <div className="HostEnterEarnMoney-outer mv-44 mh-16">
        <div className="HostEnterEarnMoney-content">
            <img src={EarnMoney} alt="" />
            <h1 >Earn money by renting your car </h1>
            <p className="mv-44">
            List your vehicle for free and Setup your own rules & daily price. When a qalified drivers book your vehicle, simply check then in 
            & out with CarChaze app. Get paid via direct deposite within three days after each trip. 
            </p>
            
        </div>

        <div className="HostEnterEarnMoney-footer">
            <Button title={"Continue"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostEnterEarnMoney;