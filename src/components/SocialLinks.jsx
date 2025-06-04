import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const SocialLinks = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true); // Ensures opacity transitions correctly
  }, []);

  const socialLinks = [
    { href: "https://github.com/harshupanghal", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/harsh-panghal01/",
      icon: <FaLinkedin />,
    },
    { href: "https://x.com/HarshPanghal18", icon: <FaTwitter /> },
    { href: "mailto:work.harshpanghal@gmail.com", icon: <FaEnvelope /> },
    { href: "/HARSH's_RESUME.pdf", icon: <FaFilePdf /> },
  ];

  return (
    <motion.div
      className={` p-3 rounded-xl backdrop-blur-md border flex gap-6 ${
            theme === "dark"
              ? "bg-[#0a0a0a]/80 border-slate-700/50 "
              : "text-gray-600 hover:text-blue-600 "
          }shadow-lg`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {socialLinks.map(({ href, icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl md:text-2xl transition-transform   transform hover:-translate-y-1 ${
            theme === "dark"
              ? "bg-[#0a0a0a]/80 border-slate-700/50 text-gray-300 hover:text-blue-400"
              : "text-gray-600 hover:text-blue-600 bg-white/80 border-gray-200/50"
          }`}
        >
          {icon}
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;

