import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { platform } from "../utils";
import { CARCHAZE_WEB_SITE_URL } from "./../constants";

import { Auth } from "./../pages";

const UnauthenticatedMobileRoutes = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Auth.Login} />
			<Route exact path="/signup" component={Auth.Signup} />

			<Redirect to={"/login"} />
		</Switch>
	);
};
const UnauthenticatedDesktopRoutes = () => {
	useEffect(() => {
		window.location.href = CARCHAZE_WEB_SITE_URL;
	});
	return (
		<Switch>
			<></>
		</Switch>
	);
};

const UnauthenticatedRoutes = () => {
	return platform.isMobile ? (
		<UnauthenticatedMobileRoutes />
	) : (
		<UnauthenticatedDesktopRoutes />
	);
};
export default UnauthenticatedRoutes;
