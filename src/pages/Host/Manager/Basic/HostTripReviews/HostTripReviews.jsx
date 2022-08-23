/**
 * HostTripReviews
 * @module 🔗:src/pages/Host/Manager/Basic/HostTripReviews/HostTripReviews.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host listing trip reviews
 * 
 */

import React from "react";
import { AiFillStar } from "react-icons/ai";
import ProfileVector from "../../../../../assets/images/ProfileVector.png"

const HostTripReviews = (props) => {


  return (
    <React.Fragment>
      <div className="HostTripReviews-outer mt-44">

        <div className="mt-16 mh-16 mb-44">
            <h1>4.91 <AiFillStar color="red" fontSize={38}/> </h1>
            <p className="mt-16">140 reviews</p>
        </div>

        <div className="HostTripReviews-lists ">

            <div className="HostTripReviews-list mh-16 mt-16">
                <div className="HostTripReviews-list_profile_outer">
                    <img src={ProfileVector} alt="" className="HostReviws-list_profile" />
                </div>
                <div className="HostTripReviews-list_text_outer ">
                    <div className="HostTripReviews-list_reviews">
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
            <div className="HostTripReviews-list mh-16 mt-16">
                <div className="HostTripReviews-list_profile_outer">
                    <img src={ProfileVector} alt="" className="HostReviws-list_profile" />
                </div>
                <div className="HostTripReviews-list_text_outer ">
                    <div className="HostTripReviews-list_reviews">
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
      </div>
    </React.Fragment>
  )
}

export default HostTripReviews;