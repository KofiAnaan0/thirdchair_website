"use client";

import { brandLogo } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brands = () => {
	// // ref div
	// const scrollRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	// actual div
	// 	const scroller = scrollRef.current;

	// 	function Addanimation() {
	// 		// Element availability check
	// 		if (!scroller) return;

	// 		// Get the inner element
	// 		const innerScroller = scroller.querySelector(".scroll_inner");

	// 		// Availability check
	// 		if (!innerScroller) return;

	// 		// Prevent recloning
	// 		if (innerScroller.getAttribute("data-cloned") === "true") return;

	// 		const innerScrollerChildren = Array.from(innerScroller.children);

	// 		// cloning each element
	// 		innerScrollerChildren.forEach((item) => {
	// 			const extendedLogs = item.cloneNode(true) as HTMLElement;

	// 			innerScroller.append(extendedLogs);
	// 		});

	// 		innerScroller.setAttribute("data-cloned", "true");
	// 	}

	// 	Addanimation();
	// }, []);

	return (
		<div
			style={{
				background: "radial-gradient(circle, #536F8C 0%, #90C0F2 100%)",
			}}
		>
			<div className="w-[90%] md:w-[80%] mx-auto">
				<div data-aos="fade-up">
					{/* heading */}
					<h2 className="text-primary-black text-base md:text-lg font-medium md:text-center">
						Join 100+ Brands Turning Missed <br /> IP Use Into Real Revenue with
						Third Chair
					</h2>

					<div
						className="scroller w-full space-x-8 py-8"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						{/* logos */}
						<div className="flex items-center justify-between space-x-4 w-full scroll_inner">
							{brandLogo.map((brand) => (
								<Link href={brand.href} key={brand.id}>
									<Image src={brand.Imageurl} alt={"Logo Image"} height={50} />
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brands;
