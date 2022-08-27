/**
 * HostAddLocation
 * @module 🔗:src/pages/Host/Manager/Location/AddLocation/HostAddLocation.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Add Location
 * 
 */
import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";

// For slider half to be colored must check this url, we can do it with js values
// https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider

const HostAddLocation = (props) => {


  return (
    <React.Fragment>
      <div className="HostAddLocation-outer">
        <div className="HostAddLocation-content">
          <div className="HostAddLocation-location mt-44 mh-16">
            <h2>Bacha Khan Internation Airport</h2>
            <p className="mt-16 opacity-6">Airport</p>
            <p className="mt-16 opacity-6 ">Khyber road, Cantonament board, Peshawar</p>

          </div>
          <p className="HostAddLocation-small_text mh-16 mt-44">DELIVERY FEES</p>
          <div className="HostAddLocation-range">
            <p className="HostAddLocation-price opacity-6">Rs. 5000</p>
            <p className="opacity-6">Delivery fee included pickup & return</p>
            <div className="HostAddLocation-range_input">
              <Input type={"range"} iconNone={true} />
            </div>
          </div>
        </div>
        <div className="HostAddLocation-footer">
          <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostAddLocation;