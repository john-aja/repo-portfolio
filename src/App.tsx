import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Routes from "./components/Router";
import colors from "./colors";
import HomePage from "./components/Home/Home";
import EmploymentPage from "./components/Employment/Employment";
import WorksPage from "./components/Works/Works";
import SkillPage from "./components/Skill/Skill";
import FooterPage from "./components/Footer/Footer";
import "./App.css";
import Arrow from "./assets/arrow.svg";

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

	const [scrollPercentage, setScrollPercentage] = useState(0);
	const [reached100Percent, setReached100Percent] = useState(false);

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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
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
			<div className="nav-container">
				<Header />
			</div>
			<div style={MainStyle}>
				<HomePage />
				<EmploymentPage />
				<WorksPage />
				<SkillPage />
				<FooterPage />
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
