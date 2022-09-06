import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { platform } from "../utils";
import { CARCHAZE_WEB_SITE_URL } from "./../constants";

import { Home, Host, Messages, Account, Trips } from "./../pages";

const AuthenticatedMobileRoutes = () => {
	return (
		<Switch>
			<Route exact path="/search" component={Home.HomeStart} />
			<Route exact path="/host" component={Host.HostHome} />
			<Route exact path="/messages" component={Messages.Chat} />
			<Route exact path="/trips" component={Trips.TripHome} />
			{/* ========== Account Routes ========== */}
			<Route exact path="/account" component={Account.AccountHome} />
			<Route exact path="/account/edit-profile" component={Account.EditProfile} />
			<Route exact path="/account/edit-profile/photo" component={Account.EditPhoto} />
			<Route exact path="/account/manage" component={Account.ManageAccount} />
			<Route exact path="/account/manage/connect-facebook" component={Account.ConnectFacebook} />

			<Redirect to={"/search"} />
		</Switch>
	);
};
const AuthenticatedDesktopRoutes = () => {
	useEffect(() => {
		window.location.href = CARCHAZE_WEB_SITE_URL;
	});
	return (
		<Switch>
			<></>
		</Switch>
	);
};

const AuthenticatedRoutes = () => {
	return platform.isMobile ? <AuthenticatedMobileRoutes /> : <AuthenticatedDesktopRoutes />;
};
export default AuthenticatedRoutes;
