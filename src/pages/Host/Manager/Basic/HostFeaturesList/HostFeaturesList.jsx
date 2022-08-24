/**
 * HostFeaturesList
 * @module 🔗:src/pages/Host/Manager/Basic/HostFeaturesList/HostFeaturesList.jsx
 *
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host listing features
 *
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import {MdPets} from "react-icons/md";
import {FaRegPlayCircle} from "react-icons/fa";
import {IoBluetoothOutline} from "react-icons/io5";


const HostFeaturesList = (props) => {
  return (
    <React.Fragment>
      <div className="HostFeaturesList-outer mv-44">
        <div className="HostFeaturesList-lists">
          <div className="HostFeaturesList-list">
            <List rightArrowNone={true} style={{"borderTop":'none'}} leftText={[<p>You must be at least 21 to rent</p>]} />
          </div>
          <div className="HostFeaturesList-list">
            <List rightArrowNone={true} style={{"border":'none'}} leftText={[<p><MdPets/> &nbsp;Per Friendly</p>]} />
          </div>
          <div className="HostFeaturesList-list">
            <List rightArrowNone={true} style={{"borderBottom":'none'}} leftText={[<p><FaRegPlayCircle/> &nbsp;Apple CarPlay</p>]} />
          </div>
          <div className="HostFeaturesList-list">
            <List rightArrowNone={true} style={{"borderBottom":'none'}} leftText={[<p><IoBluetoothOutline/> &nbsp;Bluetooth</p>]} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HostFeaturesList;
