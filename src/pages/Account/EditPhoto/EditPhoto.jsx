/**
 * EditPhoto
 * @module 🔗:src/pages/Account/EditPhoto/EditPhoto.jsx
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description EditPhoto Page
 *
 */

import React, { useState } from "react";
import { platform } from "../../../utils";
import { EditPhotoIProps } from "./typedefs";
import DesktopView from "./EditPhoto.Desktop";
import MobileView from "./EditPhoto.Mobile";
import { useHistory, useLocation } from "react-router-dom";

/**
 * @function
 * @version app.carchaze.com@0.1.0
 * @param {EditPhotoIProps} props
 * @returns
 */
const EditPhoto = (props) => {
	const {} = props;

	const location = useLocation();
	const history = useHistory();

	// @ts-ignore
	const photoParam = location.state?.photo;

	const [photo, setPhoto] = useState(photoParam);

	const handleEditPhotoClick = () => {};
	const handleAddNewClick = () => {};
	//? Main Return
	return platform.isMobile ? (
		<MobileView
			photo={photo}
			handleEditPhotoClick={handleEditPhotoClick}
			handleAddNewClick={handleAddNewClick}
		/>
	) : (
		<DesktopView />
	);
};

export default EditPhoto;
