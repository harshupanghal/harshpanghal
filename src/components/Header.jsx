/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavLink = React.memo(({ link, isMobile = false, setMenuOpen }) => {
	const [isHovered, setIsHovered] = useState(false);
	const location = useLocation();
	const to = `/${link.toLowerCase()}`;
	const isActive = location.pathname === to;

	return (
		<motion.div
			key={link}
			className={`relative font-medium ${
				isMobile ? "text-center text-lg w-full block py-3" : "px-4"
			}`}
		>
			<Link
				to={to}
				className={`${
					isActive ? "text-gray-900 dark:text-blue-300" : ""
				} hover:text-gray-800 dark:hover:text-blue-300 transition-colors duration-200`}
				onClick={() => isMobile && setMenuOpen(false)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<span className="relative">
					{link}
					<motion.div
						className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gray-500"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: isHovered || isActive ? 1 : 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						style={{ transformOrigin: "left" }}
					/>
				</span>
			</Link>
		</motion.div>
	);
});

const HeaderContent = React.memo(
	({ theme, toggleTheme, menuOpen, setMenuOpen, scrolled, navLinks }) => {
		const isDark = theme === "dark";

		return (
			<>
				<div className="max-w-5xl mx-auto px-4 mt-2 sm:px-6 lg:px-20">
					<motion.div
						className={`flex items-center justify-between h-16 transition-all duration-300 ${
							scrolled
								? "bg-[rgba(17,17,27,0.4)] rounded-[32px] px-8 h-[80px] backdrop-blur-3xl shadow-md -mt-2 md:mx-12"
								: ""
						}`}
					>
						{/* Logo */}
						<motion.div
							className="w-1/3 flex items-center"
							whileHover={{
								scale: 1.05,
								y: -2,
								textShadow: "2px 3px 10px rgba(0, 0, 0, 0.2)",
							}}
							transition={{ type: "spring", stiffness: 120, damping: 10 }}
						>
							<Link to="/" className="relative">
								<motion.h1
									className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-all"
									whileHover={{
										letterSpacing: "2px",
										transition: { duration: 0.3 },
									}}
								>
									hp.
								</motion.h1>
							</Link>
						</motion.div>

						{/* Navigation */}
						<div className="hidden md:flex w-1/3 justify-center">
							<nav className="flex items-center justify-center space-x-2">
								{navLinks.map((link) => (
									<NavLink key={link} link={link} setMenuOpen={setMenuOpen} />
								))}
							</nav>
						</div>

						{/* Theme Toggle & Mobile Menu */}
						<div className="w-1/3 flex justify-end items-center space-x-4">
							<motion.button
								onClick={toggleTheme}
								className=" w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
								whileHover={{ scale: 1.1, rotate: 180 }}
								whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
							>
								<AnimatePresence mode="wait" initial={false}>
									<motion.div
										key={isDark ? "moon" : "sun"}
										initial={{
											opacity: 0,
											scale: 0.5,
											rotate: isDark ? -90 : 90,
										}}
										animate={{ opacity: 1, scale: 1, rotate: 0 }}
										exit={{ opacity: 0, scale: 0.5, rotate: isDark ? 90 : -90 }}
										transition={{ duration: 0.4 }}
										className="absolute"
									>
										{isDark ? "☀️" : "🌙"}
									</motion.div>
								</AnimatePresence>
							</motion.button>

							<motion.button
								className="md:hidden p-2 rounded-md  transition-colors duration-200"
								onClick={() => setMenuOpen(!menuOpen)}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								aria-label={menuOpen ? "Close menu" : "Open menu"}
							>
								<AnimatePresence mode="wait" initial={false}>
									<motion.div
										key={menuOpen ? "close" : "menu"}
										initial={{ opacity: 0, rotate: -90 }}
										animate={{ opacity: 1, rotate: 0 }}
										exit={{ opacity: 0, rotate: 90 }}
										transition={{ duration: 0.2 }}
									>
										{menuOpen ? <X size={28} /> : <Menu size={28} />}
									</motion.div>
								</AnimatePresence>
							</motion.button>
						</div>
					</motion.div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{menuOpen && (
						<>
							{/* Backdrop */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="md:hidden fixed inset-0 bg-[#11111b] bg-opacity-50 backdrop-blur-[7px] z-30"
								onClick={() => setMenuOpen(false)}
							/>

							{/* Menu Panel */}
							<motion.div
								initial={{ opacity: 0, x: 300 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 300 }}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 30,
									duration: 0.3,
								}}
								className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl z-40 bg-gray-100 dark:bg-[#11111b] border-gray-200"
							>
								{/* Close button */}
								<div className="flex justify-end p-4">
									<motion.button
										onClick={() => setMenuOpen(false)}
										className="p-2 rounded-full  transition-colors duration-200"
										whileHover={{ scale: 1.3 }}
										whileTap={{ scale: 0.95 }}
										aria-label="Close menu"
									>
										<X size={24} />
									</motion.button>
								</div>

								{/* Navigation Links */}
								<nav className="flex flex-col px-6 pt-8 space-y-2">
									{navLinks.map((link, index) => (
										<motion.div
											key={link}
											initial={{ opacity: 0, x: 50 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 + 0.2 }}
										>
											<NavLink
												link={link}
												isMobile={true}
												setMenuOpen={setMenuOpen}
											/>
										</motion.div>
									))}
								</nav>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</>
		);
	}
);

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navLinks = useMemo(() => ["About", "Projects", "Contact"], []);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu on escape key
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape" && menuOpen) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [menuOpen]);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [menuOpen]);

	return (
		<header className="w-full fixed top-0 z-50 transition-all duration-300 pt-6 pb-2">
			<HeaderContent
				theme={theme}
				toggleTheme={toggleTheme}
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				scrolled={scrolled}
				navLinks={navLinks}
			/>
		</header>
	);
};

export default Header;
