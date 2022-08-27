/**
 * AvailableMethod
 * @module 🔗:src/pages/Host/Manager/Payment/AvailableMethod/AvailableMethod.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Avilable Payment method in the Payment of Host
 * 
 */

import React from "react";
import MasterCard from "../../../../../assets/images/Master-Card.png";
import ListWithIcons from "../../../../../components/public/resources/ListWithIcons/ListWithIcons";
import Button from "../../../../../components/public/resources/Button/Button";
import { MdOutlineCircle } from "react-icons/md";
import {BsCircle} from "react-icons/bs";

const HostAvailableMethod = (props) => {


  return (
    <React.Fragment>
      <div className="HostPayAvailableMethod-outer mt-44">
        <div className="HostPayAvailableMethod-content">
          <p className="HostPayAvailableMethod-small_text">
            AVAILABLE METHODS
          </p>
          <div className="HostPayAvailableMethod-list">
              <ListWithIcons icon={MasterCard} style={{"padding":'4px 16px',"borderBottom":'none'}} title={[<p>1234-5678-1234-5678</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Expires 10/29</p>]} rightStatusIcon={<BsCircle fontSize={26} color="red"/>} />
          </div>
          <div className="HostPayAvailableMethod-list">
              <ListWithIcons icon={MasterCard} style={{"padding":'4px 16px'}} title={[<p>1234-5678-1234-5678</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Expires 10/29</p>]} rightStatusIcon={<BsCircle fontSize={26} color="red"/>} />
          </div>
        </div>

        <div className="HostPayAvailableMethod-footer">
          <Button title={"Change Method"} style={{"border":'1px solid red',"color":'red',"backgroundColor":'transparent',"marginBottom":'16px'}} />
          <Button title={"Add Payment Method"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostAvailableMethod;