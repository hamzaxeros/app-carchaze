import React,{useEffect} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../../assets/styles/base.scss";


import { PublicRoutes } from "../../../routes";
import { DateTimePicker } from "../../public";
import TabBar from "./TabBar/TabBar";
import { Observer } from "mobx-react";
import TopBar from "./TopBar/TopBar";
import { platform } from "../../../utils";

const Layout = (props) => {
	return (
		<div>
			{platform.isMobile ? <></> : <TopBar />}
			<div style={{ height: "calc(100vh - 60px)", overflow: "auto" }}>
				<PublicRoutes />
			</div>
			{platform.isMobile ? <TabBar /> : <></>}
			<Observer render={() => <DateTimePicker />} />
		</div>
	);
};

export default Layout;
