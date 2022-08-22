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

// Hosting Manager
import InReviewListing from "../../../pages/Host/Manager/Basic/InReviewListing/InReviewListing";
import VehicleDetails from "../../../pages/Host/Manager/Basic/VehicleDetails/VehicleDetails";
import VehiclePhotos from "../../../pages/Host/Manager/Basic/VehiclePhotos/VehiclePhotos";
import YourVehicle from "../../../pages/Host/Manager/Basic/YourVehicle/YourVehicle";


// Host Manager Basic Details
import DailyPrice from "../../../pages/Host/Manager/Basic/DailyPrice/DailyPrice";
import Discount from "../../../pages/Host/Manager/Basic/Discount/Discount";
import HostPricing from "../../../pages/Host/Manager/Basic/HostPricing/HostPricing";
import DefaultPrice from "../../../pages/Host/Manager/Basic/DefaultPrice/DefaultPrice";
import CustomisePrice from "../../../pages/Host/Manager/Basic/CustomisePrice/CustomisePrice";
import DailyDistance from "../../../pages/Host/Manager/Basic/DailyDistance/DailyDistance";

// Host Manager Locations
import HostAddLocation from "../../../pages/Host/Manager/Location/AddLocation/HostAddLocation";
import HostDeliveryLocation from "../../../pages/Host/Manager/Location/DeliveryLocation/HostDeliveryLocation";
import HostDeliveryZone from "../../../pages/Host/Manager/Location/DeliveryZone/HostDeliveryZone";
import HostExactLocation from "../../../pages/Host/Manager/Location/ExactLocation/HostExactLocation";
import PickReturnLocation from "../../../pages/Host/Manager/Location/PickReturnLocation/PickReturnLocation";
import HostVehicleLocation from "../../../pages/Host/Manager/Location/VehicleLocation/HostVehicleLocation";


// Host Manager Basic Requests & Responses
import PayDues from "../../../pages/Host/Manager/Basic/Requests/PayDues/PayDues";
import TripBooked from "../../../pages/Host/Manager/Basic/Requests/TripBooked/TripBooked";
import TripPending from "../../../pages/Host/Manager/Basic/Requests/TripPending/TripPending";

// Host Manager Transactions
import HostTransaction from "../../../pages/Host/Manager/Basic/Transactions/HostTransaction";

// Host Manager Reviews
import HostReviews from "../../../pages/Host/Manager/Basic/Reviews/HostReviews";

// Host Trip Setting
import HostTripSetting from "../../../pages/Host/Manager/Basic/TripSetting/HostTripSetting";
import HostVehicleProtection from "../../../pages/Host/Manager/Basic/VehicleProtection/HostVehicleProtection";
import HostSelectPlan from "../../../pages/Host/Manager/Basic/SelectPlan/HostSelectPlan";




import { PublicRoutes } from "../../../routes";


import "./../../../assets/styles/base.scss";


const Layout = (props) => {
	return (
		<React.Fragment>
			
			<HostSelectPlan />
			{/* <HostVehicleProtection /> */}
			{/* <HostTripSetting /> */}
			{/* <HostReviews /> */}
			{/* <HostTransaction /> */}
			{/* <PayDues /> */}
			{/* <TripPending /> */}
			{/* <TripBooked /> */}
			{/* <HostDeliveryZone /> */}
			{/* <HostAddLocation /> */}
			{/* <HostExactLocation /> */}
			{/* <HostDeliveryLocation /> */}
			{/* <HostVehicleLocation /> */}
			{/* <HostAddLocation /> */}
			{/* <DailyDistance /> */}
			{/* <CustomisePrice /> */}
			{/* <DefaultPrice /> */}
			{/* <HostPricing /> */}
			{/* <Discount /> */}
			{/* <DailyPrice /> */}
			{/* <VehiclePhotos /> */}
			{/* <VehicleDetails /> */}
			{/* <YourVehicle /> */}
			{/* <InReviewListing/> */}
			{/* <FinishInReview /> */}
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
