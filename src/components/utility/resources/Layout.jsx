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
import "./../../../assets/styles/base.scss";

import { AuthenticatedRoutes, UnauthenticatedRoutes } from "../../../routes";
import { DateTimePicker } from "../../public";
import TabBar from "./TabBar/TabBar";
import { Observer } from "mobx-react";
import TopBar from "./TopBar/TopBar";
import { platform } from "../../../utils";
import { Loader } from "./../../public"
import { useCustom } from "../../../hooks";

const Layout = (props) => {
	const { status } = useCustom.authStateChange()
	return (
		<div>
			{platform.isMobile ? <></> : <TopBar />}
			<div style={{ height: "calc(100vh - 60px)", overflow: "auto" }}>
				{status ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes/>}
			</div>
			{(platform.isMobile && status) ? <TabBar /> : <></>}
			<Observer render={() => <DateTimePicker />} />
			<Loader/>
		</div>
	);
};

export default Layout;
