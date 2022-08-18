/**
 * FeaturesList
 * @module 🔗:src/pages/Host/Listing/Features/FeaturesList/FeaturesList.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Features List
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";

const FeaturesList = (props) => {


  return (
    <React.Fragment>
      <div className="FeaturesList-outer mv-44">
        <p className="FeaturesList-head_text mh-16 mv-16">Let drivers know about any additional features your car might have.</p>
        <List leftText={"Leather seats"} style={{"borderBottom":'none'}} />
        <List leftText={"Add features"} />

      </div>
    </React.Fragment>
  )
}

export default FeaturesList;