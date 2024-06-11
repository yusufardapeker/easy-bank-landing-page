import { React, useRef, useEffect } from "react";

import bgMockups from "../../../images/image-mockups.png";
import bgIntroMobile from "../../../images/bg-intro-mobile.svg";
import bgIntroDesktop from "../../../images/bg-intro-desktop.svg";

function ImageContent() {
	return (
		<>
			<img className="bg-intro-desktop" src={bgIntroDesktop} />
			<img className="bg-intro-mobile" src={bgIntroMobile} />

			<img className="bg-mockups" src={bgMockups} />
		</>
	);
}

export default ImageContent;
