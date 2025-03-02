import React from "react";
import { useTheme } from "../contexts/ThemeContext"; // Import Theme Context

const Footer = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <footer
      className={`w-full  mt-32 pt-8 px-8 md:px-24 lg:px-44 flex flex-col md:flex-row items-center justify-center border-t transition-all gap-4 md:gap-0  ${
        theme === "dark"
          ? "border-gray-700 bg-black/90"
          : "border-gray-200 bg-whhite/80"
      }`}
    >
      {/* Left Side - Copyright */}
      <p className="text-sm md:text-base text-gray-500">
        © 2025 • Harsh Panghal
      </p>
    </footer>
  );
};

export default Footer;
