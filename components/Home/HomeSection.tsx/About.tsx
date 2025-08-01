import DemoButton from "@/components/Helper/DemoButton";
import React from "react";
import { FaCheck } from "react-icons/fa";
import First from "@/public/images/First.png";

import Image from "next/image";

const About = () => {
	return (
		<div className="pt-16 pb-16 bg-white flex flex-col item-center">
			<div className="w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 mx-auto gap-12 item-center">
				{/* text-content */}
				<div data-aos="fade-up">
					{/* title */}
					<h2 className="text-lg md:text-lx lg:text-2xl text-primary-black font-bold mb-6">
						Recover 4x More Licensing Revenue Without Hiring a Legal Team
					</h2>

					{/* description */}
					<p className="text-light-white font-medium text-sm md:text-base mb-4">
						Third Chair helps creators and rights holders identify ad misuse of
						their IP and automatically collect payment — all without manual
						tracking or legal costs.
					</p>

					{/* list */}
					<div>
						<div className="flex items-center  space-x-4 mb-2">
							<div className="bg-light-black rounded-full w-6 h-6 flex flex-col items-center justify-center text-white">
								<FaCheck />
							</div>
							<p className="text-light-white text-sm md:text-base">
								Detect unauthorized IP use in ads instantly
							</p>
						</div>
						<div className="flex items-center space-x-4 mb-3">
							<div className="bg-light-black rounded-full w-6 h-6 flex flex-col items-center justify-center text-white">
								<FaCheck />
							</div>
							<p className="text-light-white text-sm md:text-base">
								Prioritize high-value violations worth thousands
							</p>
						</div>
						<div className="flex items-center  space-x-4 mb-2">
							<div className="bg-light-black rounded-full w-6 h-6 flex flex-col items-center justify-center text-white">
								<FaCheck />
							</div>
							<p className="text-light-white text-sm md:text-base">
								Automate evidence collection and outreach
							</p>
						</div>
						<div className="flex items-center  space-x-4 mb-2">
							<div className="bg-light-black rounded-full w-6 h-6 flex flex-col items-center justify-center text-white">
								<FaCheck />
							</div>
							<p className="text-light-white text-sm md:text-base">
								Collect without legal hassle or overhead
							</p>
						</div>
					</div>

					{/* button */}
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-fit mt-6">
						<DemoButton />
					</div>
				</div>

				{/* image */}
				<div className="mx-auto" data-aos="zoom-in" data-aos-delay="150">
					<Image
						src={First}
						alt={"Image"}
						placeholder="blur"
						height={380}
						className="rounded-sm"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
