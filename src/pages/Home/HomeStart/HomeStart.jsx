/**
 * HomeStart
 * @module 🔗:src/pages/Home/HomeStart/HomeStart.jsx
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Home Start Page - Static site
 *
 */

import React from "react";
import { platform } from "../../../utils";
import { HomeStartIProps } from "./typedefs";
import DesktopView from "./HomeStart.Desktop";
import MobileView from "./HomeStart.Mobile";

/**
 * @function
 * @version 0.2.0
 * @param {HomeStartIProps} props
 * @returns
 */
const Home = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default Home;
