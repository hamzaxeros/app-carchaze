/**
 * Verify
 * @module 🔗:src/pages/Auth/Verify/Verify.jsx
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description Verify Page
 * 
 */

 import React from "react";
 import { platform } from "../../../utils";
 import { VerifyIProps } from "./typedefs";
 import DesktopView from "./Verify.Desktop";
 import MobileView from "./Verify.Mobile";


 /**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {VerifyIProps} props
 * @returns
 */
const Verify = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default Verify;
