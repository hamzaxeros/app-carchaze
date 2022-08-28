//  File Name: Card
//  Component Created at 06 Jan, 2022 - 11:41:10
//
//  ==========================================================
//  COMPANY: ( CarChaze )
//
//  Created by CarChaze developers.
//  Copyright © ( 2022 - Current ) CarChaze. All rights reserved.
//  ===========================================================

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
