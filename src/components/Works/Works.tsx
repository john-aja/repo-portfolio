import React from "react";
import "./Works.css";
import ProjectCard from "./ProjectCard";

import TravelistIcon from "../../assets/projects/logo/travelist.svg";
import Travelist from "../../assets/projects/TRAVELIST.png";

import LibraryIcon from "../../assets/projects/logo/library.svg";
import Library from "../../assets/projects/LIBRARY.png";

import Bankist from "../../assets/projects/BANKIST.png";
import BankistIcon from "../../assets/projects/logo/bankist.svg";

import Schemes from "../../assets/projects/SCHEMES.png";
import SchemesIcon from "../../assets/projects/logo/schemes.svg";

import Fabmatic from "../../assets/projects/FABMATIC.png";
import FabmaticIcon from "../../assets/projects/logo/fabmatic.svg";

import PortfolioIcon from "../../assets/projects/logo/portfolio.svg";
import Portfolio from "../../assets/projects/PORTFOLIO.png";

import TrackTwinIcon from "../../assets/projects/logo/track-twin.svg";
import TrackTwin from "../../assets/projects/MEMORY-GAME.png";

import ManojEngineeringIcon from "../../assets/projects/logo/engineering.svg";
import ManojEngineering from "../../assets/projects/ENGINEERING.png";

import Galaxy from "../../assets/projects/GALAXY.png";
import GalaxyIcon from "../../assets/projects/logo/galaxy.svg";

import Dice from "../../assets/projects/DICE.png";
import DiceIcon from "../../assets/projects/logo/dice.svg";

import Mappy from "../../assets/projects/MAPPY.png";
import MappyIcon from "../../assets/projects/logo/mappy.svg";

import Guess from "../../assets/projects/GUESS NUMBER.png";
import GuessIcon from "../../assets/projects/logo/guess.svg";

import Blue from "../../assets/projects/BLUE-CONSTRUCTION.png";
import BlueIcon from "../../assets/projects/logo/blue.svg";

const projects = [
	{
		title: "Bankist",
		description:
			"A simple bank app that enables users to log in and perform various banking actions using HTML, CSS, and JavaScript.",
		icon: BankistIcon,
		image: Bankist,
		active: true,
		link: "https://banker-app.netlify.app/",
		repo: "https://github.com/john-aja/Bankist",
	},
	{
		title: "Library",
		description:
			"This app allows users to manage a library, view books, mark them as taken, and vote for unavailable books.",
		icon: LibraryIcon,
		image: Library,
		active: false,
		link: "https://library-management-system-lms.el.r.appspot.com/",
		repo: "https://github.com/john-aja/Library-Management-System---V1",
	},
	{
		title: "Travelist",
		description:
			"This single-page website highlights a travel agency's services: flight and restaurant bookings, and trip organization.",
		icon: TravelistIcon,
		image: Travelist,
		active: false,
		link: "https://travelistapp.netlify.app/",
		repo: "https://github.com/john-aja/Travelist",
	},
	{
		title: "Schemes",
		description:
			"The Schemes-IN Web Application is a user-friendly and intuitive platform that aims to provide easy access to a variety of welfare schemes available.",
		icon: SchemesIcon,
		image: Schemes,
		active: false,
		link: "https://schemesin.netlify.app/",
		repo: "https://github.com/john-aja/Schemes-IN-Frontend",
	},
	{
		title: "Fabmatic",
		description:
			"Fabmatic Trader, a single-page Angular application, showcases Fabmatic Trading WLL's laundry services.",
		icon: FabmaticIcon,
		image: Fabmatic,
		active: false,
		link: "https://fabmatictrading.netlify.app/",
		repo: "https://github.com/john-aja/Fabmatic-Traders",
	},
	{
		title: "Porfolio - 2k21",
		description:
			"My portfolio site offers insights into my work, skills, and experiences, featuring a responsive design.",
		icon: PortfolioIcon,
		image: Portfolio,
		active: false,
		link: "https://ajramportfolio.netlify.app/",
		repo: "https://github.com/john-aja/Portfolio-2021",
	},
	{
		title: "TrackTwin",
		description:
			"This web-based memory game challenges players to match pairs of cards using HTML, CSS, and JavaScript.",
		icon: TrackTwinIcon,
		image: TrackTwin,
		active: false,
		link: "https://tracktwin.netlify.app/",
		repo: "https://github.com/john-aja/GameApp-TrackTwin",
	},
	{
		title: "Manoj Eng.",
		description:
			"Manoj Engineering's website highlights their manufacturing expertise, built with HTML, CSS, and JavaScript.",
		icon: ManojEngineeringIcon,
		image: ManojEngineering,
		active: false,
		link: "https://manojengineering.netlify.app",
		repo: "https://github.com/john-aja/Manoj-Engineering",
	},

	{
		title: "Galaxy Explore",
		description:
			"Explore the wonders of the Milky Way with this single-page website, designed using HTML, CSS, and JavaScript.",
		icon: GalaxyIcon,
		image: Galaxy,
		active: false,
		link: "https://exploregalaxy.netlify.app/",
		repo: "https://github.com/john-aja/Galaxy-Explorer",
	},
	{
		title: "Dice Game",
		description:
			"Web-based app allows you to play an exciting dice game against an opponent. Developed using HTML, CSS, and JavaScript.",
		icon: DiceIcon,
		image: Dice,
		active: false,
		link: "https://rolldicegameapp.netlify.app/",
		repo: "https://github.com/john-aja/Dice-Game",
	},
	{
		title: "Mappy",
		description:
			"Track your activities and stats with this simple app, including running, cycling, and more, built with HTML, CSS, and JavaScript.",
		icon: MappyIcon,
		image: Mappy,
		active: false,
		link: "https://mappyapp.netlify.app/",
		repo: "https://github.com/john-aja/Activity-Tracker-Mappy",
	},

	{
		title: "Guess Number",
		description:
			"Guess a number between 1 and 20 in this web-based game created using HTML, CSS, and JavaScript.",
		icon: GuessIcon,
		image: Guess,
		active: false,
		link: "https://guessnumberapp.netlify.app/",
		repo: "https://github.com/john-aja/Guess-My-Number",
	},
	{
		title: "Blue Construction",
		description:
			"Blue Construction's single-page website showcases their construction services and projects.",
		icon: BlueIcon,
		image: Blue,
		active: false,
		link: "https://blueconstruction.netlify.app",
		repo: "https://github.com/john-aja/Blue-Construction",
	},
];
const WorksPage: React.FC = () => {
	return (
		<div className="works-container">
			<div className="works-intro">
				<p className="title">BROWSE MY CREATIONS</p>

				<div className="my-works">
					<ProjectCard projects={projects} />
				</div>
			</div>
		</div>
	);
};

export default WorksPage;
