import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import SocialLinks from "../components/SocialLinks";
import TechSkills from "./SkillsPage"; // Import your skills component

// Timeline data for 5 years (2021-2025)
const timelineData = [
  {
    year: 2021,
    story:
      "I started my journey in tech in India, laying the foundations in web development. I learned HTML, CSS, and vanilla JavaScript, which ignited my passion for coding.",
  },
  {
    year: 2022,
    story:
      "I deepened my skills in React and began exploring blockchain fundamentals, gradually building my confidence and expertise in modern web technologies.",
  },
  {
    year: 2023,
    story:
      "I launched my first decentralized application, embracing Web3 technologies and smart contracts, and realized the power of combining creativity with technology.",
  },
  {
    year: 2024,
    story:
      "I enhanced my proficiency in React and blockchain, expanding my portfolio with innovative projects that merge traditional web development with decentralized systems.",
  },
  {
    year: 2025,
    story:
      "I continue to innovate by building scalable web and blockchain solutions. My journey is driven by continuous learning and a desire to shape the future of technology.",
  },
];

const AboutSection = () => {
  const { theme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentTimeline = timelineData[selectedIndex];

  return (
    <section className="py-16 px-6 md:px-24 lg:px-60 mt-24">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        {/* Left Side: Name & Title */}
        <div className="text-center md:text-left">
          <h1
            className={`text-4xl md:text-5xl font-medium ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Harsh Panghal
          </h1>
          <p
            className={`text-lg md:text-xl mt-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Web Developer & Blockchain Enthusiast
          </p>
        </div>

        {/* Right Side: Social Icons */}
        <div className="hidden lg:block">
          <SocialLinks />
        </div>
      </div>

      {/* Longer Introduction */}
      <div
        className={`mb-12 text-justify  ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <p className="text-lg">
          I am from India, skilled in React and blockchain. I have always been
          passionate about technology and innovation. My journey began with
          learning the basics of web development, and over the years, I have
          expanded my expertise to include modern frameworks and decentralized
          technologies. I strive to create solutions that are not only efficient
          and scalable but also provide an exceptional user experience. Through
          continuous learning and hands-on projects, I transform challenges into
          opportunities, driving innovation in every step of my career.
        </p>
      </div>

      {/* Timeline Slider */}
      <div className="mb-16">
        <h2
          className={`text-2xl font-semibold text-center mb-6 ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          My Journey
        </h2>

        <div className="flex flex-col items-center w-full">
          {/* Slider Container */}
          <div className="relative w-full md:w-2/3 lg:w-1/2 h-16 flex items-center">
            {/* Invisible Range Input for functionality */}
            <input
              type="range"
              min="0"
              max="4"
              step="1"
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
              className="absolute w-full opacity-0 z-10 cursor-pointer"
            />

            {/* Track Line */}
            <div className="absolute w-full h-1 bg-gray-400 rounded-full"></div>

            {/* Tick Marks (Perfectly Positioned) */}
            {timelineData.map((item, index) => (
              <div
                key={index}
                style={{ left: `${(index / 4) * 100}%` }}
                className="absolute flex flex-col items-center -translate-x-1/2"
              >
                {/* Vertical Line */}
                <div
                  className={`w-1 h-6 ${
                    selectedIndex === index
                      ? "bg-black dark:bg-white"
                      : "bg-gray-500 dark:bg-gray-400"
                  }`}
                ></div>
              </div>
            ))}

            {/* Custom Thumb (Ball) */}
            <div
              className="absolute h-16 w-16 flex items-center justify-center pointer-events-none"
              style={{
                left: `${(selectedIndex / 4) * 100}%`,
                transform: "translate(-50%, 0)",
              }}
            >
              <div
                className={`h-6 w-6 rounded-full ${
                  theme === "dark" ? "bg-white" : "bg-black"
                }`}
              ></div>
            </div>
          </div>

          {/* Selected Year */}
          <div className="mt-4 text-lg font-medium">
            <span className={theme === "dark" ? "text-white" : "text-black"}>
              {currentTimeline.year}
            </span>
          </div>

          {/* Story for Selected Year */}
          <div
            className={`mt-4 p-4 border rounded-md max-w-2xl text-center min-h-[150px] flex items-center justify-center ${
              theme === "dark"
                ? "border-gray-700 text-gray-200"
                : "border-gray-300 text-gray-800"
            }`}
          >
            {currentTimeline.story}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <TechSkills />
      </div>

      <style jsx>{`
        /* Hide default appearance of range input thumb */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
        }
        input[type="range"]::-moz-range-thumb {
          -moz-appearance: none;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
