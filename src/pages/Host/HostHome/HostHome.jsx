/**
 * Host
 * @module 🔗:src/pages/Host/HostHome/HostHome.jsx
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Page
 * 
 */

 import React, { useEffect } from "react";
 import { platform } from "../../../utils";
 import { HostHomeIProps } from "./typedefs";
 import DesktopView from "./HostHome.Desktop";
 import MobileView from "./HostHome.Mobile";
 


 /**
 * @function
 * @version 0.2.0
 * @param {HostHomeIProps} props
 * @returns
 */
const Host = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default Host;
