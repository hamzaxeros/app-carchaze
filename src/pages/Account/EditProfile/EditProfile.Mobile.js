/**
 * EditProfileMobile
 * @module 🔗:src/pages/Messages/EditProfile/EditProfileMobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description EditProfile - Mobile View
 *
 */

import React, { useRef, useState } from "react";
import { Img } from "react-image";
import data from "./data.json";
import { Button, Input } from "./../../../components/public";

const EditProfileMobile = (props) => {
	const { data: userDataParam, handlePhotoEdit, handleSave } = props;
	const userData = useRef(userDataParam || {});

	//? Handle Functions
	const _handleInputChange = (e) => {
		userData.current = {
			...userData.current,
			[e.target.name]: e.target.value,
		};
	};

	const _handleSave = () => {
		handleSave(userData.current);
	};

	//? Return
	return (
		<React.Fragment>
			<section className="account--edit_profile--section_1_photo">
				<div
					onClick={handlePhotoEdit}
					className="account--edit_profile--photo_view"
				>
					<Img
						className="account--edit_profile--photo"
						src={userData?.current?.profile_photo || ""}
					/>
				</div>
			</section>
			<section>
				<Input
					placeholder="First name"
					options={{ ml_b_border: true, cml_t_border: 0.01 }}
					defaultValue={userData?.current?.first_name}
					name="first_name"
					onChange={_handleInputChange}
				/>
				<Input
					placeholder="Last name"
					options={{ cml_b_border: 0.01 }}
					defaultValue={userData?.current?.last_name}
					name="last_name"
					onChange={_handleInputChange}
				/>
			</section>
			<section>
				<Input
					placeholder="Tell users about yourself and why you're responsible and a trustworthy person. Share your driving experiences, your hobbies and your favorite car. Feel free to share your Linkedin, Twitter or Facebook profiles"
					defaultValue={userData?.current?.about}
					name="about"
					onChange={_handleInputChange}
					options={{
						mt_heading: true,
						cml_t_border: 0.1,
						cml_b_border: 0.1,
						heading: "ABOUT ME",
						dimHeading: true,
						mb_heading: true,
						ml_heading: true,
						multiline: true,
					}}
				/>
			</section>
			<section>
				<Input
					placeholder="District / City"
					defaultValue={userData?.current?.address}
					name="address"
					onChange={_handleInputChange}
					options={{
						leftTitle: "Lives at",
						cml_t_border: 0.1,
						ml_b_border: true,
						heading: "ADDITIONAL INFO",
						dimHeading: true,
						mb_heading: true,
						ml_heading: true,
						mt_heading: true,
						leftTitleFontSize: 11,
						leftTitleWidth: 65,
					}}
				/>
				<Input
					placeholder="CarChaze / Zong / FBR"
					name="work_at"
					onChange={_handleInputChange}
					options={{
						leftTitle: "Works at",
						ml_b_border: true,
						leftTitleFontSize: 11,
						leftTitleWidth: 65,
					}}
					defaultValue={userData?.current?.work_at}
				/>
				<Input
					defaultValue={userData?.current?.institute}
					placeholder="College / University"
					name="institute"
					onChange={_handleInputChange}
					options={{
						leftTitle: "School",
						ml_b_border: true,
						leftTitleFontSize: 11,
						leftTitleWidth: 65,
					}}
				/>
				<Input
					defaultValue={userData?.current?.language}
					name="language"
					placeholder="English / Urdu / Pashto"
					onChange={_handleInputChange}
					options={{
						leftTitle: "Languages",
						cml_b_border: 0.1,
						leftTitleFontSize: 11,
						leftTitleWidth: 65,
						cmb_input_view: 44,
					}}
				/>
			</section>
			<Button.TouchableButton
				title="Save"
				onClick={_handleSave}
				theme="outlined"
				margin={"0 16px 44px 16px"}
			/>
		</React.Fragment>
	);
};

export default EditProfileMobile;
