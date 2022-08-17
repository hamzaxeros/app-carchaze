/**
 * Facebook
 * @module 🔗:src/pages/Account/Facebook/Facebook.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Facebook Connection Page for user to connect with facebook
 * 
 */

import React from "react";
import List from "../../../components/public/resources/List/List";
import Button from "../../../components/public/resources/Button/Button";
import {BsFacebook} from "react-icons/bs";

const Facebook = (props) => {


  return (
    <React.Fragment>
      <div className="AccFacebook-outer mv-44">
        <div className="AccFacebook-content">
          <p className="AccFacebook-text mh-16 mb-44">Connect your Facebook account to see mutual friends, built trust, automatically update your profile photo and more</p>
          <List leftText={"Facebook"} rightText={"Not connected"} rightArrowNone={true} />
        </div>
        <div className="mh-16">
            <Button style={{"background":'transparent',"color":'black',"border":"1px solid black"}} title={[<span style={{"fontSize":'22px',"color":"blue","padding":"8px"}}><BsFacebook /> </span>,"Connect with Facebook"]} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Facebook;