import DemoButton from "@/components/Helper/DemoButton";
import Image from "next/image";
import React from "react";
import HeroImage from "@/public/hero.png";

const Hero = () => {
	return (
		<div
			className="h-screen w-full flex flex-col justify-center"
			style={{
				background: "radial-gradient(circle, #536F8C 0%, #90C0F2 100%)",
			}}
		>
			<div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
				{/* text content */}
				<div data-aos="fade-up">
					{/* heading */}
					<h1 className="text-primary-black text-3xl md:text-4xl lg:text-5xl font-bold leading-[2.5rem] md:leading-[3.5rem] mt-6 mb-6">
						Monitor, Detect, and Collect Licensing Payments from Ads Using Your
						IP
					</h1>

					{/* description */}
					<p className="text-light-white text-sm sm:text-sm md:text-base font-medium">
						Third Chair finds unauthorized ad uses of your work, helps you claim
						what you're owed, and automates the payout—no legal team needed.
					</p>

					{/* Button */}
					<div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:items-center w-fit">
						<DemoButton />
					</div>
				</div>

				{/* image content */}
				<div
					className="mx-auto hidden xl:block"
					data-aos="zoom-in"
					data-aos-delay="150"
				>
					<Image src={HeroImage} alt={"Hero Image"} placeholder="blur" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
