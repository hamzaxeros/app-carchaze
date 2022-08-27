/**
 * UnlistFeedback
 * @module 🔗:src/pages/Host/Manager/Unlist/UnlistFeedback/UnlistFeedback.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Unlist Feedback
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";

const UnlistFeedback = (props) => {


  return (
    <React.Fragment>
        <div className="UnlistFeedback-outer mv-44">
        <div className="UnlistFeedback-content mh-16">
            <h1>Share your feedback</h1>
            <textarea  className="UnlistFeedback-textarea mt-16" placeholder="Please tell us more about your design to enlist your car (optional)" cols="30" rows="10"></textarea>
        </div>
        <div className="UnlistFeedback-footer mh-16">
            <Button title={"Learn more about"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default UnlistFeedback;