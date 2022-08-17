import React from "react";
// import Home from "../../../pages/Home/Home";

// ================ Import Components ====================
import AccountList from "../../public/resources/List/List";
import ListWithIcons from "../../public/resources/ListWithIcons/ListWithIcons";

// ================ Import Pages ==========================
// import AuthMobile from "../../../pages/Auth/AuthMobile";
import AuthPhoneNumber from "../../../pages/Auth/PhoneNumberInput/PhoneNumberInputer";
import Otp from "../../../pages/Auth/OTP/Otp";
import NameInput from "../../../pages/Auth/NamesInput/NameInput";
import AccountManager from "../../../pages/Account/AccountManager/AccountManager";
import Account from "../../../pages/Account/Account/Account";
import Profile from "../../../pages/Account/Profile/Profile";
import ChangeNumber from "../../../pages/Account/ChangeNumber/ChangeNumber";
import Facebook from "../../../pages/Account/Facebook/Facebook";
import Membership from "../../../pages/Account/Membership/Membership";
import DrivingLicense from "../../../pages/Account/DrivingLicense/DrivingLicense";
import TakeSelfie from "../../../pages/Account/TakSelfie/TakeSelfie";

import { PublicRoutes } from "../../../routes";


import "./../../../assets/styles/base.scss";


const Layout = (props) => {
	return (
		<React.Fragment>
			
			<ChangeNumber />
			{/* <DrivingLicense /> */}
			{/* <Facebook />	 */}
			{/* <TakeSelfie /> */}
			{/* <Membership /> */}
			{/* <ListWithIcons /> */}
			{/* <Profile /> */}
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
