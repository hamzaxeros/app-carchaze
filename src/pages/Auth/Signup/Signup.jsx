/**
 * Signup
 * @module 🔗:src/pages/Auth/Signup/Signup.jsx
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description Signup Page
 * 
 */

 import React from "react";
 import { platform } from "../../../utils";
 import { SignupIProps } from "./typedefs";
 import DesktopView from "./Signup.Desktop";
 import MobileView from "./Signup.Mobile";


 /**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {SignupIProps} props
 * @returns
 */
const Signup = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default Signup;
