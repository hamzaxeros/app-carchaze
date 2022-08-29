/**
 * Chat
 * @module 🔗:src/pages/Messages/Chat/Chat.jsx
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version carchaze.com@0.2.0
 * @description Chat Page
 * 
 */

 import React from "react";
 import { platform } from "../../../utils";
 import { ChatIProps } from "./typedefs";
 import DesktopView from "./Chat.Desktop";
 import MobileView from "./Chat.Mobile";


 /**
 * @function
 * @version carchaze.com@0.2.0
 * @param {ChatIProps} props
 * @returns
 */
const Chat = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default Chat;
