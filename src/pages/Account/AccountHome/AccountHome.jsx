/**
 * Account Home
 * @module 🔗:src/pages/Account/AccountHome/AccountHome.jsx
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description Account Home Page
 *
 */

import React, { useState, useEffect } from "react";
import { platform } from "../../../utils";
import { AccountHomeIProps } from "./typedefs";
import DesktopView from "./AccountHome.Desktop";
import MobileView from "./AccountHome.Mobile";
import { useCustom } from "../../../hooks";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { getFirebaseFirestore } from "../../../firebase";
import { useHistory } from "react-router-dom";

/**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {AccountHomeIProps} props
 * @returns
 */
const Account = (props) => {
	const {} = props;

	//? State
	const { status, user } = useCustom.auth();
	/** @type {any} */
	const [userData, setUserData] = useState();

	//? Variables
	const history = useHistory();

	//? Function
	const _handleGetUserData = async () => {
		const user_docRef = doc(getFirebaseFirestore, `users/${user?.uid}`);
		onSnapshot(
			user_docRef,
			(snap) => {
				setUserData(snap.data());
			},
			(err) => {
				// toast.push('Something went wrong!');
				window.alert("Something went wrong!");
				history.goBack();
			}
		);
	};
	//? Click Functions
	const handleEditProfile = () => {
		history.push("/account/edit-profile", { data: userData });
	};
	const handleManageAccount = () => {
		history.push("/account/manage", { data: userData });
	};
	const handleMembership = () => {};

	useEffect(() => {
		if (status) {
			_handleGetUserData();
		}
	}, [status]);

	//? Main Return
	return platform.isMobile ? (
		<MobileView
			data={userData}
			handleEditProfile={handleEditProfile}
			handleManageAccount={handleManageAccount}
			handleMembership={handleMembership}
		/>
	) : (
		<DesktopView />
	);
};

export default Account;
