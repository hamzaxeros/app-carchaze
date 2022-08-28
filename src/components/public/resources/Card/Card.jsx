/**
 * Card
 * @module 🔗:src/components/public/resources/Card
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @version carchaze.com@0.1.0
 * @description Card Component
 * 
 */

import React from "react";
import { Img } from "react-image";

const Card = ({
	customTop,
	customBottom,
	imageSrc,
	footerTitle,
	imageContain,
}) => {
	return (
		<div className="carchaze__card1__container">
			<div className="carchaze__card1__image-container">
				{customTop ? (
					customTop
				) : (
					<Img
						src={imageSrc}
						style={{
							objectFit: imageContain ? "contain" : "cover",
						}}
					/>
				)}
			</div>
			<div className="carchaze__card1__footer-container">
				{customBottom ? customBottom : <p>{footerTitle}</p>}
			</div>
		</div>
	);
};

export default Card;
