import React from "react";

import bgMockups from "../../../images/image-mockups.png";
import bgIntroMobile from "../../../images/bg-intro-mobile.svg";
import bgIntroDesktop from "../../../images/bg-intro-desktop.svg";

function ImageContent() {
	return (
		<>
			<picture>
				<source className="bg-intro" media="(min-width:1440px)" srcSet={bgIntroDesktop} />
				<img className="bg-intro" src={bgIntroMobile} alt="" />
			</picture>

			<img className="bg-mockups" src={bgMockups} alt="" />
		</>
	);
}

export default ImageContent;
