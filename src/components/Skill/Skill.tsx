import React, { useState, useRef, useEffect } from "react";
import "./Skill.css";

const SkillPage: React.FC = () => {
	const [projectsCount, setProjectsCount] = useState(0);
	const [yearsOfExperience, setYearsOfExperience] = useState(0);

	const skillsSectionRef = useRef(null);

	const incrementCounts = () => {
		let projects = 0;
		let experience = 0;

		const projectsInterval = setInterval(() => {
			if (projects < 13) {
				projects++;
				setProjectsCount(projects);
			} else {
				clearInterval(projectsInterval);
			}
		}, 100);

		const experienceInterval = setInterval(() => {
			if (experience < 3) {
				experience++;
				setYearsOfExperience(experience);
			} else {
				clearInterval(experienceInterval);
			}
		}, 100);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					incrementCounts();
				} else {
					setProjectsCount(0);
					setYearsOfExperience(0);
				}
			},
			{ threshold: 0.1 },
		);

		if (skillsSectionRef.current) {
			observer.observe(skillsSectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="skill-container">
			<div className="skill-intro">
				<p className="title">CRAFTING THE WEB</p>
				<div className="skill-content-container" ref={skillsSectionRef}>
					<div className="passion-section">
						<p className="passion-header">Fueled by Passion</p>
						<p className="passion-text">
							My unwavering passion lies in frontend development. Proficient in
							Angular, I construct robust, scalable solutions. In the backend, I
							leverage technologies like Express.js, TypeORM, and PostgreSQL to
							design comprehensive web applications. This continuous journey of
							learning fuels my dedication, inspiring me to consistently exceed
							expectations and redefine digital experiences.
						</p>
					</div>
					<div className="skill-section">
						<p className="skill-header">Skills in My Toolbox</p>
						<ul className="skill-ul">
							<li>Frontend Development</li>
							<li>Angular (Expertise)</li>
							<li>React (Current Focus)</li>
							<li>Express.js</li>
							<li>TypeORM</li>
							<li>PostgreSQL</li>
						</ul>
					</div>

					<div className="skill-section">
						<p className="skill-header">My Digital Creations</p>
						<p className="count">{projectsCount}+</p>
					</div>
					<div className="passion-section">
						<p className="passion-header">Years in the Field</p>
						<p className="count">{yearsOfExperience}+</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillPage;
