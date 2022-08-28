/**
 * ListStyler
 * @module 🔗:src/components/public/resources/ListStyler
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @version carchaze.com@0.1.0
 * @description List Styler Component
 * 
 */

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
