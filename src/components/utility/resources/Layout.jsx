import React from "react";
import Home from "../../../pages/Home/Home";
// import AuthMobile from "../../../pages/Auth/AuthMobile";
import AuthPhoneNumber from "../../../pages/Auth/PhoneNumberInput/PhoneNumberInputer";
import Otp from "../../../pages/Auth/OTP/Otp";
import NameInput from "../../../pages/Auth/NamesInput/NameInput";
import AccountList from "../../public/resources/List/List";
import AccountManager from "../../../pages/Account/AccountManager/AccountManager";
import Account from "../../../pages/Account/Account/Account";
import Profile from "../../../pages/Account/Profile/Profile";
import { PublicRoutes } from "../../../routes";
import "./../../../assets/styles/base.scss";


const Layout = (props) => {
	return (
		<React.Fragment>

			<Profile />
			{/* <AccountManager /> */}
			{/* <Account/> */}
			{/* <AuthMobile /> */}
			{/* <AuthPhoneNumber/> */}
			{/* <Otp /> */}
			{/* <AccountList leftText={"Manage Account"} rightText={"+923487166954"} leftArrow={true} /> */}
			{/* <NameInput /> */}
			{/* <PublicRoutes /> */}
			{/* <Home></Home> */}

		</React.Fragment>
	);
};

export default Layout;
