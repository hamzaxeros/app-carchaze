/**
 * EditPhotoMobile
 * @module 🔗:src/pages/Account/EditPhoto/EditPhotoMobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description EditPhoto - Mobile View
 *
 */

import React from "react";
import { Img } from "react-image";
import data from "./data.json";
import { Button } from "./../../../components/public";

const EditPhotoMobile = (props) => {
	const { photo, handleEditPhotoClick, handleAddNewClick } = props;
	//? States

	//? Refs

	//? Auto Runner

	//? Variables

	//? Functions

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			{/* ================== SECTION 01 =====================*/}
			<div className="account--edit_photo--container">
				<p className="account--edit_photo--topText global_style--marginH global_style--marginT16 global_style--marginB16">
					Please provide a clear photo of your face so users can
					recognize you at pickup
				</p>

				<div className="account--edit_photo--imageContainerStyle">
					{photo ? (
						<Img
							className="account--edit_photo--imageStyle"
							src={photo}
							onClick={handleEditPhotoClick}
						/>
					) : (
						<i className="account--edit_photo--iconStyle lar la-user-circle"></i>
					)}
				</div>

				<Button.TouchableButton
					title="Add new"
					margin={"44px 16px"}
					onClick={handleAddNewClick}
				/>
			</div>
		</React.Fragment>
	);
};

export default EditPhotoMobile;
