"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) setIsVisible(true);
			else setIsVisible(false);
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const ScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="fixed bottom-4 right-4 animate-pulse">
			{isVisible && (
				<button
					onClick={ScrollToTop}
					className="rounded-full w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 text-white flex items-center justify-center cursor-pointer"
				>
					<FaArrowUp />
				</button>
			)}
		</div>
	);
};

export default ScrollTop;
