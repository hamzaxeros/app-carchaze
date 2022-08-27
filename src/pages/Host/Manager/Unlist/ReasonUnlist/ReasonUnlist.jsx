/**
 * ReasonUnlist
 * @module 🔗:src/pages/Host/Manager/Unlist/ReasonUnlist/ReasonUnlist.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Unlist your vehicle and give
 * 
 */

import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import List from "../../../../../components/public/resources/List/List";

const ReasonUnlist = (props) => {


  return (
    <React.Fragment>
      <div className="ReasonUnlist-outer mv-44">
        <p className="mh-16 mb-16">Select reason for deleting your car listing</p>
        <div className="ReasonUnlist-lists">
            
            <p><span>Pause my listing temporarily </span><span><Input iconNone={true} type={'checkbox'} /></span></p>
            <p><span>I no longer have this car </span><span><Input iconNone={true} type={'checkbox'} /></span></p>
            <p><span>Insurance, trust or safety concern</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
            <p><span>I'm not earning enough</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
            <p><span>I feel it requires too much work</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
            <p><span>I've a negetive experirence</span><span><Input iconNone={true} type={'checkbox'} /></span></p>

            <p style={{"border":'none'}}><span>I've other reasons</span><span><Input iconNone={true} type={'checkbox'} /></span></p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ReasonUnlist;