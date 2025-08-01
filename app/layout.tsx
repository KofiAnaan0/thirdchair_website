import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/NavBar/Responsive";
import Footer from "@/components/Home/Footer";
import ScrollTop from "@/components/Home/ScrollTop";

const font = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Third Chair",
	description: "AI Agent that help creators monitize their IP",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${font.className} antialiased`}>
				<Responsive />
				{children}
				<Footer />
				<ScrollTop />
			</body>
		</html>
	);
}
