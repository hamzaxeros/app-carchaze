/**
 * DeliveryLocation
 * @module 🔗:src/pages/Host/Manager/Location/DeliveryLocatin/DeliveryLocation.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host add delivery location
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";
import Input from "../../../../../components/public/resources/Input/Input";
import { BsSearch } from "react-icons/bs";

const DeliveryLocation = (props) => {


  return (
    <React.Fragment>
      <div className="HostDeliveryLocation-outer mv-44">
        <Input style={{"borderLeft":'none',"borderRight":'none',"padding":'15px 37px'}} placeholder={"Airport, City, Hotel or address"} icon={<BsSearch/>}  />

          <p className="HostDeliveryLocation-small_text mh-16 mt-44">POPULAR LOCATIONS</p>
        <List style={{"borderBottom":'none'}} rightArrowNone={true} leftText={[<p>Bacha Khan internation Airport</p>,<p style={{"opacity":'.6',"fontSize":'small'}}>MM Alam road, Cantt, Peshawar</p>]} />
        <List rightArrowNone={true} leftText={[<p>Haji camp bus stand</p>,<p style={{"opacity":'.6',"fontSize":'small'}}>Main G.T road, Peshawar</p>]} />
      </div>
    </React.Fragment>
  )
}

export default DeliveryLocation;