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
      <section className="w-full px-6 md:px-16 mt-28 lg:px-52 transition-all ">
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
        <div
          ref={containerRef}
          className="relative opacity-51 transform-none cursor-grabbing"
          onMouseMove={(e) => {
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }
          }}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex w-full items-center justify-between border-b px-4 py-10 sm:px-10 sm:py-16  "
              onMouseEnter={() => {
                setPrevHoveredProject(hoveredProject);
                setHoveredProject(index);
              }}
            >
              {/* Left: Project Name */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-all group-hover:-translate-x-3 group-hover:scale-110 sm:text-5xl"
              >
                {project.name}
              </a>

              {/* Right: Tech Stack */}
              <p className="text-sm font-light transition-all group-hover:translate-x-3 group-hover:scale-110 sm:text-lg">
                {project.tech}
              </p>
            </div>
          ))}

          {/* Hover Preview - Image Transition Effect */}
          <AnimatePresence>
            {hoveredProject !== null && (
              <motion.div
                key={hoveredProject}
                className="absolute w-72 h-48 md:w-96 md:h-60 rounded-lg shadow-2xl bg-white dark:bg-gray-900 pointer-events-none overflow-hidden"
                style={{
                  // Position the top edge of the image just below the cursor
                  left: cursorPos.x,
                  top: cursorPos.y,
                  // Adjust position to make the top edge at cursor position
                  marginLeft: -(imageRef.current.width / 2),
                  // Fixed offset to position just below cursor
                  marginTop: -(imageRef.current.height / 2),
                  zIndex: 50,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: initialYOffset,
                  rotate: -5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotate: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.19, 1.0, 0.22, 1.0], // Ease out expo
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.6,
                  y: exitYOffset,
                  rotate: 5,
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <motion.div
                  className="w-full h-full"
                  initial={{ scale: 1.2 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  }}
                >
                  <img
                    src={projects[hoveredProject].image}
                    alt={`${projects[hoveredProject].name} preview`}
                    className="w-full h-full object-cover rounded-lg"
                  />

                  {/* Image overlay with project name */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.6, duration: 0.3 },
                    }}
                  >
                    <span className="text-white font-medium">
                      {projects[hoveredProject].name}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Projects;
