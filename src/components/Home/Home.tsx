import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
	const text =
		"A passionate Frontend Developer based in Chennai. I specialise in creating responsive and pixel-perfect web applications, with user-friendly and optimised experiences. My journey involves both frontend and backend technologies, allowing me to build comprehensive web solutions.";
	const textMobile =
		"A passionate Frontend Developer based in Chennai. I specialise in creating responsive and pixel-perfect web applications. My journey involves both frontend and backends.";

	const redWord = "frontend";
	const redWordOne = "backend";
	const words = text.split(" ");
	const wordsMobie = textMobile.split(" ");
	const space = {
		display: "inline-block",
		opacity: "0",
		margin: "0",
		padding: "0",
	};

	return (
		<div className="home-container">
			<div className="intro">
				<p className="hello">Howdy, it's </p>
				<p className="name">Ram || John</p>
				<p className="skill">Front End Developer</p>

				{/* <img
					src="https://readme-typing-svg.demolab.com?font=Bai+Jamjuree&weight=600&size=32&duration=3000&pause=1000&color=F7F7F7&width=370&height=46&lines=Frontend+Developer;Advanced+in+Angular;Backend+Enthusiast;React+Enthusiast"
					alt="Typing SVG"
				/> */}

				<p className="intro-content">
					{words.map((word, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.06 }}
							style={{
								display: "inline-block",
								color:
									word === redWord
										? "var(--text-red)"
										: word === redWordOne
										? "var(--text-red)"
										: "var(--text-white)",
							}}
						>
							{`${word}`}
							<span style={space}>-</span>
						</motion.span>
					))}
				</p>
				<p className="intro-content-mobile">
					{wordsMobie.map((word, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.06 }}
							style={{
								display: "inline-block",
								color:
									word === redWord
										? "var(--text-red)"
										: word === redWordOne
										? "var(--text-red)"
										: "var(--text-white)",
							}}
						>
							{`${word}`}
							<span style={space}>-</span>
						</motion.span>
					))}
				</p>

				<button className="works-button">Works</button>
			</div>
		</div>
	);
};

export default HomePage;
