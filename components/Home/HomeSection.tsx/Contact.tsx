import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const contact = () => {
	return (
		<div className="pt-16 pb-16 bg-white">
			<div data-aos="fade-up">
				<h2 className="text-primary-black text-lg md:text-xl lg:text-2xl font-bold mb-1 text-center">
					Get in Touch
				</h2>

				<span className="w-16 h-1 bg-primary-black block mx-auto mb-4"></span>

				<p className="text-sm md:text-base font-regular text-light-white mb-8 text-center p-4">
					We’d love to hear from you—reach out with any questions, <br />
					feedback, or just to say hello.
				</p>

				<div
					className="w-[90%] md:w-[80%] lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div className="h-full">
						<input
							type="text"
							placeholder="Name"
							className="block text-black bg-gray-300 shadow-md py-3.5 px-6 rounded-md outline-none focus:ring-2 focus:ring-primary-black w-full mb-4"
						/>
						<input
							type="email"
							placeholder="Email"
							className="block text-black bg-gray-300 shadow-md py-3.5 px-6 rounded-md outline-none focus:ring-2 focus:ring-primary-black w-full mb-4"
						/>
						<input
							type="text"
							placeholder="Subject"
							className="block text-black bg-gray-300 shadow-md py-3.5 px-6 rounded-md outline-none focus:ring-2 focus:ring-primary-black w-full"
						/>
					</div>
					<div className="h-full">
						<textarea
							placeholder="Message"
							className="block text-black bg-gray-300 shadow-md py-3.5 px-6 rounded-md outline-none focus:ring-2 focus:ring-primary-black w-full mb-4 h-full"
						/>
					</div>
				</div>

				<div data-aos="fade-up" data-aos-delay="150">
					<button className="flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 rounded-sm py-4 px-6 text-white gap-2 mx-auto mt-8 hover:bg-text-indigo-600 transition duration-100 cursor-pointer">
						<FaPaperPlane /> Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default contact;
