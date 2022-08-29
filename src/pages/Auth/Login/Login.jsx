/**
 * Login
 * @module 🔗:src/pages/Auth/Login/Login.jsx
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description Login Page
 * 
 */

 import React from "react";
 import { platform } from "../../../utils";
 import { LoginIProps } from "./typedefs";
 import DesktopView from "./Login.Desktop";
 import MobileView from "./Login.Mobile";

 /**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {LoginIProps} props
 * @returns
 */
const Login = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default Login;
