/**
 * HostPayoutAvialbleMethod
 * @module 🔗:src/pages/Host/Manager/Payout/PayoutAvailableMethod/HostPayoutAvialbleMethod.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host payoout Current Method
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import { TbCircleCheck } from "react-icons/tb";
import Button from "../../../../../components/public/resources/Button/Button";
import { BsCircle } from "react-icons/bs";

const HostPayoutAvailableMethod = (props) => {


  return (
    <React.Fragment>
       <div className="HostPayoutAvailableMethod-outer mv-44">
        <div className="HostPayoutAvailableMethod-content">
          <p className="HostPayoutAvailableMethod-small_text">
            AVAILABLE METHODS
          </p>
          <div className="HostPayoutAvailableMethod-list">
            <List rightArrowNone={true} style={{"padding":'12px 16px'}} leftText={[<p>HBL (0404) 111342512345</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Bank transfer</p>]} rightStatusIcon={<TbCircleCheck fontSize={26} color="red"/>} rightText={<BsCircle color="red" fontSize={24} />} />
          </div>
          <div className="HostPayoutAvailableMethod-list">
            <List rightArrowNone={true} style={{"padding":'12px 16px'}} style={{"border":'none'}} leftText={[<p>HBL (0404) 111342512345</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Bank transfer</p>]} rightStatusIcon={<TbCircleCheck fontSize={26} color="red"/>} rightText={<BsCircle color="red" fontSize={24} />} />
          </div>
          <div className="HostPayoutAvailableMethod-list">
            <List rightArrowNone={true} style={{"padding":'12px 16px'}} leftText={[<p>Cheque</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Delivery via courier (Service charges applay)</p>]} rightStatusIcon={<TbCircleCheck fontSize={26} color="red"/>} rightText={<BsCircle  color="red" fontSize={24} />} />
          </div>
    

        </div>
        <div className="HostPayoutAvailableMethod-footer">
          <Button title={"Remove"} style={{"border":'1px solid red',"color":'red',"backgroundColor":'transparent',"marginBottom":'16px'}} />
          <Button title={"Set as current method"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostPayoutAvailableMethod;