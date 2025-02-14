import React from "react";
import "./Employment.css";
import companylogo from "../../assets/ebm_logo.png";

interface Theme {
	theme: boolean;
}

const EmploymentPage: React.FC<Theme> = ({ theme }) => {
	const text =
		"I work as a Senior Full Stack Developer at ebm-papst Pvt Ltd, where I contribute to the development of a scalable web application. My role involves frontend development with Angular, backend implementation using Node.js, and database management with PostgreSQL. I also design UI/UX mockups in Figma before development to ensure a seamless user experience. My focus is on building efficient, high-performance applications that align with business needs and improve workflow efficiency.";

	return (
		<div className="employment-container">
			<div className="employment-intro">
				<h2 className="title">CURRENTLY ENGAGED WITH</h2>

				<img
					style={theme ? { filter: "invert(1)" } : {}}
					className="company-logo"
					src={companylogo}
					alt="company-logo"
				/>
			</div>
			<p className="employment-content">{text}</p>
		</div>
	);
};

export default EmploymentPage;
