/**
 * Use WindowSize Hook
 * @module 🔗:hooks/useWindowSize
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze.com@0.2.0
 * @description WindowSize Modular, Give you the window size
 *
 */

import { useEffect, useState } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

/**
 * It gives the window size
 *
 * @function
 * @param {boolean} [openEvent]
 * @returns {{width: number, height: number}}
 *
 * @example
 * import useWindowSize from "./useWindowSize"
 *
 * export default function WindowSizeComponent() {
 *   const { width, height } = useWindowSize()
 *
 *   return (
 *     <div>
 *       {width} x {height}
 *     </div>
 *   )
 * }
 */
export default function useWindowSize(openEvent) {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);



	useEffect(() => {
		if (openEvent) {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return windowDimensions
}
