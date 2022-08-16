/**
 * NameInput
 * @module 🔗:src/pages/Auth/NamesInput/NameInput.js
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Authentication page getting user names according to cnic
 * 
 */

import React from "react";
import Button from "../../../components/public/resources/Button/Button";
import Input from "../../../components/public/resources/Input/Input";

const NameInput = (props) => {




  return (
      <div className="Auth__NameInput-outer">
        <div>
            <p className="Auth__NameInput-top_text">Please Provide complete name as presented on your CNIC</p>

            <div className="Auth__NameInput-first_name"><Input label={"First Name"}  placeholder={"Enter your first name"}/></div>
            <div className="Auth__NameInput-last_name"><Input label={"Last Name"} placeholder={"Enter your last name"}/></div>


            <p className="Auth__NameInput-small_text">After entering your "Name", You may not be able to change later</p>
        </div>

        <div className="Auth__NameInput-btn">
            <Button title={"continue"} />
        </div>
      </div>
  )
}

export default NameInput;