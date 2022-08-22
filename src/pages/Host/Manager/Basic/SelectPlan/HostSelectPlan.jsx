/**
 * HostSelectPlan
 * @module 🔗:src/pages/Host/Manager/Basic/SelectPlan/HostSelectPlan.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Select Plan
 * 
 */


import React from "react";
import List from "../../../../../components/public/resources/List/List";
import Button from "../../../../../components/public/resources/Button/Button";

const HostSelectPlan = (props) => {


  return (
    <React.Fragment>
      <div className="HostSelectPlan-outer mv-44">

            <div className="HostSelectPlan-head mh-16">
                <List rightArrowNone={true} style={{"border":'none',"width":'50%'}} leftText={<h2>Host takes</h2>} />
                <List rightArrowNone={true} style={{"border":'none',"opacity":'.6'}} leftText={<h2> Current Plan</h2>} />
            </div>
            <div className="HostSelectPlan-list">
                <List rightArrowNone={true} style={{"borderRight":'1px solid #00000040',"width":'50%'}} leftText={<h1>60%</h1>} />
                <List rightArrowNone={true} style={{"width":'50%'}}  leftText={<h1 style={{"opacity":'.5'}}>70%</h1>} />
            </div>


            <div className="HostSelectPlan-head mt-44 mh-16">
                <List rightArrowNone={true} style={{"border":'none'}} leftText={<h2>Deductible</h2>} />
            </div>
            <div className="HostSelectPlan-list">
                <List rightArrowNone={true} style={{"borderRight":'1px solid #00000040',"width":'50%'}} leftText={<h1>Rs. 100,00</h1>} />
                <List rightArrowNone={true} style={{"width":'50%'}}  leftText={<h1 style={{"opacity":'.5'}}>Rs. 250,000</h1>} />
            </div>


            <div className="HostSelectPlan-head mt-44 mh-16">
                <List rightArrowNone={true} style={{"border":'none'}} leftText={<h2>Lose of hosting income</h2>} />
            </div>
            <div className="HostSelectPlan-list">
                <List rightArrowNone={true} style={{"borderRight":'1px solid #00000040',"width":'50%'}} leftText={<h1>Included</h1>} />
                <List rightArrowNone={true}  style={{"width":'50%'}}  leftText={<h1 style={{"opacity":'.5'}}>Not Included</h1>} />
            </div>

            <div className="HostSelectPlan-head mt-44 mh-16">
                <List rightArrowNone={true} style={{"border":'none'}} leftText={<h2>Liability Coverage</h2>} />
            </div>
            <div className="HostSelectPlan-list">
                <List rightArrowNone={true} style={{"borderRight":'1px solid #00000040',"width":'50%'}} leftText={<h1>Rs. 10 Million</h1>} />
                <List rightArrowNone={true}  style={{"width":'50%'}}  leftText={<h1 style={{"opacity":'.5'}}>Rs. 10 Million</h1>} />
            </div>

            <div className="HostSelectPlan-head">
                <List rightArrowNone={true} style={{"border":'none'}} leftText={<h2>Courtesy Car</h2>} />
            </div>
            <div className="HostSelectPlan-list mb-44">
                <List rightArrowNone={true} style={{"borderRight":'1px solid #00000040',"width":'50%'}} leftText={<h1>Included</h1>} />
                <List rightArrowNone={true}  style={{"width":'50%'}} leftText={<h1 style={{"opacity":'.5'}}>Not Included</h1>} />
            </div>

            <List leftText={"Legal info"} />


            <div className="HostSelectPlan-button mh-16 mt-44">
              <Button title={"Choose this plan"} />
            </div>

      </div>
    </React.Fragment>
  )
}

export default HostSelectPlan;