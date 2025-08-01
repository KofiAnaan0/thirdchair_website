import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="pb-4 pt-16 bg-light-white">
			<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] md:w-[80%] mx-auto gap-10">
				{/* first part */}
				<div className="flex flex-col items-center space-y-5">
					<Image src={Logo} alt={"Image Logo"} className="w-fit" />
					<p className="text-sm md:text-base text-white font-normal">
						Backed by Y Combinator, we turn unpaid IP use into real revenue for
						creators.
					</p>
					<div className="flex items-center space-x-3 w-full">
						<div className="bg-sky-800 flex flex-col items-center justify-center rounded-full cursor-pointer hover:bg-sky-950 transition duration-100 w-8 h-8">
							<FaLinkedin />
						</div>
						<div className="bg-rose-700 flex flex-col items-center justify-center rounded-full cursor-pointer hover:bg-rose-900 transition duration-100 w-8 h-8">
							<FaYoutube />
						</div>
						<div className="bg-sky-500 flex flex-col items-center justify-center rounded-full cursor-pointer hover:bg-sky-700 transition duration-100 w-8 h-8">
							<FaTwitter />
						</div>
					</div>
				</div>

				{/* second */}
				<div className="flex flex-col space-y-5 w-full">
					<h2 className="font-bold text-lg md:text-xl lg:text-2xl text-white">
						Company
					</h2>
					<Link
						href={"#"}
						className="text-sm md:text-base text-gray-300 hover:text-gray-400 font-medium"
					>
						About Us
					</Link>
					<Link
						href={"#"}
						className="text-sm md:text-base text-gray-300 hover:text-gray-400 font-medium"
					>
						Services
					</Link>
					<Link
						href={"#"}
						className="text-sm md:text-base text-gray-300 hover:text-gray-400 font-medium"
					>
						Careers
					</Link>
				</div>

				{/* third */}
				<div className="flex flex-col space-y-5 w-full">
					<h2 className="font-bold text-lg md:text-xl lg:text-2xl text-white">
						Support
					</h2>
					<Link
						href={"#"}
						className="text-sm md:text-base text-gray-300 hover:text-gray-400 font-medium"
					>
						Legal Information
					</Link>
					<Link
						href={"#"}
						className="text-sm md:text-base text-gray-300 hover:text-gray-400 font-medium"
					>
						Privacy Policies
					</Link>
					<Link
						href={"#"}
						className="text-sm md:text-base text-gray-300 hover:text-gray-400 font-medium"
					>
						Terms & Conditions
					</Link>
					<Link
						href={"#"}
						className="text-sm md:text-base text-gray-300 hover:text-gray-400 font-medium"
					>
						Report Abuse
					</Link>
				</div>

				{/* fourth */}
				<div>
					<h2 className="font-bold text-lg md:text-xl lg:text-2xl text-white">
						Get In Touch
					</h2>
					<div className="mt-6">
						<p className="text-sm md:text-base text-gray-300 mb-1">Our Email</p>
						<p className="font-bold text-sm md:text-base text-white">
							support@thirdchair.com
						</p>
					</div>
				</div>
			</div>
			{/* Bottom Part */}
			<div className="flex justify-center items-center border-t w-[80%] text-gray-600 text-sm mt-8 mx-auto pt-4">
				<p className="text-center text-gray-300">
					© 2025 Watchdog, AI Inc. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
