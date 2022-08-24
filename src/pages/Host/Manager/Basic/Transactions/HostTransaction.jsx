/**
 * HostTransaction
 * @module 🔗:src/pages/Host/Manager/Basic/Transactions/HostTransaction.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Transaction History
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";


const HostTransaction = (props) => {


  return (
    <React.Fragment>
      <div className="HostTransaction-outer">
        <div className="HostTransaction-head">
          <List style={{"border":'none'}} rightTextStyle={{"opacity":'1'}} rightArrowNone={true} leftText={[<p style={{"padding":'6px 0px'}}>WE OWE YOU</p>,<h2>Rs. 15000</h2>]} rightText={[<p style={{"padding":'6px 0px'}}>PAYOUT METHOD</p>,<h2>04047900958003</h2>]} />
          <List style={{"border":'none'}} rightTextStyle={{"opacity":'1',"width":'180px'}} rightArrowNone={true} leftText={[<p style={{"padding":'6px 0px'}} >NEXT PAYMENT DATE</p>,<h2>Jun 03</h2>]} rightText={<Button style={{"borderRadius":'2px',"backgroundColor":'transparent',"color":'red',"border":'1px solid red'}} title={'Edit account'} />} />
        </div>
        
        <div className="HostTransaction-list mt-44">
          <List rightArrowNone={true} leftText={[<h2>Payment</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>HBL 79009580003</p>]} rightText={[<h2 style={{"color":'green'}}>15000</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>13-Apr-20</p>]} />
          <List rightArrowNone={true} style={{"borderTop":'none'}} leftText={[<h2>Osman</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>With Honda Civic</p>]} rightText={[<h2 style={{"color":'green'}}>15000</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>13-Apr-20</p>]} />
          <List rightArrowNone={true} style={{"borderTop":'none'}} leftText={[<h2>Osman</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>HBL 79009580003</p>]} rightText={[<h2 style={{"color":'red'}}>15000</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>13-Apr-20</p>]} />
          <List rightArrowNone={true} style={{"borderTop":'none'}} leftText={[<h2>Osman's trip</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>HBL 79009580003</p>]} rightText={[<h2 style={{"color":'green'}}>15000</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>13-Apr-20</p>]} />
          <List rightArrowNone={true} style={{"borderTop":'none'}} leftText={[<h2>Osman</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>HBL 79009580003</p>]} rightText={[<h2 style={{"color":'red'}}>15000</h2>,<p style={{"opacity":'.6',"padding":'6px 0px'}}>13-Apr-20</p>]} />
        </div>

        <div className="HostTransaction-filter mt-44">
          <List ArrowDown={true} style={{"borderRight":'1px solid #00000040'}} leftText={"All Vehicle"} />
          <List ArrowDown={true} leftText={"2021"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostTransaction;