import React from "react";
import "./Employment.css";
import companylogo from "../../assets/company_logo.svg";
import { motion } from "framer-motion";

const EmploymentPage: React.FC = () => {
	const text =
		"I work as a Frontend Developer at Surfboard Payments Company, where I'm dedicated to crafting an efficient dashboard. This dashboard is integral to our payment solutions, featuring a robust KYC process. My role blends frontend development with our mission to redefine payments, ensuring a smooth user experience and operational excellence at Surfboard Payments Company.";
	const words = text.split(" ");
	const space = {
		display: "inline-block",
		opacity: "0",
		margin: "0",
		padding: "0",
	};

	return (
		<div className="employment-container">
			<div className="employment-intro">
				<p className="title">CURRENTLY ENGAGED WITH</p>

				<img className="company-logo" src={companylogo} alt="company-logo" />
			</div>
			<p className="employment-content">
				{words.map((word, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, y: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.06 }}
						style={{
							display: "inline-block",
							color: "var(--text-white)",
						}}
					>
						{`${word}`}
						<span style={space}>-</span>
					</motion.span>
				))}
			</p>
		</div>
	);
};

export default EmploymentPage;
