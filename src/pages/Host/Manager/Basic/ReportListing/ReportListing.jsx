/**
 * ReportListing
 * @module 🔗:src/pages/Host/Manager/Basic/ReportListing/ReportListing.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Report Listing
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Input from "../../../../../components/public/resources/Input/Input";
import Button from "../../../../../components/public/resources/Button/Button";

const ReportListing = (props) => {


  return (
    <React.Fragment>
      <div className="ReportListing-outer mv-44">
        <div className="ReportListing-content">

            <div className="ReportListing-lists">
                <div className="ReportListing-list">
                    <List 
                        leftText={"Inappropriate / offensive content"} 
                        rightArrowNone={true} 
                        rightTextStyle={{"opacity":'1'}}
                        rightText={<Input type={"checkbox"} iconNone={true} style={{"height":'44px',"width":'25px'}} />} 
                    />
                </div>
                <div className="ReportListing-list">
                    <List style={{"border":'none'}}
                        leftText={"Misleading / suspecious information"} 
                        rightArrowNone={true} 
                        rightTextStyle={{"opacity":'1'}}
                        rightText={<Input type={"checkbox"} iconNone={true} style={{"height":'44px',"width":'25px'}} />}
                    />
                </div>
                <div className="ReportListing-list">
                    <List 
                        style={{"borderBottom":'none'}} 
                        leftText={"Spam"} 
                        rightArrowNone={true}
                        rightTextStyle={{"opacity":'1'}}
                        rightText={<Input type={"checkbox"} iconNone={true} style={{"height":'44px',"width":'25px'}} />}
                        />
                </div>
                <div className="ReportListing-list">
                    <List 
                        leftText={"Other"} 
                        rightArrowNone={true}
                        rightTextStyle={{"opacity":'1'}}
                        rightText={<Input type={"checkbox"} iconNone={true} style={{"height":'44px',"width":'25px'}} />}
                        />
                </div>
            </div>

            <div className="ReportListing-textArea mt-44">
                <textarea name="description" cols="30" placeholder="Describe" rows="10"></textarea>
            </div>
        </div>
        <div className="ReportListing-footer mh-16">
            <Button title={"Report"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ReportListing;