/**
 * ListWithIcons
 * @module 🔗:src/components/public/resources/ListWithIcons/ListWithIcons.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description List With Extra Icons on left and right side
 * 
 */

import React from "react";
import ProfileVector from "../../../../assets/images/ProfileVector.png";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {CgProfile} from 'react-icons/cg';


/**
 * List With Extra Icons
 * @param {string} title - Title for List
 * @param {string} info - Info for after title of list
 * @param {Object} [style] - Css Style for list
 */
const ListWithIcons = (props) => {

    const {
        style = props.style,
        title = props.title,
        info = props.info
    } = props;

  return (
    <React.Fragment>
      <div className="ListWithIcons-outer" style={props.style} >
            <div className="ListWithIcons-left_icon_outer">
                <img className="ListWithIcons-left_icon" src={ProfileVector} alt="Profile Vector" />
            </div>
            <div className="ListWithIcons-section_2">
              
            </div>
            <div className="ListWithIcons-text">
                <h4 className="ListWithIcons-text_title">{props.title}</h4>
                <p className="ListWithIcons-text_small">{props.info}</p>
            </div>
            <div className="ListWithIcons-right_icon_outer">
                <AiOutlineInfoCircle className="ListWithIcons-right_icon" />
            </div>

            
      </div>
    </React.Fragment>
  )
}

export default ListWithIcons;