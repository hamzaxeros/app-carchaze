/**
 * BasicRowButton
 * @module 🔗:src/components/public/resources/Buttons/BasicRowButton.js
 *
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
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
 * @typedef {object} BasicRowButtonType
 * @property {'full' | "with-margin" | 'none'} [lineTop] Default - none
 * @property {'full' | "with-margin" | 'none'} [lineBottom] Default - none
 * @property {'right' | 'left' | 'none' | 'up' | 'down'} [arrow] Default - right
 * @property {string} [leftIcon] Left icon from eva -  https://akveo.github.io/eva-icons/#/
 * @property {string} [leftText]
 * @property {React.ReactNode} [leftComponent]
 * @property {React.CSSProperties} [leftIconStyle]
 * @property {React.CSSProperties} [leftTextStyle]
 * @property {React.CSSProperties} [contentContainerStyle]
 * @property {React.ReactNode} [rightComponent]
 * @property {string} [rightText]
 * @property {string} [leftTextColor] Default - #000
 * @property {string} [rightTextColor] Default - #000
 * @property {number} [leftTextSize]
 * @property {number} [minHeight] Default - 44
 *
 *
 * @typedef {React.HTMLProps & BasicRowButtonType} BasicRowButtonIProps
 */

/**
 * @param {BasicRowButtonIProps} props
 * @returns
 */
const BasicRowButton = (props) => {
	//? Props
	const {
		lineTop = "none",
		lineBottom = "none",
		arrow = "right",
		leftIcon,
		leftText,
		leftTextSize = typography.size.font.md,
		leftTextColor = "#000",
		rightTextColor = "#000",
		leftComponent,
		leftIconStyle,
		leftTextStyle,
		contentContainerStyle,
		rightText,
		rightComponent,
		minHeight = 44,
	} = props;

	// CSS Customization
	const customContainer = {
		minHeight: minHeight,
		borderBottom:
			lineBottom === "full" ? `${typography.size.border.height}px solid ${colors.basic_border_color}` : undefined,
		borderTop:
			lineTop === "full" ? `${typography.size.border.height}px solid ${colors.basic_border_color}` : undefined,
	};
	const topBorder = {
		...(lineTop === "with-margin" ? globalStyle.marginL : {}),
	};
	const bottomMargin = {
		...(lineBottom === "with-margin" ? globalStyle.marginL : {}),
	};
	const customLeftTextStyle = {
		color: leftTextColor,
		fontSize: leftTextSize,
	};
	const rightTextStyle = {
		color: rightTextColor,
	};
	const buttonStyle = {
		minHeight,
		cursor: props?.onClick ? "pointer" : "default",
	};


	return (
		<div
			className="basic_row_button--container"
			style={{
				...customContainer,
				...contentContainerStyle,
			}}
		>
			{lineTop === "with-margin" ? (
				<div
					className="basic_row_button--borderWithMargin"
					style={{ ...topBorder }}
				/>
			) : (
				<></>
			)}
			<div
				{...props}
				// @ts-ignore
				style={{ ...props.style, ...buttonStyle }}
				className={`basic_row_button--touchContainer ${props.className}`}
			>
				<div className="basic_row_button--leftView">
					{leftIcon ? (<>
						<i className={`${leftIcon} basic_row_button--leftIconStyle`} style={{ ...leftIconStyle}}></i>
					</>
					) : (
						<></>
					)}
					{leftComponent ||
						(leftText ? (
							<p
								className="basic_row_button--leftText"
								style={{
									...customLeftTextStyle,
									...leftTextStyle,
								}}
							>
								{leftText}
							</p>
						) : (
							<></>
						))}
				</div>
				<div className="basic_row_button--rightView">
					{rightComponent ||
						(rightText ? (
							<p
								style={{ ...rightTextStyle }}
								className="basic_row_button--rightText"
							>
								{rightText}
							</p>
						) : (
							<></>
						))}
					{arrow !== "none" ? (
						<i className={`las la-angle-${arrow} basic_row_button--rightArrow`}></i>
					) : (
						<></>
					)}
				</div>
			</div>
			{lineBottom === "with-margin" ? (
				<div
					style={{ ...bottomMargin }}
					className="basic_row_button--borderWithMargin"
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default BasicRowButton;
