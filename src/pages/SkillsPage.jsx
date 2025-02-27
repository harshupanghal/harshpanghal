import React, { useContext } from "react";
import { useTheme } from "../contexts/ThemeContext"; // Assuming you have a ThemeContext
import { languages, web, blockchain, devTools } from "../components/SkillsName"; // Importing categorized skills

const TechSkills = () => {
  const { theme } = useTheme();

  const categories = [
    { title: "Languages", skills: languages },
    { title: "Web Development", skills: web },
    { title: "Blockchain", skills: blockchain },
    { title: "Dev Tools", skills: devTools },
  ];

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">Tech Skills</h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
          My technical expertise spans across various domains including
          development languages, modern frameworks, blockchain technologies, and
          essential development tools.
        </p>

        {/* Loop through each category */}
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
            {/* Grid layout: 2 columns on mobile, 4 on larger screens */}
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-2">
              {category.skills.map((skill, idx) => (
                <a
                  key={idx}
                  href={skill.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-6 border rounded-lg transition transform hover:scale-105
                    ${
                      theme === "dark"
                        ? "bg-[black]/70 border-gray-200"
                        : "bg-white border-gray-600"
                    }`}
                >
                  {/* Icon container: ensures consistent sizing */}
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  {/* Conditionally render the skill name */}
                  {skill.name && (
                    <span className="text-md font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
