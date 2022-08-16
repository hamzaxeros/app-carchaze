/**
 * Button
 * @module 🔗:src/components/public/resources/Button/Button.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Buttons for Carchaze Authentication
 * 
 */

import React from "react"

/**
 * 
 * @param {style} style - Css Style 
 * @param {title} title - Title for Button text 
 */
const Button = (props) => {

  return (
    <React.Fragment>
      <button className="Button" style={props.style}>{props.title}</button>
    </React.Fragment>
  )
}

export default Button