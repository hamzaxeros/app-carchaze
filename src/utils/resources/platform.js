/**
 * platform
 * @module 🔗:src/utils/resources/platform.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Detect info about device
 *
 */

import platform from "platform";

/**
 * Check the platform OS
 * @returns {undefined | "Windows" | "Windows Server 2008 R2 / 7" | "Windows Server 2008 / Vista" | "Windows XP" | "OS X" | "Linux" | "Ubuntu" | "Debian" | "Fedora" | "Red Hat" | "SuSE" | "Android"|"iOS"|"Windows Phone"}
 */
export const OS = () => {
	// @ts-ignore
	return platform.os?.family;
};

