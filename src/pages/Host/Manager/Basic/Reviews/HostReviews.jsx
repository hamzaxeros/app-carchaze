/**
 * HostReviews
 * @module 🔗:src/pages/Host/Manager/Basic/Reviews/HostReviews.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Reveiws of the Host
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import DemoCar from "../../../../../assets/images/Demo-Car.jpg";
import ProfileVector from "../../../../../assets/images/ProfileVector.png"
import { AiFillStar } from "react-icons/ai";

const HostReviews = (props) => {


  return (
    <React.Fragment>
      <div className="HostReviews-outer mt-44">
        <List style={{"border":'none'}} rightArrowNone={true} leftText={[<h1>Honda Civic 2019</h1>,<h2 style={{"padding":'6px 0px'}}>ABC 123 - 65 Plan</h2>,<p style={{"opacity":'.6'}}>215 trips</p>]} rightText={<img style={{"height":'70px'}} src={DemoCar} alt="Car Image" />}  />
        

        <div className="mt-16 mh-16">
            <h1>4.91 <AiFillStar color="red" fontSize={38}/> </h1>
            <p className="mt-16">140 reviews</p>
        </div>

        <div className="HostReviews-lists">

            <div className="HostReviews-list mh-16 mt-16">
                <div className="HostReviews-list_profile_outer">
                    <img src={ProfileVector} alt="" className="HostReviws-list_profile" />
                </div>
                <div className="HostReviews-list_text_outer ">
                    <div className="HostReviews-list_reviews">
                        <AiFillStar color="red" fontSize={26}/>
                        <AiFillStar color="red" fontSize={26}/>
                        <AiFillStar color="red" fontSize={26}/>
                        <AiFillStar color="red" fontSize={26}/>
                        <AiFillStar color="red" fontSize={26}/>
                    </div>
                    <h2>Osman &nbsp; <span className="opacity-6"> Nov 20</span></h2>
                    <p>It is very easy and convenient renting form Ahmad, I would rent again form this man</p>

                </div>
            </div>
            <div className="HostReviews-list mh-16 mt-16">
                <div className="HostReviews-list_profile_outer">
                    <img src={ProfileVector} alt="" className="HostReviws-list_profile" />
                </div>
                <div className="HostReviews-list_text_outer ">
                    <div className="HostReviews-list_reviews">
                        <AiFillStar color="red" fontSize={26}/>
                        <AiFillStar color="red" fontSize={26}/>
                        <AiFillStar color="red" fontSize={26}/>
                        <AiFillStar color="red" fontSize={26}/>
                        <AiFillStar color="red" fontSize={26}/>
                    </div>
                    <h2>Osman &nbsp; <span className="opacity-6"> Nov 20</span></h2>
                    <p>It is very easy and convenient renting form Ahmad, I would rent again form this man</p>

                </div>
            </div>
            
        </div>

        <div className="HostReviews-footer mt-44">
            <List  leftText={"Transaction History"} style={{"borderBottom":'none'}} /> 
            <div className="HostReviews-filter">
                <List ArrowDown={true} style={{"borderRight":'1px solid #00000040'}} leftText={"Civic 2019"} />
                <List ArrowDown={true} leftText={"2021"} />
            </div>
        </div>
      
      </div>
    </React.Fragment>
  )
}

export default HostReviews;