/**
 * ManageAccount
 * @module 🔗:src/pages/ManageAccount/ManageAccount/ManageAccount.jsx
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description ManageAccount Page
 *
 */

import React, { useState } from "react";
import { platform } from "../../../utils";
import { ManageAccountIProps } from "./typedefs";
import DesktopView from "./ManageAccount.Desktop";
import MobileView from "./ManageAccount.Mobile";
import { useHistory, useLocation } from "react-router-dom";

/**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {ManageAccountIProps} props
 * @returns
 */
const ManageAccount = (props) => {
	const {} = props;

	const location = useLocation();
	const history = useHistory();

	// @ts-ignore
	const userDataParams = location.state?.data;
	const [userData, setUserData] = useState(userDataParams);

	//? Click Functions
	const handlePhoneChangeClick = () => {};
	const handleCloseAccountClick = () => {};
	const handleFacebookClick = () => {
		history.push("/account/manage/connect-facebook", { data: userData });
	};
	const handleEmailClick = () => {};

	//? Main Return
	return platform.isMobile ? (
		<MobileView
			data={userData}
			handlePhoneChangeClick={handlePhoneChangeClick}
			handleCloseAccountClick={handleCloseAccountClick}
			handleFacebookClick={handleFacebookClick}
			handleEmailClick={handleEmailClick}
		/>
	) : (
		<DesktopView />
	);
};

export default ManageAccount;
