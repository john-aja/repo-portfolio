import React from "react";
import "./Employment.css";
import companylogo from "../../assets/company_logo.svg";

interface Theme {
	theme: boolean;
}

const EmploymentPage: React.FC<Theme> = ({ theme }) => {
	const text =
		"I work as a Frontend Developer at Surfboard Payments Company, where I'm dedicated to crafting an efficient dashboard. This dashboard is integral to our payment solutions, featuring a robust KYC process. My role blends frontend development with our mission to redefine payments, ensuring a smooth user experience and operational excellence at Surfboard Payments Company.";

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
