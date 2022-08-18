/**
 * SearchAddAddress
 * @module 🔗:src/pages/Host/Listing/SearchAddAddress/SearchAddAddress.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Search and add Address
 * 
 */
import React from "react";
import Input from "../../../../../components/public/resources/Input/Input";
import List from "../../../../../components/public/resources/List/List";
import {IoPaperPlaneSharp} from "react-icons/io5";
import {TbRotateClockwise2} from "react-icons/tb";

const SearchAddAddress = (props) => {


  return (
    <React.Fragment>
      <div className="SearchAddAddress-outer mv-44">
        <div className="SearchAddAddress-search_outer">
          <Input style={{"padding":'17px 40px',"border":'none'}} placeholder={'Airport, City, Hotel or address'} />
        </div>
        <List style={{"fontSize":"larger","borderBottom":'none'}} leftText={[<span style={{"opacity":'.6',"margin":'8px',"fontSize":'22px'}}><IoPaperPlaneSharp/></span>,"Honda Civic 2018"]} rightArrowNone={true}/>
        <List style={{"fontSize":"larger"}} leftText={[<span style={{"opacity":'.6',"margin":'8px',"fontSize":'22px'}}><TbRotateClockwise2/></span>,"Hayatabad, Peshawar"]} rightArrowNone={true}/>
        
      </div>
    </React.Fragment>
  )
}

export default SearchAddAddress;