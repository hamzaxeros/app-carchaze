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

const Input = (props) => {

  return (
    <React.Fragment>
      <div class="Input_wrapper">
        <input id="Input" placeholder={props.placeholder}/>
        <label for="Input"  className="Input_lable"></label>
        <label for="Input" className="Input_icon"><FaFlagUsa /></label>
      </div>
    </React.Fragment>
  )
}

export default Input