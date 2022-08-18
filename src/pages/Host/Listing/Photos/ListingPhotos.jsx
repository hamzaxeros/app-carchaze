/**
 * ListingPhotots
 * @module 🔗:src/pages/Host/Listing/Photos/ListingPhotots.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Listing Vehicle Photos
 * 
 */

import React from "react";
import Button from "../../../../components/public/resources/Button/Button";

const ListingPhotos = (props) => {


  return (
    <React.Fragment>
      <div className="ListingPhotos-outer">
        <div className="ListingPhotos-content">
          <div className="ListingPhotos-photo"></div>
        </div>
        <div className="ListingPhotos-footer">
            <Button style={{"backgroundColor":'white',"color":'red',"border":'1px solid red',"margin-bottom":'16px'}} title={"Add vehicles photos"} />
            <Button title={"Continue"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default ListingPhotos;