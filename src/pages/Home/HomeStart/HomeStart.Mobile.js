/**
 * HomeStartMobile
 * @module 🔗:src/pages/Home/HomeStart/HomeStart.Mobile.js
 *
 * @author Hamza Hussain <hamza@carchaze.com>
 * @copyright CarChaze 2022
 * @version carchaze.com@0.2.0
 * @description HomeStart - Mobile View
 *
 */

import React, { useState } from "react";
import { Img } from "react-image";
import HeroImage from "./../../../assets/images/hero-image.jpg";
import Image2 from "./../../../assets/images/home-side-image.jpg";
import ListStyler from "./components/ListStyler/ListStyler";
import data from "./data.json";
import { MdSecurity } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useWindowSize } from "./../../../hooks";
import dayjs from "dayjs";
import { Card1, Carousel } from "./../../../components/public";
import { dataTime } from "./../../../utils";

import PickKeys from "./../../../assets/svgComponents/PickKeys";
import DropKeys from "./../../../assets/svgComponents/DropKeys";
import { GoCalendar } from "react-icons/go";

import ToyotaImage from "../../../assets/images/make-cars/toyota.jpg";
import HondaImage from "../../../assets/images/make-cars/honda.jpg";
import SuzukiImage from "../../../assets/images/make-cars/suzuki.jpg";
import AudiImage from "../../../assets/images/make-cars/audi.jpg";
import BmwImage from "../../../assets/images/make-cars/bmw.jpg";
import NissanImage from "../../../assets/images/make-cars/nissan.jpg";
import MitsubishiImage from "../../../assets/images/make-cars/mitsubishi.jpg";
import MercedesImage from "../../../assets/images/make-cars/mercedes.jpg";
import MazdaImage from "../../../assets/images/make-cars/mazda.jpg";
import LexusImage from "../../../assets/images/make-cars/lexus.jpg";

import lahore from "./../../../assets/images/citizenIcons/meenar-pakistan-icon.png";
import islamabad from "./../../../assets/images/citizenIcons/fasal-mosque-icon.png";
import karachi from "./../../../assets/images/citizenIcons/quaid-e-azam-mazaar-icon.png";
import peshawar from "./../../../assets/images/citizenIcons/khyber-bazar-icon.png";
import quetta from "./../../../assets/images/citizenIcons/zyarat-quetta-icon.png";

import SedanImage from "../../../assets/images/categories-cars/sedan.jpg";
import TruckImage from "../../../assets/images/categories-cars/truck.jpg";
import SuvImage from "../../../assets/images/categories-cars/suv.jpg";
import MiniImage from "../../../assets/images/categories-cars/mini.jpg";
import VanImage from "../../../assets/images/categories-cars/van.jpg";

const makeData = [
	{
		label: "Toyota",
		img_url: ToyotaImage,
	},
	{
		label: "Honda",
		img_url: HondaImage,
	},
	{
		label: "Suzuki",
		img_url: SuzukiImage,
	},
	{
		label: "Audi",
		img_url: AudiImage,
	},
	{
		label: "BMW",
		img_url: BmwImage,
	},
	{
		label: "Mercedes",
		img_url: MercedesImage,
	},
	{
		label: "Lexus",
		img_url: LexusImage,
	},
	{
		label: "Mazda",
		img_url: MazdaImage,
	},
	{
		label: "Nissan",
		img_url: NissanImage,
	},
	{
		label: "Mitsubishi",
		img_url: MitsubishiImage,
	},
];
const destinationData = [
	{
		name: "Lahore",
		imgUrl: lahore,
	},
	{
		name: "Islamabad",
		imgUrl: islamabad,
	},
	{
		name: "Karachi",
		imgUrl: karachi,
	},
	{
		name: "Peshawar",
		imgUrl: peshawar,
	},
	{
		name: "Quetta",
		imgUrl: quetta,
	},
];
const categoryData = [
	{
		label: "Sedan",
		img_url: SedanImage,
	},
	{
		label: "SUV",
		img_url: SuvImage,
	},
	{
		label: "Mini",
		img_url: MiniImage,
	},
	{
		label: "Pick up truck",
		img_url: TruckImage,
	},
	{
		label: "Van",
		img_url: VanImage,
	},
];

export const cardResponsiveManager = (width) => {
	return width < 580
		? 1
		: width < 860
		? 2
		: width < 1100
		? 3
		: width < 1240
		? 4
		: 5;
};

const HomeStartMobile = (props) => {
	//? States

	//? Refs

	//? Auto Runner

	//? Variables
	const { width } = useWindowSize();
	const svgWidth =
		width <= 560 ? 220 : width <= 850 ? 250 : width <= 1300 ? 300 : 400;
	const svgHeight =
		width <= 560 ? 130 : width <= 850 ? 180 : width <= 1300 ? 220 : 280;

	//? Functions

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			{/* ================== SECTION 01 =====================*/}
			<section className="home__hero__container">
				<div className="home__hero__top-image-container">
					<Img
						src={HeroImage}
						unloader={
							<div className="home__hero__top-image-load" />
						}
						loader={<div className="home__hero__top-image-load" />}
					/>
					<div className="search_cells-container">
						<div className="search_cell">
							<ul>
								<li className="search_input">
									<label>Where</label>
									<input
										type="text"
										placeholder="City, airport, address or hotel"
									/>
								</li>
								<li onClick={dataTime.picker.open}>
									<label htmlFor="">From</label>
									<div >
										<p>
											{dayjs(new Date()).format(
												"DD MMM YYYY, hh:mm A"
											)}
										</p>
										<GoCalendar />
									</div>
								</li>
								<li onClick={dataTime.picker.open}>
									<label htmlFor="">Until</label>
									<div>
										<p>
											{dayjs(new Date()).format(
												"DD MMM YYYY, hh:mm A"
											)}
										</p>
										<GoCalendar />
									</div>
								</li>
								<li>
									<button className="filled-button">
										Search
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="home__hero__bottom-container">
					<h1>Car Rental Marketplace</h1>
					<h4>Easy. Safe. Reliable car-sharing</h4>
					<button className="filled-button">Rent a car</button>
				</div>
			</section>
			<section className="renting__5__container">
				<div className="renting__5__sub-container">
					<Carousel.Carousel1
						title={"Search by make"}
						slidesToShow={cardResponsiveManager(width)}
					>
						{makeData.map((item, i) => (
							<Card1
								imageContain={true}
								imageSrc={item.img_url}
								footerTitle={item.label}
								key={i}
							/>
						))}
					</Carousel.Carousel1>
				</div>
			</section>

			{/* ================== SECTION 03 =====================*/}
			<section className="renting__4__container">
				<div className="renting__4__sub-container">
					<h1>Unlimited options</h1>
					<h3>
						Search <span>wide range of vehicles</span> that fit your{" "}
						<span>budget</span>
					</h3>
					<p>
						Whether it's and SUV for a family road trip or a pickup
						truck from an errand day, or a classic sports car for
						special night out, find the perfect for kind of
						occasions and budgets on CarChaze
					</p>
					<button className="filled-button">
						Book the perfect car
					</button>
				</div>
			</section>

			{/* ================== SECTION 04-05 =====================*/}
			<section className="renting__5__container">
				<div className="renting__5__sub-container">
					<Carousel.Carousel1
						title={"Search by make"}
						slidesToShow={cardResponsiveManager(width)}
					>
						{categoryData.map((item, i) => (
							<Card1
								imageContain={true}
								imageSrc={item.img_url}
								footerTitle={item.label}
								key={i}
							/>
						))}
					</Carousel.Carousel1>
					<div style={{ marginTop: 60 }}></div>
					<Carousel.Carousel1
						title={"Search by categories"}
						slidesToShow={cardResponsiveManager(width)}
					>
						{destinationData.map((item, i) => (
							<Card1
								key={i}
								imageSrc={item.imgUrl}
								footerTitle={item.name}
								imageContain
							/>
						))}
					</Carousel.Carousel1>
					<div style={{ marginTop: 100 }}></div>
				</div>
			</section>

			{/* ================== SECTION 06 =====================*/}
			<section className="home__2__container">
				<div className="home__2__sub-container home__2__sub-container-content-base">
					<div>
						<h1>
							Get approved to drive. <span>Enjoy</span> the
							freedom <span>and feel like</span> driving your own
							car.
						</h1>
						<p>
							Book from a{" "}
							<span>wide range of available vehicles</span> across
							the country, starting from{" "}
							<span>Rs. 2,000 per day.</span>
						</p>
						<button className="outlined-button">Rent a car</button>
					</div>
				</div>
				<div className="home__2__sub-container">
					<Img src={Image2} />
				</div>
			</section>

			{/* ================== SECTION 07 =====================*/}
			<section className="section__6_container">
				<div className="section__6__sub-container">
					<div className="section__6__left-container">
						<h1>
							Why CarChaze is the <span>bestplace</span> to rent a
							car?
						</h1>
						<h3>Skip the rental counter</h3>
						<div style={{ flex: 1 }} />
						<button className="outlined-button">
							{" "}
							Guide for guests
						</button>
					</div>
					<div className="section__6__right-container">
						{data.section_7.map((item, index) => (
							<ListStyler
								noCounter
								heading={item.heading}
								contents={item.contents}
								counter={undefined}
							/>
						))}
					</div>
				</div>
			</section>

			{/* ================== SECTION 08 =====================*/}
			<section className="home__3__container">
				<div className="home__3__sub-container">
					<h3>
						<span>Through CarChaze's</span> optional protection
						plans
					</h3>
					<MdSecurity className="home__3__security-icon" />
					<h1>You're Covered. Share with Confidence.</h1>
					<p>
						You'll have <span>limited responsibility,</span> just in
						case <span>anything happens to the car</span> during the
						trip, booked through CarChaze.
					</p>
				</div>
			</section>

			{/* ================== SECTION 09 =====================*/}
			<section className="home__4__container">
				<div className="home__4__sub-container">
					<div className="home__4__content home__4__content-write">
						<h1>
							Book a car <IoIosArrowForward />
						</h1>
						<p>
							Find the perfect vehicle for your next adventure.
							Drive like your own car
						</p>
					</div>
					<div className="home__4__content ">
						<DropKeys
							width={svgWidth}
							height={svgHeight}
							style={undefined}
							className={undefined}
							size={undefined}
						/>
					</div>
					<div className="home__4__content ">
						<PickKeys
							width={svgWidth}
							height={svgHeight}
							style={undefined}
							className={undefined}
							size={undefined}
						/>
					</div>
					<div className="home__4__content home__4__content-write">
						<h1>
							Become a host <IoIosArrowForward />
						</h1>
						<p>
							Share your underused car and start building a small
							car-sharing business
						</p>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default HomeStartMobile;
