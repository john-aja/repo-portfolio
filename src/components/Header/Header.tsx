import React from "react";
import myLogo from "../../assets/aj_logo.svg";
import insta from "../../assets/Instagram.svg";
import linkedin from "../../assets/LinkedIn.svg";
import mail from "../../assets/Mail.svg";

import "./Header.css";

const Header: React.FC = () => {
	return (
		<header>
			<nav className="nav">
				<img className="logo" src={myLogo} alt="" />
				<ul className="links">
					<li className="link">Home</li>
					<li className="link">About</li>
					<li className="link">Works</li>
					<li className="link">Skills</li>
					<li className="link">Contact</li>
				</ul>
				<ul className="img-links">
					<li>
						<img className="img" src={insta} alt="" />
					</li>
					<li>
						<img className="img" src={linkedin} alt="" />
					</li>
					<li>
						<img className="img" src={mail} alt="" />
					</li>
				</ul>
			</nav>

			<nav className="nav-mob">
				<img className="logo-mob" src={myLogo} alt="" />
			</nav>
		</header>
	);
};

export default Header;
