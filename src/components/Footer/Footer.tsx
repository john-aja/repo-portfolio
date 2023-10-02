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
						<a
							href="https://www.instagram.com/im_jon_aj"
							target="_blank"
							rel="noreferrer"
						>
							<img src={Instagram} alt="" />
						</a>
						<a
							href="https://www.linkedin.com/in/ram-aj/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={Linkedin} alt="" />
						</a>
						<a
							href="mailto:janakiram.0695@gmail.com?subject= Inquiry from Your Portfolio Website&body=I visited your portfolio and would like to discuss potential opportunities or collaborations."
							target="_blank"
							rel="noreferrer"
						>
							<img src={Mail} alt="" />
						</a>
						<a
							href="https://github.com/john-aja"
							target="_blank"
							rel="noreferrer"
						>
							<img src={Git} alt="" />
						</a>
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
