/**
 * Account Home
 * @module 🔗:src/pages/Account/AccountHome/AccountHome.jsx
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description Account Home Page
 * 
 */

 import React from "react";
 import { platform } from "../../../utils";
 import { AccountHomeIProps } from "./typedefs";
 import DesktopView from "./AccountHome.Desktop";
 import MobileView from "./AccountHome.Mobile";


 /**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {AccountHomeIProps} props
 * @returns
 */
const Account = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default Account;
