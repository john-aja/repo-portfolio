import React from "react";
import myLogo from "../../assets/aj_logo.svg";
import insta from "../../assets/Instagram.svg";
import linkedin from "../../assets/LinkedIn.svg";
import mail from "../../assets/Mail.svg";
import "./Header.css";

const Header: React.FC = () => {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const scrollPosition = section.offsetTop;
			window.scrollTo({
				top: scrollPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<header>
			<nav className="nav">
				<img className="logo" src={myLogo} alt="" />
				<ul className="links">
					<li className="link" onClick={() => scrollToSection("home")}>
						Home
					</li>
					<li className="link" onClick={() => scrollToSection("about")}>
						About
					</li>
					<li className="link" onClick={() => scrollToSection("works")}>
						Works
					</li>
					<li className="link" onClick={() => scrollToSection("skills")}>
						Skills
					</li>
					<li className="link" onClick={() => scrollToSection("contact")}>
						Contact
					</li>
				</ul>
				<ul className="img-links">
					<li>
						<a
							href="https://www.instagram.com/im_jon_aj"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<img className="img" src={insta} alt="" />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/ram-aj/"
							target="_blank"
							rel="noreferrer"
						>
							<img className="img" src={linkedin} alt="" />
						</a>
					</li>
					<li>
						<a
							href="mailto:janakiram.0695@gmail.com?subject= Inquiry from Your Portfolio Website&body=I visited your portfolio and would like to discuss potential opportunities or collaborations."
							target="_blank"
							rel="noreferrer"
						>
							<img className="img" src={mail} alt="" />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
