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
import {IoIosArrowForward} from "react-icons/io"


/**
 *  List for Account
 * @param {string} rightText - Righ side text of the list 
 * @param {string} leftText - Left side text of the list
 * @param {boolean} rightArrowNone - Left Arrow of the list to disable 
 * @param {Object} [style] - Css style
 */
const List = (props) => {
  


  return (
    <React.Fragment>
      <div className="List-outer" style={props.style}>
        <div className="List-left_name">{props.leftText}</div>
          <div className="List-right_content">
            <div className="List-right_text">
              {props.rightText}
            </div>
            <div className="List-right_arrow">
              {!(props.rightArrowNone)?<IoIosArrowForward/>:''}
            </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default List