/**
 * ConnectFacebook
 * @module 🔗:src/pages/ConnectFacebook/ConnectFacebook/ConnectFacebook.jsx
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description ConnectFacebook Page
 *
 */

import React from "react";
import { platform } from "../../../utils";
import { ConnectFacebookIProps } from "./typedefs";
import DesktopView from "./ConnectFacebook.Desktop";
import MobileView from "./ConnectFacebook.Mobile";


/**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {ConnectFacebookIProps} props
 * @returns
 */
const ConnectFacebook = (props) => {
	const {} = props;

	//? Click Functions
	const handleFacebookConnectResponse = (res) => {};

	//? Main Return
	return platform.isMobile ? (
		<MobileView handleFacebookConnectResponse={handleFacebookConnectResponse} />
	) : (
		<DesktopView />
	);
};

export default ConnectFacebook;
