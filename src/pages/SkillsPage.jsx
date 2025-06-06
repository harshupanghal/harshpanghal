import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { languages, web, blockchain, devTools } from "../components/SkillsName";

const TechSkills = () => {
	const { theme } = useTheme();
	const [selectedCategory, setSelectedCategory] = useState("Languages");

	const categories = {
		Languages: languages,
		Blockchain: blockchain,
		"Web Development": web,
		"Dev Tools": devTools,
	};

	return (
		<section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 mt-16">
			<div className="max-w-4xl mx-auto">
				{/* Main Heading */}
				<h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
					Tech Skills
				</h2>
				<p className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12">
					My technical expertise spans across various domains including
					development languages, modern frameworks, blockchain technologies, and
					essential development tools.
				</p>

				{/* Category Selection - Scrollable only on small screens */}
				<div className="flex sm:justify-center gap-3 sm:gap-5 mb-10 overflow-x-auto sm:overflow-visible px-1 hide-scrollbar">
					{Object.keys(categories).map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`flex-shrink-0 px-4 sm:px-6 py-2 rounded-full border text-sm sm:text-base font-semibold transition-all duration-300
        ${
					selectedCategory === category
						? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-md"
						: "bg-transparent border-gray-400 text-gray-500 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white"
				}
      `}
						>
							{category}
						</button>
					))}
				</div>

				{/* Display Selected Category Skills */}
				{/* <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          {selectedCategory}
        </h3> */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
					{categories[selectedCategory].map((skill, idx) => (
						<a
							key={idx}
							href={skill.link || "#"}
							target="_blank"
							rel="noopener noreferrer"
							className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg transition transform hover:scale-105
                ${
									theme === "dark"
										? "bg-[black]/70 border-gray-200"
										: "bg-white border-gray-600"
								}
              `}
						>
							{/* Icon container */}
							<div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 flex items-center justify-center">
								{skill.icon}
							</div>
							{skill.name && (
								<span className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200">
									{skill.name}
								</span>
							)}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechSkills;
