"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Responsive = () => {
	// Mobile Menu Open Status
	const [showNav, setShowNav] = useState(false);

	const handleNavOpen = () => setShowNav(true);
	const handleNavClose = () => setShowNav(false);

	return (
		<div>
			<Nav navOpen={handleNavOpen} />
			<MobileNav navClose={handleNavClose} showNav={showNav} />
		</div>
	);
};

export default Responsive;
