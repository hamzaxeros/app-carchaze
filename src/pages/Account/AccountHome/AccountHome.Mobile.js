/**
 * AccountHomeMobile
 * @module 🔗:src/pages/Account/AccountHome/AccountHome.Mobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description AccountHome - Mobile View
 *
 */

import React from "react";
import data from "./data.json";
import { Button } from "./../../../components/public";
import { useHistory } from "react-router-dom";
import ProfileName from "./component/ProfileName";
import { colors, typography } from "../../../theme";

const AccountMobile = (props) => {
	//? States
	/** @type {any} */
	const user = null;
	/** @type {any} */
	const userData = null;

	//? Refs

	//? Auto Runner

	//? Variables
	const history = useHistory();

	//? Functions

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			{/* ================== SECTION 01 =====================*/}
			<section className="account--section_1--container">
				<p className="screen_header">Your Account</p>
				{/* <Button.BasicRowButton
					// on={_handleProfilePress}
					minHeight={80}
					lineTop="full"
					lineBottom="with-margin"
					leftComponent={
						<ProfileName
							// @ts-ignore
							joinedDate={user?.metadata.creationTime}
							totalTrips={0}
							name={`${userData?.first_name} ${userData?.last_name}`}
							imgSrc={userData?.profile_photo}
						/>
					}
					contentContainerStyle={{ marginTop: 44 }}
				/> */}

				<Button.BasicRowButton
					leftText="How it works?"
					lineTop="full"
				/>
				<Button.BasicRowButton
					leftText="Contact support"
					lineTop="with-margin"
				/>
				<Button.BasicRowButton
					leftText="Legal"
					lineBottom="full"
					lineTop="with-margin"
				/>
			</section>
		</React.Fragment>
	);
};

export default AccountMobile;
