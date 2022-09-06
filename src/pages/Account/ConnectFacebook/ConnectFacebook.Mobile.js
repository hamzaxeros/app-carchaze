/**
 * ConnectFacebookMobile
 * @module 🔗:src/pages/ConnectFacebook/ConnectFacebook/ConnectFacebookMobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description ConnectFacebook - Mobile View
 *
 */

import React from "react";
import data from "./data.json";
import { BsFacebook } from "react-icons/bs";
import FacebookLogin from "react-facebook-login";
import { FACEBOOK_API_KEY } from "./../../../constants";

import { Button } from "./../../../components/public";

const ConnectFacebookMobile = (props) => {
	const { data: userData, handleFacebookConnectResponse } = props;
	//? States

	//? Refs

	//? Auto Runner

	//? Variables
	const facebookButtonContainerStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	const facebookButtonStyle = {
		width: "calc(100% - 32px)",
		backgroundColor: "transparent",
		margin: "44px auto",
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		border: "1px solid black",
		color: "black",
		fontSize: 17,
		fontFamily: "text-r",
		cursor: "pointer",
		height:50,
	};

	//? Functions

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			{/* ================== SECTION 01 =====================*/}
			<section className="account--connect_account--container">
				<div>
					<p className="account--connect_account--text">
						Connect your Facebook account to see mutual friends,
						built trust, automatically update your profile photo and
						more
					</p>
					<Button.BasicRowButton
						lineBottom="full"
						lineTop="full"
						leftText={"Facebook"}
						rightText={"Not connected"}
						rightTextColor={"grey"}
						arrow="none"
					/>
				</div>
				<div className="account--connect_facebook--connect_facebook_button">
					<FacebookLogin
						containerStyle={facebookButtonContainerStyle}
						buttonStyle={facebookButtonStyle}
						textButton="Connect with Facebook"
						icon={<BsFacebook />}
						appId={FACEBOOK_API_KEY}
						fields="name,email,picture"
						scope="public_profile, email, user_birthday"
						callback={handleFacebookConnectResponse}
					/>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ConnectFacebookMobile;
