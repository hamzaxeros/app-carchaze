import React from "react";
import LottieView from "react-lottie";
import { colors } from "../../../../theme";
import AndroidLoaderData from "./../../../../assets/json/androidBlackLoader.json";

/**
 * @typedef {object} AndroidLoaderType
 * @property {number} [size]
 * @property {React.CSSProperties | {}} [style]
 * @property {string} [color]
 * @property {number} [speed]
 */

/**
 * @function
 * @param {AndroidLoaderType} props
 * @return {JSX.Element}
 */
const AndroidLoader = ({
	size = 50,
	style = {},
	color = colors.basic_loader_color,
	speed,
}) => {
	return (
		<>
			<LottieView
				options={{
					loop: true,
					autoplay: true,
					animationData: AndroidLoaderData,
					rendererSettings: {
						preserveAspectRatio: "xMidYMid slice",
					},
				}}
				height={size}
				width={size}
				style={{
					...{ width: size, height: size },
					...(style || {}),
				}}
				// resizeMode="contain"
				// autoPlay={true}
				speed={speed || 1.3}
				// autoSize={false}
				// loop={true}
				// colorFilters={[
				//   {
				//     keypath: 'Circle',
				//     color: color,
				//   },
				//   {
				//     keypath: 'Circle duplicate',
				//     color: color,
				//   },
				//   {
				//     keypath: 'Circle transparent',
				//     color: color,
				//   },
				// ]}
			/>
		</>
	);
};

export default AndroidLoader;
