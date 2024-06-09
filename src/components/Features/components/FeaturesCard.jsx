import React from "react";

import { cardContent } from "./constant";

function FeaturesCard() {
	return (
		<div className="features-card-wrappper">
			{cardContent.map((card, index) => {
				return (
					<div className="cards" key={index}>
						<img src={card.image} />
						<h3>{card.title}</h3>
						<p>{card.description}</p>
					</div>
				);
			})}
		</div>
	);
}

export default FeaturesCard;
