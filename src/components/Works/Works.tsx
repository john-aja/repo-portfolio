import React from "react";
import "./Works.css";
import ProjectCard from "./ProjectCard";

import TravelistIcon from "../../assets/projects/logo/travelist.svg";
import Travelist from "../../assets/projects/TRAVELIST.jpeg";

import LibraryIcon from "../../assets/projects/logo/library.svg";
import Library from "../../assets/projects/LIBRARY.jpg";

import Bankist from "../../assets/projects/BANKIST.jpg";
import BankistIcon from "../../assets/projects/logo/bankist.svg";

import Schemes from "../../assets/projects/SCHEMES.jpg";
import SchemesIcon from "../../assets/projects/logo/schemes.svg";

import Fabmatic from "../../assets/projects/FABMATIC.jpg";
import FabmaticIcon from "../../assets/projects/logo/fabmatic.svg";

import PortfolioIcon from "../../assets/projects/logo/portfolio.svg";
import Portfolio from "../../assets/projects/PORTFOLIO.jpg";

import TrackTwinIcon from "../../assets/projects/logo/track-twin.svg";
import TrackTwin from "../../assets/projects/MEMORYGAME.jpg";

import ManojEngineeringIcon from "../../assets/projects/logo/engineering.svg";
import ManojEngineering from "../../assets/projects/ENGINEERING.jpg";

import Galaxy from "../../assets/projects/GALAXY.jpg";
import GalaxyIcon from "../../assets/projects/logo/galaxy.svg";

import Dice from "../../assets/projects/DICE.jpg";
import DiceIcon from "../../assets/projects/logo/dice.svg";

import Mappy from "../../assets/projects/MAPPY.jpg";
import MappyIcon from "../../assets/projects/logo/mappy.svg";

import Guess from "../../assets/projects/GUESS NUMBER.jpg";
import GuessIcon from "../../assets/projects/logo/guess.svg";

import Blue from "../../assets/projects/BLUE-CONSTRUCTION.jpg";
import BlueIcon from "../../assets/projects/logo/blue.svg";

const projects: Project[] = [
	{
		title: "Library",
		description:
			"This app allows users to manage a library, view books, mark them as taken, and vote for unavailable books.",
		icon: LibraryIcon,
		image: Library,
		active: true,
		link: "https://library-management-system-lms.el.r.appspot.com/",
		repo: "https://github.com/john-aja/Library-Management-System---V1",
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
		title: "Schemes",
		description:
			"This application utilizes Angular and Tailwind technologies that aims to provide easy access to a variety of schemes.",
		icon: SchemesIcon,
		image: Schemes,
		active: false,
		link: "https://schemesin.netlify.app/",
		repo: "https://github.com/john-aja/Schemes-IN-Frontend",
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
		title: "Track Twin",
		description:
			"This web-based memory game challenges players to match pairs of cards using HTML, CSS, and JavaScript.",
		icon: TrackTwinIcon,
		image: TrackTwin,
		active: false,
		link: "https://tracktwin.netlify.app/",
		repo: "https://github.com/john-aja/GameApp-TrackTwin",
	},
	{
		title: "Manoj Engineering",
		description:
			"Manoj Engineering's website highlights their manufacturing expertise, built with HTML, CSS, and JavaScript.",
		icon: ManojEngineeringIcon,
		image: ManojEngineering,
		active: false,
		link: "https://manojengineering.netlify.app",
		repo: "https://github.com/john-aja/Manoj-Engineering",
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
		title: "Bankist",
		description:
			"A simple bank app that enables users to log in and perform various banking actions using HTML, CSS, and JavaScript.",
		icon: BankistIcon,
		image: Bankist,
		active: false,
		link: "https://banker-app.netlify.app/",
		repo: "https://github.com/john-aja/Bankist",
	},

	{
		title: "Mappy",
		description:
			"A Tracking web-app for activities like cycling and running, built with HTML, CSS, and JavaScript.",
		icon: MappyIcon,
		image: Mappy,
		active: false,
		link: "https://mappyapp.netlify.app/",
		repo: "https://github.com/john-aja/Activity-Tracker-Mappy",
	},
	{
		title: "Dice Game",
		description:
			"Web-based app allows you to play an exciting dice game. Developed using HTML, CSS, and JavaScript.",
		icon: DiceIcon,
		image: Dice,
		active: false,
		link: "https://rolldicegameapp.netlify.app/",
		repo: "https://github.com/john-aja/Dice-Game",
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

interface Project {
	title: string;
	description: string;
	icon: string;
	image: string;
	active: boolean;
	link: string;
	repo: string;
}

interface Theme {
	theme: boolean;
}

const WorksPage: React.FC<Theme> = ({ theme }) => {
	return (
		<div className="works-container">
			<div className="works-intro">
				<h2 className="title">BROWSE MY CREATIONS</h2>

				<div className="my-works">
					<ProjectCard projects={projects} theme={theme} />
				</div>
			</div>
		</div>
	);
};

export default WorksPage;
