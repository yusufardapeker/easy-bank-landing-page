import React from "react";
import "./article.scss";

import ArticleCard from "./components/ArticleCard";

function Articles() {
	return (
		<div id="articles">
			<div className="container">
				<h2>Latest Articles</h2>
				<div className="articles-wrapper">
					<ArticleCard />
				</div>
			</div>
		</div>
	);
}

export default Articles;
