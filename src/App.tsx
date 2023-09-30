import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import colors from "./colors";
import HomePage from "./components/Home/Home";
import EmploymentPage from "./components/Employment/Employment";
import WorksPage from "./components/Works/Works";
import SkillPage from "./components/Skill/Skill";
import FooterPage from "./components/Footer/Footer";
import "./App.css";
import Arrow from "./assets/arrow.svg";
import myLogo from "./assets/aj_logo.svg";

const App: React.FC = () => {
	const App = {
		background: colors["bg-primary"],
		width: "100vw",
		overflow: "hidden",
	};

	const MainStyle = {
		width: "85%",
		marginLeft: "50%",
		transform: "translateX(-50%)",
		overflow: "hidden",
	};

	const AddStyle = {
		backgroundColor: "var(--text-red)",
		cursor: "pointer",
	};

	// Sticky Function
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const scrollY = window.scrollY;
		const threshold = 500;
		setIsSticky(scrollY > threshold);
	};

	// Progress Bar Function

	const [scrollPercentage, setScrollPercentage] = useState(0);
	const [reached100Percent, setReached100Percent] = useState(false);
	const [currentRoute, setRoute] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const scrollHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const newScrollPercentage = (scrollTop / scrollHeight) * 100;
			setScrollPercentage(newScrollPercentage);

			if (newScrollPercentage >= 99) {
				setReached100Percent(true);
			} else {
				setReached100Percent(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Scroll To Top Function

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Scroll To Section Function

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			setRoute(sectionId);
			const scrollPosition = section.offsetTop;
			toggle();
			window.scrollTo({
				top: scrollPosition,
				behavior: "smooth",
			});
		}
	};

	// Menu Button Click Function

	const toggle = () => {
		const menuLabel = document.querySelectorAll(".menu_label");
		const menuText = document.querySelectorAll(".menu_text_bar");
		const menuButton = document.querySelectorAll(".menu_button");
		const logo = document.querySelectorAll(".logo-mob");
		const menuSection = document.getElementById("menu_section");
		const components = document.querySelector(".main-app");
		const navBarOne = document.querySelector(".nav-mob-1");

		menuLabel?.forEach((v) => {
			v.classList.toggle("menu-opened");
		});
		menuText?.forEach((v) => {
			v.classList.toggle("active-width");
		});
		menuButton?.forEach((v) => {
			v.classList.toggle("width-change");
		});
		logo?.forEach((v) => {
			v.classList.toggle("hide");
		});
		menuSection?.classList.toggle("display_block");
		components?.classList.toggle("remove-bar");
		navBarOne?.classList.toggle("remove-shadow");
	};

	const reject = () => {
		return;
	};

	return (
		<div style={App} className="main-app">
			<div
				className="progressBar"
				style={{ height: `${scrollPercentage}%` }}
			></div>
			<div>
				<nav
					className={`nav-mob-1 ${isSticky ? "add-shadow " : "remove-shadow"}`}
				>
					<img className="logo-mob" src={myLogo} alt="" />
					<div className="webapp_cover">
						<div className="menu_button">
							<input type="checkbox" className="menu_checkbox" />
							<label
								htmlFor="menu_checkbox"
								className="menu_label"
								onClick={toggle}
							>
								<div className="menu_text_bar"></div>
							</label>
						</div>
					</div>
				</nav>

				<nav className={`nav-mob ${isSticky ? "remove-el" : "remove-shadow"}`}>
					<img className="logo-mob" src={myLogo} alt="" />
					<div className="webapp_cover">
						<div className="menu_button">
							<input type="checkbox" className="menu_checkbox" />
							<label
								htmlFor="menu_checkbox"
								className="menu_label"
								onClick={toggle}
							>
								<div className="menu_text_bar"></div>
							</label>
						</div>
					</div>
				</nav>
				<div id="menu_section">
					<ul>
						<li
							className={currentRoute === "home" ? "home_link" : ""}
							onClick={() => scrollToSection("home")}
						>
							Home
						</li>
						<li
							className={currentRoute === "about" ? "home_link" : ""}
							onClick={() => scrollToSection("about")}
						>
							About
						</li>
						<li
							className={currentRoute === "works" ? "home_link" : ""}
							onClick={() => scrollToSection("works")}
						>
							Works
						</li>
						<li
							className={currentRoute === "skills" ? "home_link" : ""}
							onClick={() => scrollToSection("skills")}
						>
							Skills
						</li>
						<li
							className={currentRoute === "contact" ? "home_link" : ""}
							onClick={() => scrollToSection("contact")}
						>
							Contact
						</li>
					</ul>
				</div>
				<div>
					<div className={`sticky-container${isSticky ? "  visible" : ""}`}>
						<Header />
					</div>
					<div className="">
						<Header />
					</div>
				</div>
				<div style={MainStyle} className="main-container">
					<div id="home">
						<HomePage />
					</div>
					<div id="about">
						<EmploymentPage />
					</div>
					<div id="works">
						<WorksPage />
					</div>
					<div id="skills">
						<SkillPage />
					</div>
					<div id="contact">
						<FooterPage />
					</div>
				</div>
			</div>
			<div
				className="scroll-counter"
				style={reached100Percent ? AddStyle : {}}
				onClick={reached100Percent ? scrollToTop : reject}
			>
				{reached100Percent ? <img src={Arrow} alt="arrow" /> : ""}
			</div>
		</div>
	);
};

export default App;
