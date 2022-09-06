/**
 * TouchableButton
 * @module 🔗:src/components/public/resources/Buttons/TouchableButton.js
 *
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version carchaze.com@0.2.0
 * @description Touchable Button for Carchaze
 */

import React from "react";
import {
	typography,
	colors,
	effects,
	globalStyle,
} from "./../../../../../theme";

/**
 * @typedef {object} TouchableButtonTypes
 * @property {string} title
 * @property {string} [leftIconName] Take icon from Ionicons site - {@link https://ionic.io/ionicons/v4}
 * @property {React.ReactNode} [leftIconComponent]
 * @property {string} [rightIconName]
 * @property {React.ReactNode} [rightIconComponent]
 * @property {"outlined" | "fill" | "transparent"} [theme]
 * @property {boolean} [disabled]
 * @property {string | number } [margin]
 * @property {string | number } [marginH]
 * @property {string | number } [marginT]
 * @property {string | number } [marginB]
 * @property {string | number } [marginR]
 * @property {string | number } [marginL]
 * @property {string | number } [marginV]
 * @property {boolean} [noRadius]
 * @property {React.CSSProperties} [textStyle]
 * @property {string | number} [height]
 * @property {string | number} [width]
 *
 * @typedef {React.HTMLProps & TouchableButtonTypes} TouchableButtonIProps
 */

/**
 * @param {TouchableButtonIProps} props
 * @returns
 */
const TouchableButton = (props) => {
	//? Props
	const {
		leftIconComponent,
		leftIconName,
		children,
		title = "",
		rightIconComponent,
		rightIconName,
		theme = "fill",
		disabled = false,
		margin,
		marginH,
		marginV,
		marginL,
		marginR,
		marginT,
		marginB,
		noRadius = true,
		textStyle,
		height,
		width,
	} = props;
	const textColor =
		theme === "fill"
			? "#fff"
			: disabled
			? colors.disabled_color
			: colors.basic_color;

	const customStyle = {
		marginLeft: marginH || marginL,
		marginRight: marginH || marginR,
		marginTop: marginV || marginT,
		marginBottom: marginV || marginB,
		margin: margin,
		borderRadius: noRadius ? 0 : 8,
		height: height || 50,
		width,
		backgroundColor:
			theme === "outlined" || theme === "transparent"
				? "transparent"
				: disabled
				? colors.disabled_color
				: colors.basic_color,
		borderColor:
			theme === "fill" || theme === "outlined"
				? disabled
					? colors.disabled_color
					: colors.basic_color
				: "transparent",
	};
	const textCustomStyle = {
		color: textColor,
	};

	return (
		<div
			{...props}
			disabled={disabled}
			className={`touchable_button--containerOfTouchableOpacity ${props.disabled ? "":"pointer-cursor"} user-select-none ${props.className}`}
			style={{
				...customStyle,
				...props.style,
			}}
		>
			{leftIconComponent ||
				(leftIconName && (
					<i
						style={{ ...textCustomStyle }}
						className={`${leftIconName} touchable_button--leftIcon`}
					/>
				))}
			{children || (
				<p
					style={{ ...textCustomStyle, ...textStyle }}
					className="touchable_button--buttonTitle"
				>
					{title}
				</p>
			)}
			{rightIconComponent ||
				(rightIconName && (
					<i
						style={{ ...textCustomStyle }}
						className={`${rightIconName} touchable_button--rightIcon`}
					/>
				))}
		</div>
	);
};

export default TouchableButton;
