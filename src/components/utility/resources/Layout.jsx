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
import AddVehicle from "../../../pages/Host/Listing/Basic/AddVehicle/AddVehicle";
import IdentifyVehicle from "../../../pages/Host/Listing/Basic/IdentifyVehicle/IdentifyVehicle";
import AddAddress from "../../../pages/Host/Listing/Location/AddAddress/AddAddress";
import ExactLocation from "../../../pages/Host/Listing/Location/ExactLocation/ExactLocation";
import SearchAddAddress from "../../../pages/Host/Listing/Location/SearchAddAddress/SearchAddAddress";
import Eligible from "../../../pages/Host/Listing/Eligibility/Eligible/Eligible";
import NotEligible from "../../../pages/Host/Listing/Eligibility/NotEligilble/NotEligible";
import FeaturesGrid from "../../../pages/Host/Listing/Features/FeaturesGrid/FeaturesGrid";
import FeaturesList from "../../../pages/Host/Listing/Features/FeaturesList/FeaturesList";
import AddNewFeatures from "../../../pages/Host/Listing/Features/AddNewFeature/AddNewFeatures";
import DeleteCustomFeature from "../../../pages/Host/Listing/Features/DeleteCustomFeature/DeleteCustomFeature";
import ListingPhotos from "../../../pages/Host/Listing/Photos/ListingPhotos";

import { PublicRoutes } from "../../../routes";


import "./../../../assets/styles/base.scss";


const Layout = (props) => {
	return (
		<React.Fragment>
			
			<ListingPhotos />
			{/* <DeleteCustomFeature /> */}
			{/* <AddNewFeatures /> */}
			{/* <FeaturesList /> */}
			{/* <NotEligible /> */}
			{/* <Eligible /> */}
			{/* <ExactLocation /> */}
			{/* <AddAddress /> */}
			{/* <SearchAddAddress /> */}
			{/* <IdentifyVehicle /> */}
			{/* <AddVehicle /> */}
			{/* <ChangeNumber /> */}
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
