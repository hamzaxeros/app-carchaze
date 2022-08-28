/**
 * TabBar
 * @module 🔗:src/components/utility/resources/TabBar/TabBar.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Tab bar for Carchaze All services
 *
 */

import React, { useEffect, useState } from "react";
import {
	AiOutlineSearch,
	AiOutlineMessage,
	AiOutlineUser,
} from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { RiSearchEyeLine, RiSearchLine } from "react-icons/ri";
import { BsChatText, BsChatTextFill } from "react-icons/bs";
import { TbRoad } from "react-icons/tb"
import {FaRoad} from "react-icons/fa"
import {
	IoCarSport,
	IoCarSportOutline,
	IoPerson,
	IoPersonOutline,
} from "react-icons/io5";
import { Link, useHistory, useLocation } from "react-router-dom";

const routing = [
	{
		path: "/search",
		title: "Home",
		icon: <RiSearchEyeLine />,
		inactiveIcon: <RiSearchLine />,
	},
	{
		path: "/trips",
		title: "Trips",
		icon: <FaRoad />,
		inactiveIcon: <TbRoad />,
	},
	{
		path: "/messages",
		title: "Chat",
		icon: <BsChatTextFill />,
		inactiveIcon: <BsChatText />,
	},
	{
		path: "/host",
		title: "Host",
		icon: <IoCarSport />,
		inactiveIcon: <IoCarSportOutline />,
	},
	{
		path: "/account",
		title: "Account",
		icon: <IoPerson />,
		inactiveIcon: <IoPersonOutline />,
	},
];

const TabBar = (props) => {
	//? States
	const [locationState, setLocationState] = useState("/search");
	//? Refs

	//? Auto Runner

	//? Variables
	const location = useLocation();

	//? Functions
	const _isEqualToPath = (name) => {
		return locationState.includes(name);
	};

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			<div className="tabbar-container">
				{routing.map((item, index) => (
					<Link
						to={item.path}
						onClick={() => setLocationState(item.path)}
						className={
							_isEqualToPath(item.path) ? "tabbar-active" : ""
						}
					>
						{_isEqualToPath(item.path)
							? item.icon
							: item.inactiveIcon}
						<p>{item.title}</p>
					</Link>
				))}
			</div>
		</React.Fragment>
	);
};

export default TabBar;
