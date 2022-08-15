/**
 * Home
 * @module 🔗:src/pages/Home/Home.jsx
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Home Page - Static site
 *
 */

import React, { useEffect } from "react";
import { platform } from "../../utils";
import { HomeIProps } from "./typedefs";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

/**
 * @function
 * @version 0.2.0
 * @param {HomeIProps} props
 * @returns
 */
const Home = (props) => {
	const {} = props;
	

	//? Main Return
	return platform.isMobile ? <HomeMobile /> : <HomeDesktop />;
};

export default Home;
