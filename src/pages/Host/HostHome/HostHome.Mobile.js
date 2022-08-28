/**
 * HostMobile
 * @module 🔗:src/pages/Host/HostMobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host - Mobile View
 *
 */

import React from "react";
import { Img } from "react-image";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { ListStyler } from "../../../components/public"
import data from "./data.json"

import HeroImage from "./../../../assets/images/hosting-hero-img.jpg";
import SideImage2 from "../../../assets/images/home-side-image-2.jpg"
import SideImage3 from "../../../assets/images/hosting-img-2.jpg"
import SideImage4 from "../../../assets/images/hosting-img-1.jpg"

import { Link } from "react-router-dom";

const contents = [
	{
		heading: "More bang for your budget",
		contents:
			"Wide range of cars, Complete with a better, more convenient experience. Find a perfect for your budget, starting from Rs. 2000 per day.",
	},
	{
		heading: "Free cancellation",
		contents:
			"Cancel for full refund up to 24 hours before your trip starts. Because life happens and it help to be flexible when it does.",
	},
];

const HostMobile = (props) => {
	//? States

	//? Refs

	//? Auto Runner

	//? Variables

	//? Functions

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			{/* ================== SECTION 01 =====================*/}
			<section className="hosting__hero__container">
				<div className="hosting__hero__bottom-container">
					<h1>
						<span>Let your car work while</span> you finally take
						that vacation.
					</h1>
					<p>
						<span>Share your car</span> whenever you're not using it{" "}
						<span>and earn an average of</span> 4% rental income per
						month. Pakistan's first{" "}
						<span>carsharing marketplace.</span>
					</p>
					<button className="filled-button no-radius">
						Get started
					</button>
				</div>
				<div className="hosting__hero__top-image-container">
					<Img
						src={HeroImage}
						unloader={
							<div className="hosting__hero__top-image-load" />
						}
						loader={
							<div className="hosting__hero__top-image-load" />
						}
					/>
				</div>
			</section>

			{/* ================== SECTION 02 =====================*/}
			<section className="renting__3__container">
			<div className="renting__3__sub-top-container">
				<h1>How sharing your car work?</h1>
			</div>
			<div className="renting__3__sub-bottom-container">
				<div className="renting__3__sub-bottom-container-sub">
					<div className="renting__3__sub-bottom__left-container">
						<Img
							src={SideImage4}
							unloader={
								<div className="image-unloader-renting-lister" />
							}
							loader={
								<div className="image-unloader-renting-lister" />
							}
						/>
					</div>
					<div className="renting__3__sub-bottom__right-container">
						{data.section_2.map((item, index) => (
							<ListStyler
								contents={item.contents}
								heading={item.heading}
								counter={index + 1}
							/>
						))}
						<p className="listing__styler-footer">
							Get all the questions answered in the{" "}
							<span>Help center of hosts</span>
						</p>
					</div>
				</div>
			</div>
			</section>
			
			{/* ================== SECTION 03 =====================*/}
			<section className="home__2__container">
				<div className="home__2__sub-container home__2__sub-container-content-base">
					<div>
						<h1>
							List your car. <span>Earn</span> Rental{" "}
							<span>and watch the</span> money{" "}
							<span>rolling in.</span> Let the car work for you.
						</h1>
						<p>
							Share your <span>underused car</span> and start
							building a small <span>car sharing business.</span>{" "}
							Earn upto <span>5% monthly rentals.</span>
						</p>
						<button
							className="outlined-button"
						>
							Share your car
						</button>
					</div>
				</div>
				<div className="home__2__sub-container">
					<Img src={SideImage2} />
				</div>
			</section>
			{/* ================== SECTION 04 =====================*/}
			<div className="section__6_container">
			<div className="section__6__sub-container">
				<div className="section__6__left-container">
					<div className="hosting__3__left-container-top">
						<h1>You're covered</h1>
						<h1>Share with more</h1>
						<h1>confidence</h1>
					</div>
					{data.section_4.map((item, index) => (
						<ListStyler
							noCounter
							heading={item.heading}
							contents={item.contents}
						/>
					))}
					<p className="hosting__3__host-protection-plan">
						Learn more about <Link to={'#'}>Host's protection plan</Link>
					</p>
				</div>
				<div className="section__6__right-container">
					<Img
						src={SideImage3}
						style={{
							height: "100%",
							width: "100%",
							objectFit: "cover",
						}}
					/>
				</div>
			</div>
		</div>
			{/* ================== SECTION 05 =====================*/}
			<section className="hosting__4__container">
				<div className="hosting__4__sub-container">
					<h1>We've your back</h1>
					<div className="hosting__4__items-container">
						<div className="hosting__4__item">
							<RiCustomerService2Fill className="hosting__4__item-icon" />
							<h1>24/7 Cutomer support</h1>
							<p>
								24/7 customer support is just a click way, and
								your guest have easy access to CarChaze' roads
								assistance.
							</p>
						</div>
						<div className="hosting__4__item">
							<AiOutlineGlobal className="hosting__4__item-icon" />
							<h1>Trusted Community</h1>
							<p>
								CarChaze screens all guests before allowing them
								to book, so you can rest easy knowing your car
								is in good hands.
							</p>
						</div>
						<div className="hosting__4__item">
							<BsStarHalf className="hosting__4__item-icon" />
							<h1>Two-way reviews</h1>
							<p>
								Both hosts and guests each other after every
								trip, so you cac your guest's review before
								hosting them.
							</p>
						</div>
					</div>
					<button className="outlined-button">List your car</button>
				</div>
			</section>

			{/* ================== SECTION 02 =====================*/}
		</React.Fragment>
	);
};

export default HostMobile;
