import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import SkillsSection from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import { FaFilePdf } from "react-icons/fa";
import {
	BiRightArrow,
	BiRightArrowAlt,
	BiRightArrowCircle,
} from "react-icons/bi";

const href = "/HARSH's_RESUME.pdf";

// Enhanced Cursor with particle trail
const EnhancedCursor = () => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<>
			{/* Main cursor glow */}
			<motion.div
				className="fixed pointer-events-none w-36 h-36 rounded-full z-40"
				style={{
					left: mousePos.x - 64,
					top: mousePos.y - 64,
					background:
						"radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 80%)",
					filter: "blur(8px)",
				}}
				animate={{
					scale: [1, 1.1, 1],
				}}
				transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
			/>
		</>
	);
};

// Floating tech icons/symbols background
const techElements = [
	"⚛️",
	"🔗",
	"☁️",
	"🚀",
	"λ",
	"{}",
	"</>",
	"💎",
	"Web3",
	"DeFi",
	"React",
	"Node",
	"Next",
	"JS",
	"Solidity",
	"Rust",
];

const generateFloatingConfigs = (count) =>
	Array.from({ length: count }, () => ({
		top: Math.random() * 100,
		left: Math.random() * 100,
		duration: 4 + Math.random() * 4,
		delay: Math.random() * 3,
		direction: Math.random() > 0.5 ? 1 : -1,
		scale: 0.8 + Math.random() * 0.5,
		blur: Math.random() > 0.5,
		zIndex: Math.floor(Math.random() * 3),
	}));

const FloatingTech = () => {
	const configs = useMemo(
		() => generateFloatingConfigs(techElements.length),
		[]
	);

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{techElements.map((tech, i) => {
				const { top, left, duration, delay, direction, scale, zIndex } =
					configs[i];

				return (
					<motion.div
						key={i}
						className={`absolute text-indigo-400 dark:text-indigo-300/50 font-mono mt-8 text-sm `}
						style={{
							top: `${top}%`,
							left: `${left}%`,
							transform: `scale(${scale})`,
							zIndex,
						}}
						animate={{
							y: [0, direction * 30, 0],
							rotate: [0, direction * 10, -direction * 10, 0],
							opacity: [0.1, 0.4, 0.1],
						}}
						transition={{
							duration,
							repeat: Infinity,
							delay,
							ease: "easeInOut",
						}}
					>
						{tech}
					</motion.div>
				);
			})}
		</div>
	);
};

// Typewriter effect component
const TypeWriter = ({ texts, className = "" }) => {
	const [currentText, setCurrentText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(
			() => {
				const current = texts[currentIndex % texts.length];

				if (isDeleting) {
					setCurrentText(current.substring(0, currentText.length - 1));
					if (currentText === "") {
						setIsDeleting(false);
						setCurrentIndex((prev) => prev + 1);
					}
				} else {
					setCurrentText(current.substring(0, currentText.length + 1));
					if (currentText === current) {
						setTimeout(() => setIsDeleting(true), 2000);
					}
				}
			},
			isDeleting ? 50 : 100
		);

		return () => clearTimeout(timeout);
	}, [currentText, isDeleting, currentIndex, texts]);

	return (
		<span className={className}>
			{currentText}
			<motion.span
				animate={{ opacity: [1, 0] }}
				transition={{ duration: 0.8, repeat: Infinity }}
				className="ml-1"
			>
				|
			</motion.span>
		</span>
	);
};

// Skill badge component with hover effects
const SkillBadge = ({ skill, delay = 0, isHighlight = false }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			whileHover={{
				scale: 1.05,
				rotate: [-1, 1, -1, 0],
				transition: { rotate: { duration: 0.3 } },
			}}
			whileTap={{ scale: 0.95 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.3 }}
			className={`group relative px-4 py-2 rounded-lg border cursor-pointer overflow-hidden ${
				isHighlight
					? "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-400/50 dark:from-indigo-400/10 dark:to-purple-400/10 dark:border-indigo-300/50"
					: "bg-white/80 dark:bg-slate-800/80 border-gray-300 dark:border-slate-600/80 hover:border-indigo-400/60 dark:hover:border-indigo-300/60"
			}`}
		>
			{/* Animated background on hover */}
			<motion.div
				className={`absolute inset-0 ${
					isHighlight
						? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-400/20 dark:to-purple-400/20"
						: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10"
				}`}
				initial={{ x: "-100%" }}
				whileHover={{ x: 0 }}
				transition={{ duration: 0.3 }}
			/>

			<span
				className={`relative z-10 font-medium transition-colors ${
					isHighlight
						? "text-indigo-700 dark:text-indigo-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-200"
						: "text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-200"
				}`}
			>
				{skill}
			</span>

			{/* Sparkle effect */}
			<motion.div
				className={`absolute top-1 right-1 w-1 h-1 rounded-full ${
					isHighlight
						? "bg-amber-400 dark:bg-amber-300"
						: "bg-indigo-400 dark:bg-indigo-300"
				}`}
				animate={{
					scale: [0, 1, 0],
					opacity: [0, 1, 0],
				}}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					delay: Math.random() * 2,
				}}
			/>
		</motion.div>
	);
};

// Animated Letter Component
const AnimatedLetter = ({ letter, index, delay = 0 }) => {
	return (
		<motion.span
			className="inline-block relative cursor-pointer"
			initial={{ opacity: 0, y: 100, rotateX: 90 }}
			animate={{ opacity: 1, y: 0, rotateX: 0 }}
			transition={{
				delay: delay + index * 0.1,
				duration: 0.6,
				type: "spring",
				stiffness: 100,
			}}
			whileHover={{
				scale: 1.1,
				y: -8,
				rotateZ: [-2, 2, -2, 0],
				filter: "drop-shadow(0 8px 16px rgba(99, 102, 241, 0.4))",
				transition: {
					rotateZ: { duration: 0.1 },
					y: { type: "spring", stiffness: 300, damping: 10 },
					scale: { type: "spring", stiffness: 300, damping: 10 },
				},
			}}
			whileTap={{ scale: 0.95 }}
		>
			{letter}
			{/* Sparkle effect on hover */}
			<motion.div
				className="absolute -top-2 -right-1 w-1 h-1 bg-amber-400 rounded-full opacity-0"
				whileHover={{
					opacity: [0, 1, 0],
					scale: [0, 1.5, 0],
					transition: { duration: 0.6 },
				}}
			/>
		</motion.span>
	);
};

// Main component
const HarshPanghalPortfolio = () => {
	const { theme } = useTheme();
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	const web3Skills = ["Blockchain", "Smart Contracts", "DeFi", "NFTs", "DAOs"];
	const web2Skills = ["Full-Stack", "APIs", "Databases", "Cloud Deploy"];

	const typewriterTexts = [
		"Full-Stack Developer",
		"Blockchain Engineer",
		"Web3 Innovator",
		"Tech Enthusiast",
	];

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const renderAnimatedName = (name, delay = 0) => {
		return name
			.split("")
			.map((letter, index) => (
				<AnimatedLetter
					key={`${name}-${index}`}
					letter={letter === " " ? "\u00A0" : letter}
					index={index}
					delay={delay}
				/>
			));
	};

	return (
		<div
			className={`min-h-screen md:pt-8 transition-colors duration-500 relative overflow-hidden ${
				theme === "dark"
					? "bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#11111b] text-white"
					: "bg-gradient-to-br from-gray-50 via-white to-indigo-50 text-gray-900"
			}`}
		>
			<EnhancedCursor />
			<FloatingTech />

			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left z-40"
				style={{ scaleX: scrollYProgress }}
			/>

			{/* Hero Section */}
			<section
				ref={heroRef}
				className="min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-60 relative z-10"
			>
				{/* Floating geometric shapes */}
				<div className="absolute inset-0 overflow-hidden">
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className={`absolute w-64 h-64 border rounded-lg ${
								theme === "dark"
									? "border-indigo-400/20"
									: "border-indigo-500/30"
							}`}
							style={{
								left: `${20 + i * 30}%`,
								top: `${10 + i * 20}%`,
							}}
							animate={{
								rotate: [0, 360],
								scale: [1, 1.1, 1],
							}}
							transition={{
								duration: 20 + i * 5,
								repeat: Infinity,
								ease: "linear",
							}}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative z-10"
				>
					{/* Greeting */}
					<motion.p
						className="text-indigo-400 dark:text-indigo-300 text-lg mb-6 font-mono"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
					>
						{new Date().getHours() < 12
							? "> Hello there"
							: new Date().getHours() < 18
							? "> Good afternoon"
							: "> Good evening"}
						, I&rsquo;m
					</motion.p>

					{/* Main heading with letter animations */}
					<motion.h1 className="text-6xl md:text-8xl font-extrabold mb-6  tracking-tight">
						<div
							className={`${
								theme === "dark"
									? "bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
									: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
							}`}
						>
							<div className="dark:text-[#fff] text-[#0396ff]  inline-block font-semibold">
								{renderAnimatedName("Harsh", 0.1)}
							</div>
							<span> </span>
							<div className="dark:text-[#fff] text-[#0396ff] inline-block font-semibold">
								{renderAnimatedName("Panghal.", 0.1)}
							</div>
						</div>
					</motion.h1>

					{/* Dynamic subtitle */}
					<motion.h2
						className={`text-2xl md:text-3xl font-medium mb-12 max-w-2xl ${
							theme === "dark" ? "text-slate-300" : "text-gray-700"
						}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.2 }}
					>
						<TypeWriter texts={typewriterTexts} className=" text-indigo-500 " />
					</motion.h2>

					{/* Enhanced CTA buttons */}
					<motion.div
						className="flex  items-center sm:flex-row gap-4 mb-8 pt-6"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.7 }}
					>
						{/* About Button */}
						<Link to="/about">
							<motion.button
								className="relative px-8 py-3 rounded-lg font-semibold text-lg overflow-hidden group text-white bg-gray-100 dark:bg-[#0404058d] shadow-lg shadow-cyan-500/30 dark:shadow-cyan-400/20"
								whileHover="hover"
								whileTap={{ scale: 0.98 }}
							>
								{/* Hover background */}
								<motion.div
									className="absolute inset-0  z-0"
									variants={{ hover: { scale: 1 } }}
									initial={{ scale: 0 }}
									style={{ originX: 0.5, originY: 0.5 }}
									transition={{ duration: 0.3 }}
								/>

								{/* Button text */}
								<span className="relative z-10 text-gray-900 dark:text-gray-100 ">
									About Me
								</span>

								{/* Shine effect */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
									animate={{ x: ["-100%", "200%"] }}
									transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
								/>
							</motion.button>
						</Link>

						{/* Resume button */}
						<a
							href="HARSH's_RESUME.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button
								type="submit"
								className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 text-gray-900 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden  rounded-full group "
							>
								Resume
								<svg
									className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
									viewBox="0 0 16 19"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
										className="fill-gray-800 group-hover:fill-gray-800"
									></path>
								</svg>
							</button>
						</a>
					</motion.div>

					{/* Social proof with mobile social links */}
					<motion.div
						className={`flex items-center gap-6 text-sm mt-12 ${
							theme === "dark" ? "text-slate-400" : "text-gray-600"
						}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2 }}
					>
						<motion.div
							ClassName="flex items-center gap-2"
							whileHover={{
								scale: 1.05,
								color: theme === "dark" ? "#818cf8" : "#6366f1",
							}}
						>
							<span>Web 2</span>
						</motion.div>

						<div
							className={`h-4 w-px ${
								theme === "dark" ? "bg-slate-600" : "bg-gray-400"
							}`}
						/>

						<motion.div
							className="flex items-center gap-2"
							whileHover={{
								scale: 1.05,
								color: theme === "dark" ? "#818cf8" : "#6366f1",
							}}
						>
							<span>Web 3</span>
						</motion.div>
						<div
							className={`h-4 w-px ${
								theme === "dark" ? "bg-slate-600" : "bg-gray-400"
							}`}
						/>
						<motion.div
							className="flex items-center gap-2"
							whileHover={{
								scale: 1.05,
								color: theme === "dark" ? "#818cf8" : "#6366f1",
							}}
						>
							<span>Full Stack</span>
						</motion.div>
					</motion.div>
				</motion.div>
			</section>


			{/* Skills showcase */}
			<section id="skills-section" className="py-16 px-6 md:px-24 lg:px-60">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<motion.h3
						className={`text-3xl md:text-4xl font-semibold mb-4 ${
							theme === "dark" ? "text-slate-100" : "text-gray-900"
						}`}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						_what i do
					</motion.h3>

					<motion.p
						className={`text-lg mb-8 max-w-xl ${
							theme === "dark" ? "text-slate-400" : "text-gray-600"
						}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5 }}
					>
						From brainstorming creative designs to production-ready deployment —
						<span className="text-indigo-400 dark:text-indigo-300  font-medium">
							I do it all
						</span>
						. Think of me as your all-in-one tech enthusiast.
					</motion.p>

					{/* Web2 vs Web3 sections */}
					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<motion.div
							className={`p-6 rounded-xl border backdrop-blur-sm ${
								theme === "dark"
									? "bg-[#0a0a0a]/90 border-slate-700/60"
									: "bg-white/60 border-gray-200/60"
							}`}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.5 }}
						>
							<h4 className="text-xl font-semibold mb-4 text-indigo-500 dark:text-indigo-400">
								Web2 Mastery
							</h4>
							<div className="flex flex-wrap gap-2">
								{web2Skills.map((skill, index) => (
									<SkillBadge key={skill} skill={skill} delay={index * 0.1} />
								))}
							</div>
						</motion.div>

						<motion.div
							className={`p-6 rounded-xl border backdrop-blur-sm ${
								theme === "dark"
									? "bg-[#0a0a0a]/90 border-slate-700/60"
									: "bg-white/60 border-gray-200/60"
							}`}
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<h4 className="text-xl font-semibold mb-4 text-amber-500 dark:text-amber-400">
								Web3 Innovation
							</h4>
							<div className="flex flex-wrap gap-2">
								{web3Skills.map((skill, index) => (
									<SkillBadge
										key={skill}
										skill={skill}
										delay={index * 0.1}
										isHighlight={true}
									/>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
				<SkillsSection />
			</section>

			<section className="py-20 px-6 md:px-24 lg:px-60">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<motion.h3
						className={`text-3xl md:text-4xl font-semibold mb-4 ${
							theme === "dark" ? "text-slate-100" : "text-gray-900"
						}`}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						_projects
					</motion.h3>

					<motion.p
						className={`text-lg mb-12 max-w-3xl ${
							theme === "dark" ? "text-slate-300" : "text-gray-600"
						}`}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						From full-stack web applications to cutting-edge blockchain
						solutions and low level programming, here&apos;s a glimpse of what
						I&apos;ve been building.
					</motion.p>

					{/* Project Categories */}
					<div className="grid md:grid-cols-2 gap-6 mb-12">
						{/* Full-Stack Projects */}
						<motion.div
							className={`group p-6 rounded-xl border backdrop-blur-sm cursor-pointer transition-all duration-300 ${
								theme === "dark"
									? "bg-[#0a0a0a]/90 border-slate-700/60 hover:bg-[#0a0a0a]/30 hover:border-indigo-400/50"
									: "bg-white/60 border-gray-200/60 hover:bg-white/80 hover:border-indigo-400/50"
							}`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							whileTap={{ scale: 0.98 }}
						>
							<div className="flex items-center mb-4">
								<div
									className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
										theme === "dark"
											? "bg-indigo-500/20 text-indigo-400"
											: "bg-indigo-500/10 text-indigo-600"
									}`}
								>
									🚀
								</div>
								<div className="ml-4">
									<h4
										className={`text-xl font-semibold ${
											theme === "dark"
												? "text-slate-100 group-hover:text-indigo-300"
												: "text-gray-900 group-hover:text-indigo-600"
										} transition-colors`}
									>
										Full-Stack Apps
									</h4>
								</div>
							</div>
							<p
								className={`text-sm mb-4 ${
									theme === "dark" ? "text-slate-400" : "text-gray-600"
								}`}
							>
								End-to-end web applications with modern tech stacks, databases,
								and cloud deployment.
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{["Next", "React", "Node.js", "MongoDB", "Express"].map(
									(tech) => (
										<span
											key={tech}
											className={`px-2 py-1 text-xs rounded-md ${
												theme === "dark"
													? "bg-[#0a0a0a]/10 text-slate-300"
													: "bg-gray-100 text-gray-700"
											}`}
										>
											{tech}
										</span>
									)
								)}
							</div>
						</motion.div>

						{/* Blockchain Projects */}
						<motion.div
							className={`group p-6 rounded-xl border backdrop-blur-sm cursor-pointer transition-all duration-300 ${
								theme === "dark"
									? "bg-[#0a0a0a]/90 border-slate-700/60  hover:border-amber-400/50"
									: "bg-white/60 border-gray-200/60 hover:bg-white/80 hover:border-amber-400/50"
							}`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							whileTap={{ scale: 0.98 }}
						>
							<div className="flex items-center mb-4">
								<div
									className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
										theme === "dark"
											? "bg-amber-500/20 text-amber-400"
											: "bg-amber-500/10 text-amber-600"
									}`}
								>
									⛓️
								</div>
								<div className="ml-4">
									<h4
										className={`text-xl font-semibold ${
											theme === "dark"
												? "text-slate-100 group-hover:text-amber-300"
												: "text-gray-900 group-hover:text-amber-600"
										} transition-colors`}
									>
										Blockchain & Web3
									</h4>
								</div>
							</div>
							<p
								className={`text-sm mb-4 ${
									theme === "dark" ? "text-slate-400" : "text-gray-600"
								}`}
							>
								Smart contracts, DeFi protocols, and decentralized applications
								built for the future.
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{["Solidity", "Rust", "Web3.js", "Ethers", "Hardhat"].map(
									(tech) => (
										<span
											key={tech}
											className={`px-2 py-1 text-xs rounded-md ${
												theme === "dark"
													? "bg-slate-700/50 text-slate-300"
													: "bg-gray-100 text-gray-700"
											}`}
										>
											{tech}
										</span>
									)
								)}
							</div>
						</motion.div>
					</div>

					{/* View All Projects Button */}
					<motion.div
						className="text-center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
					>
						<Link to="/projects">
							<motion.a
								className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300 ${
									theme === "dark"
										? "border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900"
										: "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
								}`}
								whileHover={{
									scale: 1.05,
									boxShadow:
										theme === "dark"
											? "0 10px 30px rgba(99, 102, 241, 0.3)"
											: "0 10px 30px rgba(99, 102, 241, 0.2)",
								}}
								whileTap={{ scale: 0.98 }}
							>
								<span>View All Projects</span>
								<motion.div
									className="flex items-center"
									whileHover={{ x: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</motion.div>
							</motion.a>
						</Link>
					</motion.div>
				</motion.div>
			</section>

			{/* Call to action section */}
			<section
				className={`pt-20 px-6 pb-28 md:px-24 lg:px-60 ${
					theme === "dark" ? "" : "bg-indigo-50/50"
				}`}
			>
				<motion.div
					className="text-center max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h3
						className={`text-3xl md:text-4xl font-semibold mb-6 ${
							theme === "dark" ? "text-slate-100" : "text-gray-900"
						}`}
					>
						Ready to Build Something Amazing?
					</h3>
					<p
						className={`text-lg mb-8 ${
							theme === "dark" ? "text-slate-400" : "text-gray-600"
						}`}
					>
						Whether you need a stunning web application, a blockchain solution,
						or anything in between, let&apos;s turn your vision into reality.
					</p>
					<motion.button
						onClick={() =>
							(window.location.href = "mailto:work.harshpanghal@gmail.com")
						}
						className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 text-white rounded-lg font-semibold text-lg shadow-lg"
						whileHover={{
							scale: 1.05,
							boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
						}}
						whileTap={{ scale: 0.95 }}
					>
						Get In Touch
					</motion.button>
				</motion.div>
			</section>
		</div>
	);
};

export default HarshPanghalPortfolio;
