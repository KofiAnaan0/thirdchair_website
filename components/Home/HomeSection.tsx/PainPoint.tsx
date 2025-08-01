import DemoButton from "@/components/Helper/DemoButton";
import { bodyText } from "@/constants/constant";
import React from "react";

const PainPoint = () => {
	return (
		<div className="pt-16 pb-16 bg-white flex flex-col justify-center items-center">
			<div className="w-[90%] md:w-[80%] mx-auto">
				<div data-aos="fade-up">
					{/* heading */}
					<h2 className="text-primary-black text-lg md:text-xl lg:text-2xl font-bold md:text-center mb-6">
						Tired of Watching Big Brands Profit from <br /> Your Work? We Help
						You Turn Infringement Into Income
					</h2>

					{/* description */}
					<div data-aos="fade-up" data-aos-delay="150">
						{bodyText.map((paragraph) => (
							<p
								key={paragraph.id}
								className="text-light-white text-sm md:text-base md:text-center mb-4"
							>
								{paragraph.text}
							</p>
						))}
					</div>

					{/* CAT */}
					<div
						className="flex justify-center items-center mt-10"
						data-aos="fade-up"
						data-aos-delay="150"
					>
						<DemoButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PainPoint;
