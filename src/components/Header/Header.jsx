import React from "react";
import "./header.scss";

import Logo from "./components/Logo";
import HamburgerMenu from "./components/HamburgerMenu";
import Navbar from "./components/Navbar";
import Button from "../Shared/Button/Button";

function Header() {
	return (
		<header>
			<div className="container">
				<Logo />
				<HamburgerMenu />
				<Navbar />
				<Button />
			</div>
		</header>
	);
}

export default Header;
