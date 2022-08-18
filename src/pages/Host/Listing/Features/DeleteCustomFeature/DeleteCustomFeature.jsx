/**
 * DeleteCustomFeature
 * @module 🔗:src/pages/Host/Listing/Features/DeleteCustomFeature/DeleteCustomFeature.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Delete Custom Feature Page
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";


const DeleteCustomFeature = (props) => {


  return (
    <React.Fragment>
      <div className="DeleteCustomFeature-outer mv-44">
        <div className="DeleteCustomFeature-content">
          <p className="DeleteCustomFeature-head_text mh-16">
            Lets drivers know about any additional features you car has.
          </p>
          <p className="DeleteCustomFeature-small_text mt-44 ">
            ADDITIONAL FEATURE #1
          </p>
          <List leftText={"Leather seats"} rightArrowNone={true} />
          <p className="DeleteCustomFeature-small_info_text">
            Examples include parking assist, or leather seats
          </p>
        </div>
        <div className="DeleteCustomFeature-footer">
          <Button style={{"backgroundColor":'white',"border":'1px solid red',"color":'red'}} title={"Delete feature"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DeleteCustomFeature;