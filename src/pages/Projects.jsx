import { useTheme } from "../contexts/ThemeContext";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const { theme } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [prevHoveredProject, setPrevHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef({ width: 384, height: 240 }); // Default sizes for md:w-96 md:h-60
  const containerRef = useRef(null);

  const projects = [
    {
      name: "Avsar",
      link: "https://avsar.vercel.app/",
      tech: "NextJs, MongoDB, Cloudinary ",
      image: "/avsar.png",
    },
    {
      name: "Vaultify",
      link: "https://vaultify-hazel.vercel.app/",
      tech: "Solidity, React, Web3.js",
      image: "/vaultify.png",
    },
    {
      name: "Free Flow",
      link: "https://free-flow-eight.vercel.app/",
      tech: "Solidity, React.js, Eth.js ",
      image: "/freeflow.png",
    },
    {
      name: "Portfolio",
      link: "https://harshpanghal.vercel.app/",
      tech: "React, Tailwind, Framer Motion",
      image: "/portfolio.png",
    },
    {
      name: "RustyBlocks",
      link: "https://github.com/harshupanghal/Core-Blockchain-Using-RUST",
      tech: "Rust, Blockchain",
      image: "/rust.png",
    },
    {
      name: "Blockchain In Govt.",
      link: "/Blockchain Revolutionizing Government Services.pdff",
      tech: "Blockchain, Databases, System Design",
      image: "/blockchain.png",
    },
    {
      name: "Password Generator",
      link: "https://password-generator-three-beryl.vercel.app/",
      tech: "React, Tailwind",
      image: "/password.png",
    },
  ];

  // Calculate directional offsets for transition animations.
  let initialYOffset = 0;
  let exitYOffset = 0;
  if (prevHoveredProject !== null && hoveredProject !== null) {
    const diff = hoveredProject - prevHoveredProject;
    if (diff > 0) {
      // Moving downward: new image comes from below, old image exits upward.
      initialYOffset = 20;
      exitYOffset = -20;
    } else if (diff < 0) {
      // Moving upward: new image comes from above, old image exits downward.
      initialYOffset = -20;
      exitYOffset = 20;
    }
  }

  // Update image size reference based on viewport
  useEffect(() => {
    const updateImageSize = () => {
      const isMd = window.innerWidth >= 768;
      imageRef.current = {
        width: isMd ? 384 : 288, // md:w-96 (384px) or w-72 (288px)
        height: isMd ? 240 : 192, // md:h-60 (240px) or h-48 (192px)
      };
    };

    updateImageSize();
    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  return (
    <div>
      <section className="w-full px-6 md:px-16 mt-28 lg:px-52 transition-all">
        {/* Title */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            My Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here are the projects I have worked on.
          </p>
        </div>

        {/* Project List Container */}
        <div ref={containerRef} className="relative opacity-51 transform-none">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex w-full items-center justify-between border-b px-4 py-10 sm:px-10 sm:py-16 cursor-pointer overflow-hidden"
              onMouseEnter={() => {
                setPrevHoveredProject(hoveredProject);
                setHoveredProject(index);
              }}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() =>
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
            >
              {/* Left: Project Name */}
              <div className="text-2xl transition-all duration-300 ease-in-out group-hover:-translate-x-3 group-hover:scale-110 md:group-hover:scale-50 sm:text-5xl ">
                {project.name}
              </div>

              {/* Right: Tech Stack */}
              <p className="text-sm font-light transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-95 sm:text-lg ">
                {project.tech}
              </p>

              {/* Hover Preview - Image in the middle with animation */}
              <div
                className={`absolute left-1/4 top-1/2 bottom-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-60 h-60 md:w-80 md:h-48 py-2 rounded-lg shadow-2xl bg-white dark:bg-gray-900 
 pointer-events-none transition-all duration-500 ease-in-out
                ${
                  hoveredProject === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                }`}
              >
                <div
                  className={`w-full h-full transition-transform duration-700 ease-out 
                ${hoveredProject === index ? "scale-100" : "scale-110"}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover rounded-lg"
                  />

                  {/* Image overlay with project name */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                  flex items-end p-4 transition-opacity duration-300 ease-in
                  ${hoveredProject === index ? "opacity-100" : "opacity-0"}`}
                  >
                    <span className="text-white font-medium">
                      {project.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
