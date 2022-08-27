/**
 * BasicUnlistTextPage
 * @module 🔗:src/pages/Host/Manager/Unlist/BasicUnlistTextPage/BasicUnlistTextPage.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Basic page of Unlist with text and button change text to change page
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";

const BasicUnlistTextPage = (props) => {


  return (
    <React.Fragment>
      <div className="BasicUnlistTextPage-outer mv-44">
        <div className="BasicUnlistTextPage-content mh-16">
            <h1>Can we help?</h1>
            <p className="mt-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus consequuntur debitis delectus laborum necessitatibus illum reprehenderit aliquid recusandae ipsum dolore. Dolorem, quod esse dolore soluta aperiam recusandae perferendis illum nam ad, commodi sit. Exercitationem.</p>
        </div>
        <div className="BasicUnlistTextPage-footer mh-16">
            <Button title={"Learn more about"} />
            <Button style={{"border":'1px solid red',"backgroundColor":'transparent',"color":'red',"marginTop":'16px'}} title={"Unlist your car"} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default BasicUnlistTextPage;