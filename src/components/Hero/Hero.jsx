import React from "react";

import "./hero.scss";

import TextContent from "./components/TextContent";
import ImageContent from "./components/ImageContent";
import Button from "../Shared/Button/Button";

function Hero() {
	return (
		<div id="hero">
			<ImageContent />

			<div className="container">
				<TextContent />

				<Button />
			</div>
		</div>
	);
}

export default Hero;
