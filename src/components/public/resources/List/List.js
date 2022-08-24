/**
 * AccountList
 * @module 🔗:src/components/public/resources/AccontList/AccountList.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Lists for account management
 * 
 */

import React from "react"
import {IoIosArrowForward} from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


/**
 *  List for Account
 * @param {string} rightText - Righ side text of the list 
 * @param {string} leftText - Left side text of the list
 * @param {boolean} rightArrowNone - Left Arrow of the list to disable 
 * @param {Object} [style] - Style overall list
 * @param {string} [rightOpacity] - opacity of right side text
 * @param {Object} [rightTextStyle] - Style the right side and right text of the list
 * @param {boolean} [ArrowDown] - set as true if you want to down the arrow
 */
const List = (props) => {
  
  // style={{"opacity":((props.rightOpacity)?(props.rightOpacity):'.6')}}

  return (
    <React.Fragment>
      <div className="List-outer" style={props.style}>
        <div className="List-left_name">{props.leftText}</div>
          <div className="List-right_content">
            <div className="List-right_text" style={props.rightTextStyle} >
              {props.rightText}
            </div>
            <div className="List-right_arrow" >
              {!(props.rightArrowNone)?
                (props.ArrowDown)?<IoIosArrowDown fontSize={28} />:<IoIosArrowForward fontSize={28}/>
                
              :''}
            </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default List