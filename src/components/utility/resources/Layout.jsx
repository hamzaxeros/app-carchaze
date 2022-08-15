import React from "react";
import Home from "../../../pages/Home/Home";
// import AuthMobile from "../../../pages/Auth/AuthMobile";
// import AuthPhoneNumber from "../../../pages/Auth/PhoneNumberInput/PhoneNumberInputer";
// import Otp from "../../../pages/Auth/OTP/Otp";
import NameInput from "../../../pages/Auth/NamesInput/NameInput";
import { PublicRoutes } from "../../../routes";
import "./../../../assets/styles/base.scss";


const Layout = (props) => {
	return (
		<React.Fragment>
			{/* <AuthMobile /> */}
			{/* <AuthPhoneNumber/> */}
			{/* <Otp /> */}
			<NameInput />
			{/* <PublicRoutes /> */}
			{/* <Home></Home> */}

		</React.Fragment>
	);
};

export default Layout;
