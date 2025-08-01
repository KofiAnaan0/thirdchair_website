import DemoButton from "@/components/Helper/DemoButton";
import Image from "next/image";
import React from "react";

const Review = () => {
	return (
		<div className="pb-16 pt-16 bg-primary-grey">
			<div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center justify-center">
				<div data-aos="fade-up">
					{/* title */}
					<h2 className="text-primary-black text-lg md:text-xl lg:text-2xl text-center font-bold mb-8">
						Success Stories from Our Users
					</h2>

					{/* text content */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{/* first */}
						<div
							className="bg-white rounded-sm p-4 shadow-md"
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-anchor-placement="top-center"
						>
							<Image
								src={"/images/four-half-star-rating-icon.svg"}
								alt={"Image"}
								height={20}
								width={100}
								className="mb-3"
							/>
							{/* title */}
							<h3 className="text-sm md:text-base font-semibold text-primary-black mb-2">
								From Powerless to Paid
							</h3>

							{/* text content */}
							<p className="text-sm md:text-base font-regular text-light-white mb-3">
								Before Watchdog, I felt powerless to collect the money I was
								owed from big corporations
							</p>

							<div>
								<div className="flex space-x-2 items-center">
									<div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
										<Image
											src={"/proof_profile/Amber.jpg"}
											alt={"Amber profile image"}
											height={48}
											width={48}
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="flex flex-col space-y-0 items-center justify-center">
										<p className="text-sm md:text-base font-semibold text-primary-black">
											Amber Lowe,
										</p>
										<p className="text-sm md:text-base font-regular text-light-white">
											UGC Creator
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* second */}
						<div
							className="bg-white rounded-sm p-4 shadow-md"
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-anchor-placement="top-center"
						>
							<Image
								src={"/images/four-half-star-rating-icon.svg"}
								alt={"Image"}
								height={20}
								width={100}
								className="mb-3"
							/>
							{/* title */}
							<h3 className="text-sm md:text-base font-semibold text-primary-black mb-2">
								4x Revenue in 6 Months
							</h3>

							{/* text content */}
							<p className="text-sm md:text-base font-regular text-light-white mb-3">
								Third Chair has helped 4x my revenue within 6 months! I will
								forever be grateful for this life-changing opportunity!
							</p>

							<div>
								<div className="flex space-x-2 items-center">
									<div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
										<Image
											src={"/proof_profile/Joe.jpg"}
											alt={"Joe profile image"}
											height={48}
											width={48}
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="flex flex-col space-y-0 items-center justify-center">
										<p className="text-sm md:text-base font-semibold text-primary-black">
											Joe Rayhbuck,
										</p>
										<p className="text-sm md:text-base font-regular text-light-white">
											Fat Coda Studios
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* third */}
						<div
							className="bg-white rounded-sm p-4 shadow-md"
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-anchor-placement="top-center"
						>
							<Image
								src={"/images/four-half-star-rating-icon.svg"}
								alt={"Image"}
								height={20}
								width={100}
								className="mb-3"
							/>
							{/* title */}
							<h3 className="text-sm md:text-base font-semibold text-primary-black mb-2">
								Opportunities We Missed
							</h3>

							{/* text content */}
							<p className="text-sm md:text-base font-regular text-light-white mb-3">
								Third Chair is helping us monetize opportunities we didn't know
								even existed.
							</p>

							<div>
								<div className="flex space-x-2 items-center">
									<div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
										<Image
											src={"/proof_profile/Joshua.jpg"}
											alt={"Joshua profile image"}
											height={48}
											width={48}
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="flex flex-col space-y-0 items-center justify-center">
										<p className="text-sm md:text-base font-semibold text-primary-black">
											Joshua Leopold,
										</p>
										<p className="text-sm md:text-base font-regular text-light-white">
											CEO at The Administration MP
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Forth */}
						<div
							className="bg-white rounded-sm p-4 shadow-md"
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-anchor-placement="top-center"
						>
							<Image
								src={"/images/four-half-star-rating-icon.svg"}
								alt={"Image"}
								height={20}
								width={100}
								className="mb-3"
							/>
							{/* title */}
							<h3 className="text-sm md:text-base font-semibold text-primary-black mb-2">
								Nothing Else Comes Close
							</h3>

							{/* text content */}
							<p className="text-sm md:text-base font-regular text-light-white mb-3">
								This is the best product I’ve seen in this category.
							</p>

							<div>
								<div className="flex space-x-2 items-center">
									<div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
										<Image
											src={"/proof_profile/Legal.jpg"}
											alt={"Legal profile image"}
											height={48}
											width={48}
											className="object-cover"
										/>
									</div>
									<div className="flex flex-col space-y-0 items-center justify-center">
										<p className="text-sm md:text-base font-semibold text-primary-black">
											Business & Legal Affairs,
										</p>
										<p className="text-sm md:text-base font-regular text-light-white">
											Top 3 Music Company
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* first */}
						<div
							className="bg-white rounded-sm p-4 shadow-md"
							data-aos="fade-up"
							data-aos-delay="500"
							data-aos-anchor-placement="top-center"
						>
							<Image
								src={"/images/four-half-star-rating-icon.svg"}
								alt={"Image"}
								height={20}
								width={100}
								className="mb-3"
							/>
							{/* title */}
							<h3 className="text-sm md:text-base font-semibold text-primary-black mb-2">
								From Powerless to Paid
							</h3>

							{/* text content */}
							<p className="text-sm md:text-base font-regular text-light-white mb-3">
								Before Watchdog, I felt powerless to collect the money I was
								owed from big corporations
							</p>

							<div>
								<div className="flex space-x-2 items-center">
									<div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
										<Image
											src={"/proof_profile/Amber.jpg"}
											alt={"Amber profile image"}
											height={48}
											width={48}
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="flex flex-col space-y-0 items-center justify-center">
										<p className="text-sm md:text-base font-semibold text-primary-black">
											Amber Lowe,
										</p>
										<p className="text-sm md:text-base font-regular text-light-white">
											UGC Creator
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* button */}
				<div
					data-aos="fade-up"
					data-aos-delay="600"
					className="flex flex-col items-center justify-center md:flex-row space-y-4 md:space-x-4 md:space-y-0 w-fit mt-8"
				>
					<DemoButton />
				</div>
			</div>
		</div>
	);
};

export default Review;
