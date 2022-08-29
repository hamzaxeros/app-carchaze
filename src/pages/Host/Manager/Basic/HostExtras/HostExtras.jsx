/**
 * HostExtras
 * @module 🔗:src/pages/Host/Manager/Basic/HostExtras/HostExtras.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Extra features 
 * 
 */

import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";

const HostExtras = (props) => {


  return (
    <React.Fragment>
      <div className="HostExtras-outer mv-44">
        <div className="HostExtras-content">
            <p className="mh-16">These optional extras are offered by this host and can help make your trip unique and memorable </p>
            <p className="HostExtras-small_text mt-44">
                CONVENIENCE
            </p>
            <div className="HostExtras-checkboxes">
                <div className="HostExtras-checkbox_outer">
                    <Input type={"checkbox"} iconNone={true}  />
                    <div className="HostExtras-checkbox_text">
                        <h3>Chauffeur service <span>Rs. 1000/day</span></h3>
                        <p>If you have a long road hit add approved driver to your trip and drive easy</p>
                    </div>
                </div>

                <div className="HostExtras-checkbox_outer">
                    <Input type={"checkbox"} iconNone={true}  />
                    <div className="HostExtras-checkbox_text">
                        <h3>Unlimited distance <span>Rs. 1000/day</span></h3>
                        <p></p>
                    </div>
                </div>

                <div className="HostExtras-checkbox_outer">
                    <Input type={"checkbox"} iconNone={true}  />
                    <div className="HostExtras-checkbox_text">
                        <h3>Prepaid refuel <span>Rs. 4000/trip</span></h3>
                        <p>Save time and make drop-off a breezy adding this extra, which allows you to return my car any fuel level. Price includes up-to a full tank of gas</p>
                    </div>
                </div>

                <div className="HostExtras-checkbox_outer">
                    <Input type={"checkbox"} iconNone={true}  />
                    <div className="HostExtras-checkbox_text">
                        <h3>Post trip cleaning <span>Rs. 4000/trip</span></h3>
                        <p style={{"border":'none'}}>Return the car hassle free without worrying about cleaning up after your trip. Doesn't cover upholstery cleaning, spills, stains, pet hair or smokeremoval</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="HostExtras-footer">
            <Button title={"No, I don't want to add any extra"} style={{"border":'1px solid red',"backgroundColor":'transparent',"color":'red',"marginBottom":'16px'}} />
            <Button title={"Save"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostExtras;