/**
 * Carousel
 * @module 🔗:src/components/public/resources/Carousel
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @version carchaze.com@0.1.0
 * @description Carousel Component
 * 
 */

import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { useWindowSize } from "./../../../../hooks";
import { motion } from "framer-motion";

export function Carousel1({
	title,
	children,
	arrowsColor,
	arrowsBgColor,
	removeArrows,
	slidesToScroll,
	slidesToShow,
	arrowInside,
	autoplay,
	fade,
	onChange = () => null,
	dots,
	dotsClass,
	autoplaySpeed,
	height,
	...props
}) {
	const screen = useWindowSize();

	const Arrows = ({ bgColor, color, inside, back, ...props }) => {
		return (
			<div className="" style={{ zIndex: 1 }}>
				<motion.div
					initial={{
						x: inside && (back ? 45 : -45),
					}}
					className="pointer-all"
					onClick={props.onClick}
					style={{
						height: "100%",
						width: 44,
						display: "flex",
						justifyContent: "center",
						backgroundColor: bgColor,
						alignItems: "center",
					}}
				>
					{back ? (
						<IoIosArrowBack
							size={44}
							color={color || "rgba(160,160,160,0.8)"}
						/>
					) : (
						<IoIosArrowForward
							size={44}
							color={color || "rgba(160,160,160,0.8)"}
						/>
					)}
				</motion.div>
			</div>
		);
	};
	return (
		<>
			<div
				style={{
					width: "100%",
				}}
			>
				{title && (
					<div style={{ margin: "0 0 20px 46px" }}>
						<p
							style={{
								fontSize: screen.width < 600 ? 25 : 38,
								fontFamily: "display-b",
							}}
						>
							{title}
						</p>
					</div>
				)}
				<Slider
					
					style={{
						display: "flex",
					}}
					afterChange={onChange}
					slidesToShow={slidesToShow || 1}
					dots={dots}
					dotsClass={dotsClass}
					autoplay={autoplay}
					autoplaySpeed={autoplaySpeed}
					pauseOnHover
					pauseOnFocus
					swipeToSlide
					fade={fade || false}
					// speed={2000}
					cssEase="linear"
					arrows={!removeArrows && true}
					nextArrow={
						<Arrows
							color={arrowsColor}
							bgColor={arrowsBgColor}
							inside={arrowInside}
						/>
					}
					prevArrow={
						<Arrows
							color={arrowsColor}
							bgColor={arrowsBgColor}
							back={true}
							inside={arrowInside}
						/>
					}
					slidesToScroll={
						slidesToScroll || slidesToShow > 1
							? slidesToShow - 1
							: slidesToShow || 1
					}
				>
					{children}
				</Slider>
			</div>
		</>
	);
}
