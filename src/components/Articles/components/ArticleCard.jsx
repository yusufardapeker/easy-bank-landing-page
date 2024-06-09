import React from "react";

import { ArticlesContent } from "./constant";

function ArticleCard() {
	return (
		<>
			{ArticlesContent.map((card, index) => {
				return (
					<div className="card-item" key={index}>
						<img className="article-img" src={card.image} alt="" />
						<div className="card-body">
							<span className="card-author">{card.author}</span>
							<h4 className="card-title">{card.title}</h4>
							<p className="card-description">{card.description}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default ArticleCard;
