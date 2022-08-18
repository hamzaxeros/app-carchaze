/**
 * AddNewFeatures
 * @module 🔗:src/pages/Host/Listing/Features/AddNewFeature/AddNewFeatures.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Add New Features Page
 * 
 */

import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";

const AddNewFeatures = (props) => {


  return (
    <React.Fragment>
      <div className="AddNewFeatures-outer mv-44">
        <div className="AddNewFeatures-content">
          <p className="AddNewFeatures-head_text mv-16 mh-16">Lets drivers know about any additional features you car has.</p>
          <p className="AddNewFeatures-small_text mv-16 mh-16">
            ADDITIONAL FEATURE #1
          </p>
          <input placeholder={"Enter feature"} className="AddNewFeatures-input" type="text" />
          <p className="AddNewFeatures-small_info_text">Examples include parking assist, or leather seats</p>
        </div>

        <div className="AddNewFeatures-footer">
          <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddNewFeatures;