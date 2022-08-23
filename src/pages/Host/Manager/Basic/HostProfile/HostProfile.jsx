/**
 * HostProfile
 * @module 🔗:src/pages/Host/Manager/Basic/HostProfile/HostProfile.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Profile
 * 
 */

import React from "react";
import ProfileVector from "../../../../../assets/images/ProfileVector.png";
import List from "../../../../../components/public/resources/List/List";
import {AiFillCheckCircle, AiFillStar} from "react-icons/ai";

const HostProfile = (props) => {


  return (
    <React.Fragment>
      <div className="HostProfile-outer mv-44">
        <div className="HostProfile-profile_outer">
            <img src={ProfileVector} alt="Profile Picture" />
            <div className="HostProfile-profile_details">
                <h1>Osman KhanKhail</h1>
                <h3>Joined Nov 20 (500 trips)</h3>
                <p className="opacity-6">Peshawar</p>
            </div>

        </div>

        <p className="HostProfile-small_text">
            ABOUT OSMAN
        </p>
        <p className="HostProfile-description">
            I'm from Peshawar, works in travel industry from the last 3 years
        </p>
        <div className="HostProfile-lists">
            <div className="HostProfile-list">
                <List rightArrowNone={true} style={{"borderTop":'none'}} leftText={[<p>Lives at &nbsp; &nbsp; <span className="opacity-6">District / City</span></p>]} />
            </div>
            <div className="HostProfile-list">
                <List rightArrowNone={true} style={{"borderTop":'none'}} leftText={[<p>Works at &nbsp; &nbsp; <span className="opacity-6">CarChaze / Zong / FBR</span></p>]} />
            </div>
            <div className="HostProfile-list">
                <List rightArrowNone={true} style={{"border":'none'}} leftText={[<p>School &nbsp; &nbsp; <span className="opacity-6">College / University</span></p>]} />
            </div>
            <div className="HostProfile-list">
                <List style={{"borderBottom":'none'}} rightArrowNone={true} leftText={[<p>Languages &nbsp; &nbsp; <span className="opacity-6">Urdu / English / Pashto</span></p>]} />
            </div>
        </div>

        <p className="HostProfile-small_text">
            VERIFIED INFO
        </p>
        <div className="HostProfile-lists">
            <div className="HostProfile-list">
                <List rightArrowNone={true} rightText={<AiFillCheckCircle color="red"/>} rightTextStyle={{"opacity":'1',"fontSize":'larger'}} style={{"borderTop":'none'}} leftText={[<p>Approved to drive</p>]} />
            </div>
            <div className="HostProfile-list">
                <List rightArrowNone={true} rightText={<AiFillCheckCircle color="red"/>} rightTextStyle={{"opacity":'1',"fontSize":'larger'}} style={{"borderTop":'none'}} leftText={[<p>Phone Number</p>]} />
            </div>
            <div className="HostProfile-list">
                <List rightArrowNone={true} rightText={<AiFillCheckCircle color="red"/>} rightTextStyle={{"opacity":'1',"fontSize":'larger'}} style={{"borderTop":'none',"borderBottom":'none'}} leftText={[<p>Facebook</p>]} />
            </div>
        </div>

        <p className="HostProfile-small_text">
            REVIEWS FROM HOSTS
        </p>
        <List leftText={[<h2>4.7 <AiFillStar color="red"/> (0 reviews)</h2>]} />

        <p className="HostProfile-small_text">
            REVIEWS FROM RENTERS
        </p>
        <div className="HostProfile-lists">
            <div className="HostProfile-list">
                <List style={{"borderTop":'none'}} leftText={[<h2>4.7 <AiFillStar color="red"/> (0 reviews)</h2>]} />
            </div>
            <div className="HostProfile-list">
                <List style={{"borderTop":'none',"borderBottom":'none'}} leftText={[<p>Osman vehicles</p>]} />
            </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default HostProfile;