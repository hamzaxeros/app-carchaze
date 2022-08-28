import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoCarOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
// import { IoShieldCheckmarkOutline } from "react-icons/gr";

import LogoSvg from "../../../../assets/svgComponents/Logo";
import { useHistory, useLocation } from "react-router-dom";

const TopBar = (props) => {
	const [menu, setMenu] = React.useState(false);

	const history = useHistory()
	const location = useLocation()

	const goToHome = () => {
		history.push("/");
	};
	const linkage = (link) => {
		setMenu(false);
		history.push(link);
	};
	const isUrl = (path) => {
		return location.pathname === path;
	}

	return (
		<>
			<div className="topnav__container">
				<div className="topnav__left-container user-select-none">
					<p onClick={goToHome}>CARCHAZE</p>
					<LogoSvg onClick={goToHome} className="carchaze-nav-logo" />
				</div>
				<FiMenu className="menu-icon" onClick={() => setMenu(true)} />
				<div
					className={`back-shadow ${
						!menu ? "back-shadow-hide" : "back-shadow-show"
					}`}
					onClick={() => setMenu(false)}
				/>
				<div
					className={`topnav__right-container ${
						menu ? "topnav__right-container-menuer" : ""
					} user-select-none pointer-cursor`}
				>
					<MdClose
						className="close-icon"
						onClick={() => setMenu(false)}
					/>
					<ul>
						<h3 onClick={() => linkage("/")}>CARCHAZE</h3>
						<li onClick={() => linkage("/host")} className={isUrl('/host') ? 'active':''}>
							<span>
								<IoShieldCheckmarkOutline />
							</span>
							Become a host
						</li>
						<li onClick={() => linkage("/search")} className={isUrl('/search') ? 'active':''}>
							<span>
								<IoCarOutline />
							</span>
							Rent a car
						</li>
						{/* <li onClick={() => linkage("/")} className={isUrl('/learn-more') ? 'active':''}>
							<span>
								<AiOutlineFileSearch />
							</span>
							Learn more
						</li> */}
					</ul>
				</div>
			</div>
		</>
	);
};

export default TopBar;
