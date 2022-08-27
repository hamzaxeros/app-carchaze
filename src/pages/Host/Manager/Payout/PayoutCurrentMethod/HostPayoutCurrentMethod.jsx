/**
 * PayoutMethod
 * @module 🔗:src/pages/Host/Manager/Payout/PayoutMethod/PayoutMethod.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Payout method of host
 * 
 */

import React from "react";
import ListWithIcons from "../../../../../components/public/resources/ListWithIcons/ListWithIcons";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";
import { TbCircleCheck } from "react-icons/tb";
import { BsCheck, BsLock } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";

const HostPayoutCurrentMethod = (props) => {


  return (
    <React.Fragment>
      <div className="HostPayoutCurrentMethod-outer mv-44">
        <div className="HostPayoutCurrentMethod-content">
          <p className="HostPayoutCurrentMethod-small_text">
            CURRENT METHOD
          </p>
          <div className="HostPayoutCurrentMethod-list">
            <List rightArrowNone={true} style={{"padding":'12px 16px'}} leftText={[<p>HBL (0404) 111342512345</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Expires 10/29</p>]} rightStatusIcon={<TbCircleCheck fontSize={26} color="red"/>} rightText={<BsCheck2Circle color="red" fontSize={24} />} />
          </div>
          <p className="HostPayoutCurrentMethod-small_text mt-44">
            OTHER METHODS
          </p>
          <div className="HostPayoutCurrentMethod-list">
            <List rightArrowNone={true} style={{"padding":'12px 16px'}} leftText={[<p>Cheque</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Delivery via  courier (Service charger applay)</p>]} rightStatusIcon={<TbCircleCheck fontSize={26} color="red"/>} />
          </div>

        </div>
        <div className="HostPayoutCurrentMethod-footer">
          <p className="mb-16"><BsLock/> Your information is stored securely</p>
          <Button title={"Change Method"} style={{"border":'1px solid red',"color":'red',"backgroundColor":'transparent',"marginBottom":'16px'}} />
          <Button title={"Add bank account"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostPayoutCurrentMethod;