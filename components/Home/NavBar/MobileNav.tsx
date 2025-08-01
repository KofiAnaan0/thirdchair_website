import DemoButton from "@/components/Helper/DemoButton";
import LoginButton from "@/components/Helper/LoginButton";
import { navLinks } from "@/constants/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
	showNav: boolean;
	navClose: () => void;
};

const MobileNav = ({ navClose, showNav }: Props) => {
	const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

	return (
		<div className="lg:hidden">
			{/* overlay */}
			<div
				className={`fixed ${navOpen} inset-0 z-[1002] bg-black opacity-70 h-screen w-full transform transition-all duration-500`}
			></div>

			{/* Menu */}
			<div
				className={`fixed ${navOpen} z-[1050] space-y-6 h-full w-[80%] sm:w-[60%] bg-blue-300 transform transition-all duration-500 delay-300 flex flex-col items-center pt-[200px]`}
			>
				{/* navigation */}
				{navLinks.map((link) => (
					<Link href={link.href} key={link.id}>
						<p className="w-fit border-b-[1.5px] border-white pb-1 text-xl sm:text-[30px] text-white">
							{link.label}
						</p>
					</Link>
				))}

				{/* Buttons */}
				<div className="flex flex-col items-center justify-center space-y-4">
					{/* Login Button */}
					<LoginButton />

					{/* Demo Button */}
					<DemoButton />
				</div>

				{/* close Button */}
				<CgClose
					onClick={navClose}
					className="absolute top-[0.9rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
				/>
			</div>
		</div>
	);
};

export default MobileNav;
