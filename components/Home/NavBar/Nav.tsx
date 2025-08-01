"use client";

import DemoButton from "@/components/Helper/DemoButton";
import LoginButton from "@/components/Helper/LoginButton";
import { navLinks } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";

type Props = {
	navOpen: () => void;
};

const Nav = ({ navOpen }: Props) => {
	const [navBg, setNavBg] = useState(false);

	useEffect(() => {
		const handler = () => {
			if (window.scrollY >= 90) setNavBg(true);
			else setNavBg(false);
		};

		window.addEventListener("scroll", handler);

		return () => window.removeEventListener("scroll", handler);
	}, []);

	return (
		<div
			className={`${
				navBg ? "bg-blue-200 opacity-95 shadow-md" : "fixed"
			} fixed z-[100] h-[12vh] w-full transition-all duration-200`}
		>
			<div className="flex items-center justify-between h-full sm:w-[80%] w-[90%] mx-auto">
				{/* logo */}
				<div>
					<Image src={"/logo.svg"} alt={"Logo"} width={150} height={150} />
				</div>

				{/* nav subsection */}
				<div className="flex items-center justify-center space-x-4">
					{/* navLinks */}
					<div className="hidden lg:flex items-center justify-center">
						<div className="flex items-center justify-center space-x-4">
							{navLinks.map((link) => (
								<Link
									href={link.href}
									key={link.id}
									className="text-light-white hover:text-white transition duration-100"
								>
									<p>{link.label}</p>
								</Link>
							))}
						</div>
					</div>

					{/* Buttons */}
					<div className="hidden lg:flex items-center justify-center space-x-2">
						{/* Login Button */}
						<LoginButton />

						{/* Demo Button */}
						<DemoButton />
					</div>

					{/* humburger Menu */}
					<RiMenuFill
						onClick={navOpen}
						className="text-white hover:text-light-white transition duration-100 h-8 w-8 lg:hidden"
					/>
				</div>
			</div>
		</div>
	);
};

export default Nav;
