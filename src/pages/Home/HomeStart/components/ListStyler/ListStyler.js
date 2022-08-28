/**
 * ListStyler
 * @module 🔗:src/pages/Home/HomeStart/components/ListStyler
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @version 0.2.0
 * @description List  Styles
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
