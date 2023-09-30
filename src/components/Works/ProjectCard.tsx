import React, { useState, useEffect, useRef } from "react";
import Navigation from "../../assets/nav-arrow.svg";
import LinkIcon from "../../assets/link.svg";
import GitIcon from "../../assets/git.svg";
import "./ProjectCard.css";

type Project = {
	title: string;
	description: string;
	icon: string;
	image: string;
	active: boolean;
	link: string;
	repo: string;
};

interface ProjectContainerProps {
	projects: Project[];
}

const ProjectCard: React.FC<ProjectContainerProps> = ({ projects }) => {
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const activeImageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		console.log(currentProjectIndex);

		if (activeImageRef.current) {
			const activeImage = activeImageRef.current;
			const container = activeImage.parentElement;

			if (container) {
				container.scrollTo({
					left: activeImage.clientWidth * currentProjectIndex - 100,
					behavior: "smooth",
				});
			}
		}
	}, [currentProjectIndex]);

	const changeProject = (index: any) => {
		console.log(index);
		document.querySelector(".shadow")?.classList.add("active");

		if (index !== 13 && index !== -1) {
			setTimeout(() => {
				document.querySelector(".shadow")?.classList.remove("active");
			}, 500);
			setCurrentProjectIndex(index);
			setActiveClass(projects, index);
		}
		if (index === 13) {
			index = 0;
			setTimeout(() => {
				document.querySelector(".shadow")?.classList.remove("active");
			}, 500);
			setCurrentProjectIndex(index);
			setActiveClass(projects, index);
		}
		if (index === -1) {
			index = 12;
			setTimeout(() => {
				document.querySelector(".shadow")?.classList.remove("active");
			}, 500);
			setCurrentProjectIndex(index);
			setActiveClass(projects, index);
		}
	};

	const setActiveClass = (projects: Project[], index: number) => {
		return projects.map((v: Project, i) => {
			if (i === index) {
				v.active = true;
			} else {
				v.active = false;
			}
			return v;
		});
	};

	return (
		<div className="project-container">
			<div className="img-main">
				<div className="progress-mob">
					<img
						src={Navigation}
						alt=""
						onClick={() => changeProject(currentProjectIndex - 1)}
					/>

					<img
						src={Navigation}
						alt=""
						className="previous"
						onClick={() => changeProject(currentProjectIndex + 1)}
					/>
				</div>
				{projects.map((v, index) => (
					<img
						className="hero_img"
						key={index}
						style={
							v.active
								? { transform: "translateX(0%) scale(1)", opacity: "1" }
								: { transform: "translateX(0%) scale(0)", opacity: "0" }
						}
						src={v.image}
						alt=""
					/>
				))}
			</div>

			<div className="project-content">
				<div className="shadow"></div>
				{projects.map((v, index) => (
					<div
						key={index}
						className="project-div"
						style={
							v.active
								? {
										transform: "translateX(0%)",
										position: "relative",
										opacity: "1",
								  }
								: {
										position: "absolute",
								  }
						}
					>
						<div className="project-title">
							<img src={v.icon} alt="" />
							<p>{v.title}</p>
						</div>

						<p className="project-description">{v.description}</p>

						<div className="action-btns">
							<a
								href={v.link}
								target="_blank"
								rel="noreferrer"
								className="site-button"
							>
								<img src={LinkIcon} alt="" />
								Site
							</a>
							<a
								href={v.repo}
								target="_blank"
								rel="noreferrer"
								className="link-button"
							>
								<img src={GitIcon} alt="" />
								Repository
							</a>
						</div>
					</div>
				))}
				<div className="other-projects-section">
					<div className="other-projects">
						{projects.map((project, index) => (
							<img
								key={index}
								ref={index === currentProjectIndex ? activeImageRef : null}
								src={project.image}
								alt=""
								onClick={() => changeProject(index)}
								className={index === currentProjectIndex ? "active" : ""}
							/>
						))}
					</div>
					<div className="progress">
						<img
							src={Navigation}
							alt=""
							onClick={() => changeProject(currentProjectIndex - 1)}
						/>

						<img
							src={Navigation}
							alt=""
							className="previous"
							onClick={() => changeProject(currentProjectIndex + 1)}
						/>
						<div className="project-bar">
							<div
								className="current"
								style={{
									marginLeft: `${7.5 * currentProjectIndex}%`,
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
