import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full mt-32 pt-10 pb-6 px-6 md:px-24 lg:px-48 border-t transition-all
        ${theme === "dark" ? "border-gray-700 bg-black/90" : "border-gray-200 bg-white/80"}
      `}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left - Copyright */}
        <p className="text-base md:text-base text-gray-500 dark:text-gray-400">
          © 2025 • Harsh Panghal
        </p>

        {/* Right - Quote */}
        <p className="text-sm md:text-sm text-gray-500 light: italic">
          Crafted with calm, shaped with soul.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
