/**
 * Layout
 * @module 🔗:src/components/utility/resources
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @version carchaze.com@0.2.0
 * @description Layout Component
 *
 */

import React, { useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-input-2/lib/style.css";
import "./../../../assets/styles/base.scss";

import { AuthenticatedRoutes, UnauthenticatedRoutes } from "../../../routes";
import { DateTimePicker } from "../../public";
import TabBar from "./TabBar/TabBar";
import { Observer } from "mobx-react";
import TopBar from "./TopBar/TopBar";
import { loader, platform } from "../../../utils";
import { Loader, ActionSheet, Toast } from "./../../public";
import { useCustom } from "../../../hooks";
import { signOut, getAuth } from "firebase/auth";

const Layout = (props) => {
	const { status, loading } = useCustom.authStateChange();
	const mainCustomStyle = {
		height: status ? "calc(100vh - 60px)" : "100vh",
		overflow: "auto",
	};
	const mainContainerCustomStyle = {
		margin: platform.isMobile ? "auto" : undefined,
		maxWidth: platform.isMobile ? 600 : undefined,
	};

	useEffect(() => {
		// signOut(getAuth())
		if (loading) loader.open();
		else loader.close();
	}, [loading]);

	if (loading) {
		return <></>;
	}

	return (
		<div
			style={mainContainerCustomStyle}
			className={`${platform?.isMobile ? "mobile-frame" : ""}`}
		>
			{platform.isMobile ? <></> : <TopBar />}
			<div style={mainCustomStyle}>
				{status ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
			</div>
			{platform.isMobile && status ? <TabBar /> : <></>}
			<Observer render={() => <DateTimePicker />} />
			<ActionSheet />
			<Loader />
			<Toast />
		</div>
	);
};

export default Layout;
