import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { platform } from "../utils";
import { CARCHAZE_WEB_SITE_URL } from "./../constants";

import { Home, Host, Messages, Account, Auth, Trips } from "./../pages";

const PublicMobileRoutes = () => {
	return (
		<Switch>
			<Route exact path="/search" component={Home.HomeStart} />
			<Route exact path="/host" component={Host.HostHome} />
			<Route exact path="/messages" component={Messages.Chat} />
			<Route exact path="/account" component={Account.AccountHome} />
			<Route exact path="/trips" component={Trips.TripHome} />

			<Redirect to={"/search"} />
		</Switch>
	);
};
const PublicDesktopRoutes = () => {
	useEffect(() => {
		window.location.href = CARCHAZE_WEB_SITE_URL;
	});
	return (
		<Switch>
			<></>
		</Switch>
	);
};

const PublicRoutes = () => {
	return platform.isMobile ? <PublicMobileRoutes /> : <PublicDesktopRoutes />;
};
export default PublicRoutes;
