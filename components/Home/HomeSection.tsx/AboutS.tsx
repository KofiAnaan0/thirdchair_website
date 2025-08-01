import DemoButton from "@/components/Helper/DemoButton";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Second from "@/public/images/Second.png";

const AboutS = () => {
	return (
		<div className="pt-16 pb-16 bg-white flex flex-col item-center">
			<div className="w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 mx-auto gap-12 item-center">
				{/* image */}
				<div className="mx-auto" data-aos="zoom-in">
					<Image
						src={Second}
						alt={"Image"}
						placeholder="blur"
						height={380}
						className="rounded-sm"
					/>
				</div>

				{/* text-content */}
				<div data-aos="fade-up" data-aos-delay="150">
					{/* title */}
					<h2 className="text-lg md:text-lx lg:text-2xl text-primary-black font-bold mb-6">
						Turn Unlicensed Ad Use Into Passive Income Without Chasing Brands
					</h2>

					{/* description */}
					<p className="text-light-white font-medium text-sm md:text-base mb-4">
						Third Chair lets you uncover and monetize every unauthorized use of
						your intellectual property — with zero manual follow-up required.
					</p>

					{/* list */}
					<div>
						<div className="flex items-center  space-x-4 mb-2">
							<div className="bg-light-black rounded-full w-6 h-6 flex flex-col items-center justify-center text-white">
								<FaCheck />
							</div>
							<p className="text-light-white text-sm md:text-base">
								Stay focused on creating while we recover what you’re owed
							</p>
						</div>
						<div className="flex items-center space-x-4 mb-3">
							<div className="bg-light-black rounded-full w-6 h-6 flex flex-col items-center justify-center text-white">
								<FaCheck />
							</div>
							<p className="text-light-white text-sm md:text-base">
								Monitor your IP across thousands of ad channels
							</p>
						</div>
						<div className="flex items-center  space-x-4 mb-2">
							<div className="bg-light-black rounded-full w-6 h-6 flex flex-col items-center justify-center text-white">
								<FaCheck />
							</div>
							<p className="text-light-white text-sm md:text-base">
								Automatically identify high-payout violations
							</p>
						</div>
						<div className="flex items-center  space-x-4 mb-2">
							<div className="bg-light-black rounded-full w-6 h-6 flex flex-col items-center justify-center text-white">
								<FaCheck />
							</div>
							<p className="text-light-white text-sm md:text-base">
								Collect licensing revenue on autopilot
							</p>
						</div>
					</div>

					{/* button */}
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-fit mt-6">
						<DemoButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutS;
