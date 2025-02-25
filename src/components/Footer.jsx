import React from "react";
import { useTheme } from "../contexts/ThemeContext"; // Import Theme Context
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <footer
      className={`w-full py-5 px-24 mt-8 md:px-24 lg:px-44 flex flex-col md:flex-row items-center justify-between border-t transition-all ${
        theme === "dark" ? "border-gray-700 " : "border-gray-200 "
      }`}
    >
      {/* Left Side - Copyright */}
      <p className="text-sm md:text-base  text-gray-500">
        © 2025 • Harsh Panghal
      </p>

      {/* Right Side - Social Links */}
      <div className="py-5">
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
