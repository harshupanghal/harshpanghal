import { useTheme } from "../contexts/ThemeContext";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const { theme } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const projects = [
    {
      name: "Free Flow",
      link: "#", // Add your project link
      tech: "React, Solidity, Web3.js",
      image: "/images/freeflow-preview.png", // Add your image path
    },
    {
      name: "Job Connect",
      link: "#",
      tech: "Next.js, Tailwind, Firebase",
      image: "/images/jobconnect-preview.png",
    },
  ];

  return (
    <div>
      <section className="w-full px-8 md:px-16 lg:px-52 transition-all">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-medium mb-3">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-20">
          Here are the projects I have worked on.
        </p>

        {/* Project List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 border-gray-300 dark:border-gray-600 transition-all duration-300 ease-out hover:pl-4"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseMove={(e) => {
                // Simple direct position tracking without storage access
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element
                const y = e.clientY - rect.top - 80; // y position within the element

                setCursorPos({ x, y, rect });
              }}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Left: Project Name */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-6xl font-normal transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-gray-500 dark:group-hover:text-gray-400 origin-left"
              >
                {project.name}
              </a>

              {/* Right: Tech Stack */}
              <p className="text-sm md:text-sm font-normal text-gray-700 dark:text-gray-300 mt-2 md:mt-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-gray-500 dark:group-hover:text-gray-400">
                {project.tech}
              </p>

              {/* Hover Preview - Positioned relative to the container element */}
              {hoveredProject === index && cursorPos.rect && (
                <div
                  className="absolute w-60 h-32 md:w-72 md:h-40 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-900 pointer-events-none"
                  style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: "translateX(-50%)",
                    zIndex: 50,
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
