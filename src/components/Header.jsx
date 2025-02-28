import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavLink = React.memo(({ link, isMobile = false, setMenuOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={link}
      className={`relative font-medium ${
        isMobile ? "text-center text-lg w-full block py-3" : "px-4"
      }`}
    >
      <Link
        to={`/${link.toLowerCase()}`}
        className="hover:text-gray-800 dark:hover:text-blue-200"
        onClick={() => isMobile && setMenuOpen(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative">
          {link}
          <motion.div
            className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gray-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
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
        <div className="max-w-5xl mx-auto px-16 mt-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}

            <motion.div
              className="w-1/3 flex items-center"
              whileHover={{
                scale: 1.05, // Slight scaling for emphasis
                y: -2, // Gentle upward motion
                textShadow: "2px 3px 10px rgba(0, 0, 0, 2)", // Soft glow effect
              }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <Link to="/" className="relative">
                <motion.h1
                  className="text-xl font-bold text-gray-900 dark:text-gray-200 transition-all"
                  whileHover={{
                    letterSpacing: "2px", // Subtle letter spacing effect
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
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 flex items-center justify-center rounded-full"
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
                    {isDark ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-yellow-400"
                      >
                        <path d="M12 3v1M12 20v1M4.22 4.22l.7.7M18.36 18.36l.7.7M1 12h1M22 12h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>

              <button
                className="md:hidden p-2 rounded-md "
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`md:hidden absolute w-full shadow-lg rounded-b-xl transition-all 
        ${
          scrolled
            ? "bg-white/90 dark:bg-[black] backdrop-blur-lg"
            : "bg-white dark:bg-[black] backdrop-blur-lg"
        }`}
            >
              <nav className="px-4 py-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link}
                    link={link}
                    isMobile={true}
                    setMenuOpen={setMenuOpen}
                  />
                ))}
              </nav>
            </motion.div>
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

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 pt-6 pb-2 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(255,255,255,0.7)] dark:bg-[black]"
          : "bg-transparent"
      }`}
    >
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
