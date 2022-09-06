/**
 * AccountHomeMobile
 * @module 🔗:src/pages/Account/AccountHome/AccountHome.Mobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description AccountHome - Mobile View
 *
 */

import React from "react";
import data from "./data.json";
import { Button } from "./../../../components/public";
import ProfileName from "./component/ProfileName";
import { useCustom } from "../../../hooks";

const AccountMobile = (props) => {
	//? States

	//? Refs

	//? Auto Runner

	//? Variables
	const { user } = useCustom.auth();
	const {
		data: userData,
		handleEditProfile,
		handleManageAccount,
		handleMembership,
	} = props;

	//? Functions

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			{/* ================== SECTION 01 =====================*/}
			<section className="account--section_1--container">
				<p className="screen_header">Your Account</p>
				<Button.BasicRowButton
					onClick={handleEditProfile}
					minHeight={80}
					lineTop="full"
					lineBottom="full"
					leftComponent={
						<ProfileName
							// @ts-ignore
							joinedDate={user?.metadata.creationTime}
							totalTrips={0}
							name={
								userData?.first_name || userData?.last_name
									? `${userData?.first_name || ""} ${
											userData?.last_name || ""
									  }`
									: "Profile name"
							}
							imgSrc={userData?.profile_photo}
						/>
					}
					contentContainerStyle={{ margin: "44px 0" }}
				/>

				<Button.BasicRowButton
					leftText="Manage Account"
					lineTop="full"
					onClick={handleManageAccount}
				/>
				<Button.BasicRowButton
					leftText="Membership"
					onClick={handleMembership}
					lineBottom="full"
					lineTop="with-margin"
					contentContainerStyle={{ marginBottom: 44 }}
				/>

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
