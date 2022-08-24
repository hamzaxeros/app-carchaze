/**
 * Profile
 * @module 🔗:src/pages/Account/Profile/Profile.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description User Profile
 * 
 */

import React from "react";
import ProfileVector from "../../../assets/images/ProfileVector.png"
import Input from "../../../components/public/resources/Input/Input";

const Profile = (props) => {
  

    
  return (
    <React.Fragment>
      <div className="Profile-outer">
            <div className="Profile-content">
                <img src={ProfileVector} alt="Profile Pic" />
                <h3>Hamza Hussain</h3>

            </div>
            <div className="mt-44"></div>
            <p className="Profile-small_heading">About Me</p>
            <div className="Profile-textArea_outer">
                <textarea className="Profile-textArea" cols="30" rows="7" ></textarea>
            </div>

            <div className="mt-44"></div>

            <p className="Profile-small_heading">ADDITIONAL INFO</p>
            <div className="space-16"></div>
            <Input placeholder={"Enter your address"} label={"Live at"} />
            <div className="space-16"></div>
            <Input placeholder={"Enter your address"} label={"Live at"} />
            <div className="space-16"></div>
            <Input placeholder={"Enter your address"} label={"Live at"} />
            <div className="space-16"></div>
            <Input placeholder={"Enter your address"} label={"Live at"} />
      </div>
    </React.Fragment>
  )
}

export default Profile;