/**
 * LoginMobile
 * @module 🔗:src/pages/Messages/Login/LoginMobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description Login - Mobile View
 *
 */

import React, { useState } from "react";
import data from "./data.json";
import { Link, useHistory } from "react-router-dom";
import { Input, Button } from "./../../../components/public";
import PhoneInput from "react-phone-input-2";
import { ccAuth } from "./../../../api";
import { loader } from "../../../utils";

const LoginMobile = (props) => {
	//? States
	const [number, setNumber] = useState();

	//? Refs

	//? Auto Runner

	//? Variables
	const history = useHistory();
	const isFromTransferScreen = false;
	// const isFromTransferScreen =
	//   props?.route?.name === '/account/phone/change/number';

	//? Functions
	const _handleContinue = async () => {
		loader.open();
		const response = await ccAuth.signWithPhoneNumber(`+${number}`);
		if (response?.status === "pending") {
			history.push(
				isFromTransferScreen
					? "/account/phone/change/verify"
					: "/auth/phone/verify",
				{
					number,
					type: isFromTransferScreen ? "transfer" : "auth",
				}
			);
		} else {
			window.alert("Error while sending an OTP code")
		}
		loader.close();
	};
	const _handleOnChange = (value) => {
		setNumber(value);
	};

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			<div className="login--outer">
				<div>
					<p className="login--top_text">
						Please Provide phone number registered in your name to
						connect you about trip and to connect host with driver
					</p>
					<div className="login--input_number">
						<PhoneInput
							country={"pk"}
							value={number}
							onChange={_handleOnChange}
						/>
					</div>
					<p className="login--small_text opacity-6 mt-16">
						By entering your phone number may receive an SMS for
						verification, Message and data rate may apply.
					</p>
				</div>

				<div className="login--footer">
					<p><span className="login--Agree_text">
						Tap "Agree & continue" to accept the CarChaze{" "}
					</span>
					<span>
						<Link to="#">Terms of Services & Privacy policy</Link>
					</span></p>
					<Button.TouchableButton
						onClick={_handleContinue}
						title="Agree & Continue"
						margin={"16px 0 44px 0"}
					/>
				</div>
				{/* </div> */}
			</div>
		</React.Fragment>
	);
};

export default LoginMobile;
