/**
 * VerifyMobile
 * @module 🔗:src/pages/Messages/Verify/VerifyMobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version app.carchaze.com@0.1.0
 * @description Verify - Mobile View
 *
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import data from "./data.json";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Button, Input } from "../../../components/public";
import { loader, dataTime } from "./../../../utils";
import { ccAuth } from "../../../api";
import { OTP_TIME_LIMIT } from "./../../../constants";

const VerifyMobile = (props) => {
	//? States
	const [code, setCode] = useState("");
	const [smsCodeTimeout, setSmsCodeTimeout] = useState(OTP_TIME_LIMIT);
	const [callCodeTimeout, setCallCodeTimeout] = useState(0);

	//? Refs
	/** @type {any} */
	let smsInterval = useRef();
	/** @type {any} */
	let callInterval = useRef();

	//? Auto Runner

	//? Variables
	const history = useHistory();
	/** @type {any} */
	const location = useLocation();
	const number = location?.state?.number;
	const type = location?.state?.type;

	//? Functions
	const _handleOnCodeFill = async () => {
		loader.open();
		// const deviceId = await getUniqueId();
		const response = await ccAuth.verifyPhoneOtpAndAuthenticate(
			`+${number}`,
			code,
			Math. floor(Math. random()*9000000) + 1000000+'', // TODO: Replace this line with Device ID or QR Code
			type
		);
		if (response?.user) {
			history.push("/search");
			console.log(response.user);

			// if (type === "auth" && response?.additionalUserInfo?.isNewUser) {
			// 	history.push("/new-user");
			// } else {
			// 	if (type === "transfer") {
			// 		//TODO: Change the back move - While in changing phone number page
			// 		// props.navigation.pop(4)
			// 	} else {
			// 		history.push("/home");
			// 	}
			// }
		} else {
			setCode("");
		}
		loader.close();
	};

	const _handleCodeChange = (e) => {
		const val = e.target.value;
		setCode(val);
	};
	const _handleResendSms = useCallback(
		async (/** @type {boolean} */ disableOtp) => {
			if (smsCodeTimeout === 0) {
				if (!!disableOtp) {
					loader.open();
					const response = await ccAuth.signWithPhoneNumber(
						`+${number}`,
						"sms"
					);
					loader.close();

					if (response?.status === "pending") {
						// toast.push('We have sent a new code to your phone number');
						window.alert(
							"We have sent a new code to your phone number"
						);
						setSmsCodeTimeout(OTP_TIME_LIMIT);
						smsInterval.current = setInterval(() => {
							setSmsCodeTimeout((ps) => ps - 1);
						}, 1000);
					} else {
						window.alert(
							"We are unable to sent OTP to your phone number! Try later."
						);
						// toast.push(
						//   'We are unable to sent OTP to your phone number! Try later.',
						// );
					}
				}
			} else if (disableOtp) {
				if (smsCodeTimeout === 0) setSmsCodeTimeout(OTP_TIME_LIMIT);
				smsInterval.current = setInterval(() => {
					setSmsCodeTimeout((ps) => ps - 1);
				}, 1000);
			}
		},
		[smsCodeTimeout]
	);
	const _handleResendCall = useCallback(async () => {
		if (callCodeTimeout === 0) {
			loader.open();
			const response = await ccAuth.signWithPhoneNumber(
				`+${number}`,
				"call"
			);
			loader.close();
			if (response?.status === "pending") {
				// toast.push('We have sent a new code to your phone number');
				window.alert("We have sent a new code to your phone number");
				setCallCodeTimeout(OTP_TIME_LIMIT);
				callInterval.current = setInterval(() => {
					setCallCodeTimeout((ps) => ps - 1);
				}, 1000);
			} else {
				window.alert(
					"We are unable to sent OTP to your phone number! Try later."
				);
				// toast.push(
				//   'We are unable to sent OTP to your phone number! Try later.',
				// );
			}
		}
	}, [callCodeTimeout]);

	//? Life Cycle
	useEffect(() => {
		if (code && code?.length >= 4) {
			_handleOnCodeFill();
		}
	}, [code]);
	useEffect(() => {
		if (smsCodeTimeout === 0) {
			clearInterval(smsInterval.current);
		}
		if (callCodeTimeout === 0) {
			clearInterval(callInterval.current);
		}
	}, [smsCodeTimeout, callCodeTimeout]);
	useEffect(() => {
		_handleResendSms(true);
	}, []);

	//? Main Return
	return (
		<React.Fragment>
			<div className="auth--verify--outer">
				<p className="auth--verify--top_text">
					<span>Please enter 4 digit code sent to </span>
					<b>+{number}</b>
				</p>

				<Input
					placeholder="OTP code"
					options={{
						cml_t_border: 1,
						cml_b_border: 1,
					}}
					value={code}
					onChange={_handleCodeChange}
				/>

				<Button.TouchableButton
					theme="transparent"
					marginT={16}
					onClick={() => _handleResendSms(false)}
					disabled={smsCodeTimeout !== 0}
					title={`Resend code ${dataTime.secondsToMs(
						smsCodeTimeout
					)}`}
				/>
				<Button.TouchableButton
					theme="transparent"
					onClick={_handleResendCall}
					disabled={callCodeTimeout !== 0}
					title={`Call me ${dataTime.secondsToMs(callCodeTimeout)}`}
				/>
			</div>
		</React.Fragment>
	);
};

export default VerifyMobile;
