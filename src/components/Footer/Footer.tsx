import React from "react";
import "./Footer.css";
import Git from "../../assets/social-media/Git.svg";
import Linkedin from "../../assets/social-media/Linkedin.svg";
import Instagram from "../../assets/social-media/Instagram.svg";
import Mail from "../../assets/social-media/Gmail.svg";

const FooterPage: React.FC = () => {
	return (
		<div className="footer-container">
			<div className="footer-content-container">
				<p className="footer-title">
					Have a question, project in mind, or just want to say hello? <br />
					<span className="highight-text">I'd love to hear from you!</span>
				</p>
				<div className="footer-text">
					<div className="social-icons">
						<img src={Instagram} alt="" />
						<img src={Linkedin} alt="" />
						<img src={Mail} alt="" />
						<img src={Git} alt="" />
					</div>
					<p>
						Feel free to reach out using the contact details above or use the
						convenient form to send me a message.
					</p>
				</div>
			</div>
		</div>
	);
};

export default FooterPage;
