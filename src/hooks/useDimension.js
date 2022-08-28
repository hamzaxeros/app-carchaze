import { useCallback } from "react";
import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function Dimension() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	const handleResize = useCallback(() => {
		setWindowDimensions(getWindowDimensions());
	},[])


	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
