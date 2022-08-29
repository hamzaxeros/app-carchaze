/**
 * TripHome
 * @module 🔗:src/pages/Trips/TripHome/TripHome.jsx
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description TripHome Page
 * 
 */

 import React from "react";
 import { platform } from "../../../utils";
 import { TripHomeIProps } from "./typedefs";
 import DesktopView from "./TripHome.Desktop";
 import MobileView from "./TripHome.Mobile";


 /**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {TripHomeIProps} props
 * @returns
 */
const TripHome = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default TripHome;
