"use client";

import React, { useEffect } from "react";
import Hero from "./HomeSection.tsx/Hero";
import Brands from "./HomeSection.tsx/Brands";
import PainPoint from "./HomeSection.tsx/PainPoint";
import SocialProof from "./HomeSection.tsx/SocialProof";
import About from "./HomeSection.tsx/About";
import AboutS from "./HomeSection.tsx/AboutS";
import Review from "./HomeSection.tsx/Review";
import Contact from "./HomeSection.tsx/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
	useEffect(() => {
		const initAos = async () => {
			await import("aos");

			AOS.init({
				duration: 1000,
				once: true,
				easing: "ease",
				anchorPlacement: "top-bottom",
			});
		};

		initAos();
	}, []);

	return (
		<div className="overflow-hidden">
			<Hero />
			<Brands />
			<PainPoint />
			<SocialProof />
			<About />
			<AboutS />
			<Review />
			<Contact />
		</div>
	);
};

export default Home;
