import React from "react";
// import Home from "../../../pages/Home/Home";

// ================ Import Components ====================
import AccountList from "../../public/resources/List/List";
import ListWithIcons from "../../public/resources/ListWithIcons/ListWithIcons";

// ================ Import Pages ==========================
// import AuthMobile from "../../../pages/Auth/AuthMobile";

// Authentication Pages
import AuthPhoneNumber from "../../../pages/Auth/PhoneNumberInput/PhoneNumberInputer";
import Otp from "../../../pages/Auth/OTP/Otp";
import NameInput from "../../../pages/Auth/NamesInput/NameInput";

// Account Pages
import AccountManager from "../../../pages/Account/AccountManager/AccountManager";
import Account from "../../../pages/Account/Account/Account";
import Profile from "../../../pages/Account/Profile/Profile";
import ChangeNumber from "../../../pages/Account/ChangeNumber/ChangeNumber";
import DrivingLicense from "../../../pages/Account/DrivingLicense/DrivingLicense";
import TakeSelfie from "../../../pages/Account/TakSelfie/TakeSelfie";
import Membership from "../../../pages/Account/Membership/Membership";
import Facebook from "../../../pages/Account/Facebook/Facebook";

// Hosting Basic Pages
import AddVehicle from "../../../pages/Host/Listing/Basic/AddVehicle/AddVehicle";
import IdentifyVehicle from "../../../pages/Host/Listing/Basic/IdentifyVehicle/IdentifyVehicle";

// Hosting Location Pages
import AddAddress from "../../../pages/Host/Listing/Location/AddAddress/AddAddress";
import ExactLocation from "../../../pages/Host/Listing/Location/ExactLocation/ExactLocation";
import SearchAddAddress from "../../../pages/Host/Listing/Location/SearchAddAddress/SearchAddAddress";

// Hosting Eligible Pages
import Eligible from "../../../pages/Host/Listing/Eligibility/Eligible/Eligible";
import NotEligible from "../../../pages/Host/Listing/Eligibility/NotEligilble/NotEligible";

// Hosting Features Pages
import FeaturesGrid from "../../../pages/Host/Listing/Features/FeaturesGrid/FeaturesGrid";
import FeaturesList from "../../../pages/Host/Listing/Features/FeaturesList/FeaturesList";
import AddNewFeatures from "../../../pages/Host/Listing/Features/AddNewFeature/AddNewFeatures";
import DeleteCustomFeature from "../../../pages/Host/Listing/Features/DeleteCustomFeature/DeleteCustomFeature";

// Hosting Photos Pages
import AddVehiclePhoto from "../../../pages/Host/Listing/Photos/AddVehiclePhoto/AddVehiclePhoto";
import VehicleRegisterPhoto from "../../../pages/Host/Listing/Photos/VehicleRegisterPhoto/VehicleRegisterPhoto";

// Hosting Finish Pages
import FinishDescription from "../../../pages/Host/Listing/Finish/FinishDescription/FinishDescription";	
import FinishStandards from "../../../pages/Host/Listing/Finish/FinishStandards/FinishStandards";
import FinishInReview from "../../../pages/Host/Listing/Finish/FinishInReview/FinishInReview";




import { PublicRoutes } from "../../../routes";


import "./../../../assets/styles/base.scss";


const Layout = (props) => {
	return (
		<React.Fragment>
			

			<FinishInReview />
			{/* <FinishStandards /> */}
			{/* <FinishDescription /> */}
			{/* <VehicleRegisterPhoto /> */}
			{/* <AddVehiclePhoto /> */}
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
