//  File Name: ListStyler
//  Component Created at 06 Jan, 2022 - 09:02:34
//
//  ==========================================================
//  COMPANY: ( CarChaze )
//
//  Created by CarChaze developers.
//  Copyright © ( 2022 - Current ) CarChaze. All rights reserved.
//  ===========================================================

import React from "react";

const ListStyler = ({ heading, counter, contents, noCounter }) => {
	return (
		<>
			<div className="carchaze__list-style__container">
				<div className="carchaze__list-style__top">
					{!noCounter && (
						<div className="carchaze__list-style__top-left">
							<p>{counter}</p>
						</div>
					)}
					<h1
						className="carchaze__list-style__top-right"
						style={{ marginLeft: noCounter ? 0 : undefined }}
					>
						{heading}
					</h1>
				</div>
				<p
					className="carchaze__list-style__bottom"
					style={{ marginLeft: noCounter ? 0 : undefined }}
				>
					{contents}
				</p>
			</div>
		</>
	);
};

export default ListStyler;
