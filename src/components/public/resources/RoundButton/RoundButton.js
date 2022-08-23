/**
 * CircleButton
 * @module 🔗:src/components/public/resources/CircleButton/CircleButton.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Circular Button for input
 * 
 */

import React from "react"

const RoundButton = (props) => {


  return (
    <React.Fragment>
      <div className="RoundButton-outer">
      <label class="RoundButton-switch">
        <input type="checkbox" checked />
        <span class="RoundButton-slider RoundButton-round"></span>
      </label>
      </div>
    </React.Fragment>
  )
}

export default RoundButton;