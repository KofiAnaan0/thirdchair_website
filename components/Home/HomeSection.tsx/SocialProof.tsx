import Image from "next/image";
import React from "react";
import Ad from "@/public/images/ad.png";
import Fa from "@/public/images/fa.png";
import DemoButton from "@/components/Helper/DemoButton";
import Link from "next/link";

const SocialProof = () => {
	return (
		<div className="pt-16 pb-16 bg-primary-grey flex flex-col items-center justify-center">
			<div className="w-[90%] md:w-[80%] mx-auto">
				<div data-aos="fade-up">
					{/* heading */}
					<h2 className="text-primary-black text-lg md:text-xl lg:text-2xl font-bold md:text-center mb-10">
						Join 100+ Companies monetizing <br /> opportunities they didn&apos;t know
						even existed.
					</h2>

					{/* proof 1 */}
					<div className="grid grid-cols-1 md:grid-cols-2 md:w-[60%] mx-auto gap-8">
						{/* first */}
						<div
							className="bg-primary-black rounded-md p-3"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div>
								<Image
									src={Fa}
									alt={"Image"}
									placeholder="blur"
									className="rounded-sm"
								/>
							</div>

							{/* content */}
							<p className="text-white text-sm md:text-base font-bold pb-8 pt-4">
								Fat Coda Studios Unlocked $60,000 from 250+ Brand Uses
							</p>

							<div className="flex items-center justify-between">
								{/* Button */}
								<DemoButton />

								{/* link */}
								<Link
									href={"#"}
									className="text-sm md:text-base text-blue-500 underline"
								>
									Learn More
								</Link>
							</div>
						</div>

						{/* second */}
						<div
							className="bg-primary-black rounded-md p-3"
							data-aos="fade-up"
							data-aos-delay="150"
						>
							<div>
								<Image
									src={Ad}
									alt={"Image"}
									placeholder="blur"
									className="rounded-sm"
								/>
							</div>

							{/* content */}
							<p className="text-white text-sm md:text-base font-bold pb-8 pt-4">
								The Administration MP Identified 1000+ Unauthorized Commercial
								Uses
							</p>

							<div className="flex items-center justify-between">
								{/* Button */}
								<DemoButton />

								{/* link */}
								<Link
									href={"#"}
									className="text-sm md:text-base text-blue-500 underline"
								>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialProof;
