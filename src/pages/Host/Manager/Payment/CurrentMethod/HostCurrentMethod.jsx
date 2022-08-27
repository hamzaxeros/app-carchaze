/**
 * CurrentMethod
 * @module 🔗:src/pages/Host/Manager/Payment/CurrentMethod/CurrentMethod.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Current payment method in payment of host
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import ListWithIcons from "../../../../../components/public/resources/ListWithIcons/ListWithIcons";
import { TbCircleCheck } from "react-icons/tb";
import MasterCard from "../../../../../assets/images/Master-Card.png";
import Button from "../../../../../components/public/resources/Button/Button";
import { BsLock } from "react-icons/bs";


const HostCurrentMethod = (props) => {


  return (
    <React.Fragment>
      <div className="HostPayCurrentMethod-outer mv-44">
        <div className="HostPayCurrentMethod-content">
          <p className="HostPayCurrentMethod-small_text">
            CURRENT METHOD
          </p>
          <div className="HostPayCurrentMethod-list">
            <ListWithIcons icon={MasterCard} style={{"padding":'4px 16px'}} title={[<p>1234-5678-1234-5678</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Expires 10/29</p>]} rightStatusIcon={<TbCircleCheck fontSize={26} color="red"/>} />
          </div>
          <p className="HostPayCurrentMethod-small_text mt-44">
            OTHER METHODS
          </p>
          <div className="HostPayCurrentMethod-list">
            <ListWithIcons icon={MasterCard} style={{"padding":'4px 16px',"borderBottom":'none'}} title={[<p>1234-5678-1234-5678</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Expires 10/29</p>]} rightStatusIcon={<TbCircleCheck fontSize={26} color="red"/>} />
          </div>
          <div className="HostPayCurrentMethod-list">
            <ListWithIcons icon={MasterCard} style={{"padding":'4px 16px'}} title={[<p>1234-5678-1234-5678</p>,<p style={{"fontSize":'small',"opacity":'.6',"margin":'4px 0px'}}>Expires 10/29</p>]} rightStatusIcon={<TbCircleCheck fontSize={26} color="red"/>} />
          </div>
        </div>
        <div className="HostPayCurrentMethod-footer">
          <p className="mb-16"><BsLock/> Your information is stored securely</p>
          <Button title={"Change Method"} style={{"border":'1px solid red',"color":'red',"backgroundColor":'transparent',"marginBottom":'16px'}} />
          <Button title={"Add Payment Method"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostCurrentMethod;