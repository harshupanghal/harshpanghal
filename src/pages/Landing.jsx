import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import DarkBackground from "../components/DarkBackground";
import LightBackground from "../components/LightBackground";
import { useTheme } from "../contexts/ThemeContext";
import SocialLinks from "../components/SocialLinks";
import SkillsSection from "../components/Skills";
import Contact from "./Contact";
import WhatIDo from "../components/WhatIDo";
// import Background from "../components/Background";

const Landing = () => {
	const [isMounted, setIsMounted] = useState(false);
	const { theme } = useTheme(); // Get theme value

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const controls = useAnimation();

	useEffect(() => {
		const handleScroll = () => {
			const section = document.getElementById("about-section");
			if (!section) return;

			const rect = section.getBoundingClientRect();
			const totalHeight = window.innerHeight;
			const progress = Math.min(
				1,
				Math.max(0, (totalHeight - rect.top) / totalHeight)
			);

			controls.start({
				opacity: progress,
				filter: `blur(${(1 - progress) * 8}px)`,
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [controls]);

	return (
		<>
    {theme === "dark" ? (
        <DarkBackground key="dark" />
      ) : (
        <LightBackground key="light" />
      )}
			{/*            HEADER            */}

			<main className="flex flex-col justify-center min-h-screen lg:py-16 sm:py-0 px-6 md:px-24 lg:px-60">
				{/* Name Animation */}
		

				<motion.h1
					className={`text-8xl md:text-8xl font-semibold mt-0 md:mt-10   ${
						theme === "dark" ? "text-gray-100" : "text-gray-800"
					}`}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 20 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					Harsh Panghal
				</motion.h1>

				{/* Tagline (One-liner) */}
				<motion.h2
					className={` text-3xl py-6 md:text-4xl font-medium ${
						theme === "dark" ? "text-gray-300" : "text-gray-700"
					}`}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 20 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
				>
					I build things in{" "}
					<span className="text-sky-600 dark:text-sky-400">Web2</span> &{" "}
					<span className="text-amber-500 dark:text-amber-400">Web3</span>.
				</motion.h2>

				{/* Social Links */}
				<div className="mt-8 sm:mt-16">
					<SocialLinks />
				</div>

				{/* Downward Arrow */}
				<motion.div
					className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
					onClick={() => {
						const aboutSection = document.getElementById("about-section");
						if (aboutSection) {
							aboutSection.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}
					}}
				>
					<span
						className={`text-2xl font-extrabold ${
							theme === "dark" ? "text-gray-100" : "text-gray-900"
						}`}
					>
						↓
					</span>
				</motion.div>
			</main>
			{/*           INTRODUCTION       */}
			<section
				id="about-section"
				className="min-h-screen flex flex-col justify-center px-6 mt-0 sm:mt-10 md:px-20 lg:px-52"
			>
				<motion.div className="max-w-5xl">
					<h2
						className={`text-4xl font-medium md:text-5xl leading-snug text-left ${
							theme === "dark" ? "text-gray-100" : "text-gray-900"
						}`}
					>
						{[
							"I’m a lifelong student of tech.",
							"From brainstorming creative designs to deployment and maintenance, ",
							"I do it all..",
							"Think of me as your all-in-one tech enthusiast.",
						].map((text, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0.3, y: 30 }}
								whileInView={{
									opacity: 1,
									y: 0,
									scale: 1,
									transition: { duration: 0.6, delay: index * 0.2 },
								}}
								viewport={{ once: false, amount: 0.6 }}
								className={`block my-8 transition-opacity duration-300 ${
									index === 2 ? "text-blue-500" : ""
								}`}
							>
								{text}
							</motion.span>
						))}
					</h2>
				</motion.div>
			</section>
			<div className="mt-4 sm:mt-6">
				<WhatIDo />
			</div>
			{/*             SKILLS        */}
			<div className="mt-4 sm:mt-6">
				<SkillsSection />
			</div>
			{/*          CONTACT DETAILS        */}
			<div className="mt-4 sm:mt-6">
				<Contact />
			</div>
		</>
	);
};

export default Landing;
