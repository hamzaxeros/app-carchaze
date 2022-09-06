/**
 * ManageAccountMobile
 * @module 🔗:src/pages/ManageAccount/ManageAccount/ManageAccountMobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description ManageAccount - Mobile View
 *
 */

import React from "react";
import data from "./data.json";
import { Button } from "../../../components/public";

const ManageAccountMobile = (props) => {
	const { data: userData, handlePhoneChangeClick, handleCloseAccountClick, handleFacebookClick , handleEmailClick} = props;
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
			<section className="ManageAccount--section_1--container">
				<p className="global_style--itemSmallHeading">REACHABLE AT</p>
				<Button.BasicRowButton
					onClick={handlePhoneChangeClick}
					leftText="Change phone"
					rightText={`+${userData?.phone_number}`}
					rightTextColor="grey"
					lineBottom="with-margin"
					lineTop="full"
					arrow="none"
				/>
				<Button.BasicRowButton
					onClick={handleFacebookClick}
					leftText="Facebook"
					rightText={
						userData?.facebook?.status
							? "Connected"
							: "Not connected"
					}
					rightTextColor="grey"
					lineBottom="full"
				/>
				{/* <Button.BasicRowButton
					onClick={handleEmailClick}
					leftText="Email"
					rightText={userData?.email ? "Connected" : "Not connected"}
					rightTextColor="grey"
					lineBottom="full"
				/> */}
				{/* <p className="global_style--itemSmallHeading">
					PAYMENT METHODS
				</p>
				<Button.BasicRowButton
					leftText="Payment methods"
					lineBottom="with-margin"
					lineTop="full"
				/>
				<Button.BasicRowButton
					leftText="Payout methods"
					lineBottom="with-margin"
				/>
				<Button.BasicRowButton
					leftText="Travel credits"
					rightText="Rs. 3500"
					rightTextColor="grey"
					lineBottom="full"
				/> */}

				{/* <p className="global_style--itemSmallHeading">
					MOBILE NOTIFICATIONS
				</p>
				<Button.BasicRowButton
					leftText="Text messages notifications"
					lineBottom="with-margin"
					lineTop="full"
				/>
				<Button.BasicRowButton
					leftText="Push notifications"
					lineBottom="full"
				/> */}
				{/* <Button.TouchableButton
					onClick={handleCloseAccountClick}
					title="Close my account"
					theme="transparent"
					margin={"16px 16px 44px 16px"}
				/> */}
			</section>
		</React.Fragment>
	);
};

export default ManageAccountMobile;
