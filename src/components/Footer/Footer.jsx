import React from "react";
import "./footer.scss";

import LogoSocial from "./components/LogoSocial";
import SiteLinks from "./components/SiteLinks";
import InformationLinks from "./components/InformationLinks";
import Copyright from "./components/Copyright";

function Footer() {
	return (
		<footer>
			<div className="container">
				<LogoSocial />
				<SiteLinks />
				<InformationLinks />
				<Copyright />
			</div>
		</footer>
	);
}

export default Footer;
