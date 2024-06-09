import React, { useState } from "react";
import { motion } from "framer-motion";

import hamburgerMenuIcon from "../../../images/icon-hamburger.svg";
import closeIcon from "../../../images/icon-close.svg";

function HamburgerMenu() {
	const [show, setShow] = useState(false);

	const showHamburgerMenu = (e) => {
		console.log();

		if (e.target.src.includes("hamburger")) {
			e.target.src = closeIcon;
			setShow(true);
		} else {
			e.target.src = hamburgerMenuIcon;
			setShow(false);
		}
	};

	return (
		<div className="hamburger-menu-wrapper">
			<img className="hamburger-menu-icon" src={hamburgerMenuIcon} onClick={showHamburgerMenu} />

			{show && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="hamburger-menu"
					>
						<ul className="link-items">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
						</ul>
					</motion.div>

					<div className="overlay"></div>
				</>
			)}
		</div>
	);
}

export default HamburgerMenu;
