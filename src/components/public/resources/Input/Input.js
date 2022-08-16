/**
 * Input
 * @module 🔗:src/components/public/resources/Input/Input.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Input for Authentication
 * 
 */

import React from "react"
import {FaFlagUsa} from 'react-icons/fa'

/**
 * Input Component
 * @param {string} placeholder - Placeholder for Input 
 * @param {string} label - Top label for Input
 */
const Input = (props) => {

  return (
    <React.Fragment>
      <div class="Input_wrapper">
        <input className="Input" id={`Input-${props.placeholder}`} placeholder={props.placeholder}/>
        <label data-content={props.label} for={`Input-${props.placeholder}`}  className="Input_lable"></label>
        <label for={`Input-${props.placeholder}`} className="Input_icon"><FaFlagUsa /></label>
      </div>
    </React.Fragment>
  )
}


export default Input