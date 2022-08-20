/**
 * InReviewListing
 * @module 🔗:src/pages/Host/Manager/Basic/InReviewListing/InReviewListing.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Listing of Cars in Review
 * 
 */

import React from "react";
import DemoCar from "../../../../../assets/images/Demo-Car.jpg";
import {AiFillStar} from "react-icons/ai";
import {GoPrimitiveDot} from "react-icons/go";

const InReviewListing = (props) => {


  return (
    <React.Fragment>
      <div className="InReviewListing-outer mv-44">
        <div className="InReviewListing-lists_outer">
          
            <div className="InReviewListing-list">
              <div className="InReviewListing-label">
               <GoPrimitiveDot color="yellow" fontSize={18} /> IN REVIEW
              </div>
              <div className="InReviewListing-list_car_outer">
                <img src={DemoCar} alt="" className="InReviewListing-list_car" />
              </div>
              <div className="InReviewListing-list_details">
                <h2>Mehran 2018</h2>
                <p>AAG 167</p>
                <p>4.7 &nbsp; <AiFillStar color="red" fontSize={19} /> &nbsp;  {"(500 trips)"}</p>
              </div>
            </div>

            <div className="InReviewListing-list">
            <div className="InReviewListing-label">
               <GoPrimitiveDot color="yellow" fontSize={18} /> IN REVIEW
              </div>
              <div className="InReviewListing-list_car_outer">
                <img src={DemoCar} alt="" className="InReviewListing-list_car" />
              </div>
              <div className="InReviewListing-list_details">
                <h2>Mehran 2018</h2>
                <p>AAG 167</p>
                <p>4.7 &nbsp; <AiFillStar color="red" fontSize={19} /> &nbsp;  {"(500 trips)"}</p>
              </div>
            </div>

            <div className="InReviewListing-list">
            <div className="InReviewListing-label">
               <GoPrimitiveDot color="yellow" fontSize={18} /> IN REVIEW
              </div>
              <div className="InReviewListing-list_car_outer">
                <img src={DemoCar} alt="" className="InReviewListing-list_car" />
              </div>
              <div className="InReviewListing-list_details">
                <h2>Mehran 2018</h2>
                <p>AAG 167</p>
                <p>4.7 &nbsp; <AiFillStar color="red" fontSize={19} /> &nbsp;  {"(500 trips)"}</p>
              </div>
            </div>

        </div>

      </div>
    </React.Fragment>
  )
}

export default InReviewListing;