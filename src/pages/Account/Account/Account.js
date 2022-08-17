/**
 * Account
 * @module 🔗:src/pages/Account/Account/Account.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description User Account Page with user details
 * 
 */

import React from "react";
import ProfileVector from "../../../assets/images/ProfileVector.png";
import List from "../../../components/public/resources/List/List";
import {IoIosArrowForward} from "react-icons/io";
import {AiFillStar} from "react-icons/ai";

const Account = (props) => {

  return (
    <React.Fragment>
      <div className="Account-outer">
        <div className="Account-profile_sec">
            <div className="Account-profile_sec_pic_outer">
                <img src={ProfileVector} alt="Profile Picture"  />
            </div>
            <div className="Account-profile_sec_text">
                <h3>Profile Name</h3>
                <p className="Account-profile_sec_date">Joined Nov 5 20</p>
                <p className="Account-profile_sec_trip">{"(500 trips)"}</p>
                
            </div>
            <div className="Account-profile_sec_arrow">
                <IoIosArrowForward/>
            </div>
        </div>
        {/* <List leftText={["4.7", <strong style={{"color":'#e32f2f',"margin":"6px","fontSize":"20px"}}><AiFillStar/></strong>,  "(0 reviews)"]}  /> */}
        <div className="space-44"></div>
        <List leftText={"Membership"}  />
        <List leftText={"Manage Account"} />
        {/* <div className="space-44"></div>
        <List leftText={"Favourite"} /> */}
        <div className="space-44"></div>
        <List leftText={"How it works ?"} />
        <List leftText={"Contact support"} />
        <List leftText={"Legal"} />


      </div>
    </React.Fragment>
  )
}

export default Account;