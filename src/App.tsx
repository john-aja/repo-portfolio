import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/Home";
import EmploymentPage from "./components/Employment/Employment";
import WorksPage from "./components/Works/Works";
import SkillPage from "./components/Skill/Skill";
import FooterPage from "./components/Footer/Footer";
import "./App.css";
import Arrow from "./assets/arrow.svg";
import myLogo from "./assets/aj_logo.svg";

const App: React.FC = () => {
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

	// Theme toggler

	const [currentTheme, setTheme] = useState(false);
	const themeChange = () => {
		document.body.classList.toggle("light-theme");
		setTheme(!currentTheme);
		toggleHandler();
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
		const themeToggler = document.querySelector(".switch-name");
		document.querySelector(".body")?.classList.toggle("heightFix");

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
		themeToggler?.classList.toggle("active-toggler");
	};

	const reject = () => {
		return;
	};

	// Theme Handler

	const [isToggleOn, setIsToggleOn] = useState(false);

	const toggleHandler = () => {
		setIsToggleOn(!isToggleOn);
	};

	// Function Component

	return (
		<div className="main-app">
			<div
				className="progressBar"
				style={{ height: `${scrollPercentage}%` }}
			></div>
			<div>
				<nav
					className={`nav-mob-1 ${isSticky ? "add-shadow " : "remove-shadow"}`}
				>
					<img
						style={isToggleOn ? { filter: "invert(1)" } : {}}
						className="logo-mob"
						src={myLogo}
						alt=""
					/>
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
					<img
						style={isToggleOn ? { filter: "invert(1)" } : {}}
						className="logo-mob"
						src={myLogo}
						alt=""
					/>
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

						<label className="switch-name">
							<input
								type="checkbox"
								checked={isToggleOn}
								className="checkbox"
								onClick={() => {
									themeChange();
									toggleHandler();
								}}
							/>
							<div className="back"></div>
							<svg
								className="moon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
							>
								<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
							</svg>
							<svg
								className="sun"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path>
							</svg>
						</label>
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
							style={
								currentRoute === "about" ? { border: "1px solid red" } : {}
							}
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
						<Header isToggleOn={isToggleOn} toggleHandler={toggleHandler} />
					</div>
					<div className="">
						<Header isToggleOn={isToggleOn} toggleHandler={toggleHandler} />
					</div>
				</div>
				<div style={MainStyle} className="main-container">
					<div id="home">
						<HomePage />
					</div>
					<div id="about">
						<EmploymentPage theme={isToggleOn} />
					</div>
					<div id="works">
						<WorksPage theme={isToggleOn} />
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
