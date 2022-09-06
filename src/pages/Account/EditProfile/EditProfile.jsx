/**
 * EditProfile
 * @module 🔗:src/pages/Auth/EditProfile/EditProfile.jsx
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description EditProfile Page
 *
 */

import React, { useState } from "react";
import { loader, platform } from "../../../utils";
import { EditProfileIProps } from "./typedefs";
import DesktopView from "./EditProfile.Desktop";
import MobileView from "./EditProfile.Mobile";
import { useCustom } from "./../../../hooks";
import { useHistory, useLocation } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { getFirebaseFirestore } from "../../../firebase";

/**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {EditProfileIProps} props
 * @returns
 */
const EditProfile = (props) => {
	const {} = props;

	const location = useLocation();
	const history = useHistory();
	const { user } = useCustom.auth();

	// @ts-ignore
	const userDataParam = location?.state?.data || {};

	//? Click Function
	const handlePhotoEdit = () => {
		history.push("/account/edit-profile/photo",{photo:userDataParam?.profile_photo})
	};
	const handleSave = async (data) => {
		const docRef = doc(getFirebaseFirestore, `users/${user?.uid}`);
		try {
			loader.open();
			await updateDoc(docRef, {
				...data,
			});
			history.goBack();
		} catch (err) {
			// toast.push('Something went wrong!');
			alert("Something went wrong!");
		} finally {
			loader.close();
		}
	};

	//? Main Return
	return platform.isMobile ? (
		<MobileView
			data={userDataParam}
			handlePhotoEdit={handlePhotoEdit}
			handleSave={handleSave}
		/>
	) : (
		<DesktopView />
	);
};

export default EditProfile;
