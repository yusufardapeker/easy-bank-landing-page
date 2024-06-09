import React from "react";
import "./features.scss";

import FeaturesHead from "./components/FeaturesHead";
import FeaturesCard from "./components/FeaturesCard";

function Features() {
	return (
		<div id="features">
			<div className="container">
				<FeaturesHead />
				<FeaturesCard />
			</div>
		</div>
	);
}

export default Features;
