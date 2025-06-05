import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import SocialLinks from "../components/SocialLinks";
import TechSkills from "./SkillsPage"; // Import your skills component

// Timeline data for 5 years (2021-2025)
const timelineData = [
  {
    year: 2021,
    story:
      "March ended high school, and my brain was officially on vacation—future, a total mystery. But one question kept bugging me: How do YouTube, Facebook, and WhatsApp work? In 9th grade, I discovered programming—a magical world where you talk to computers and they actually listen!Fast forward to high school: I met C++, a bizarre mix of math and code. When I asked my teacher how to remember it all, she simply said, 'You don’t. You understand it.' Magic, right?  By mid-July, I landed at Chandigarh University, dove into C and C++, and—surprisingly—loved them. These low-level languages felt like a direct chat with the machine.,And the journey? Well, it had only just begun..",
  },
  {
    year: 2022,
    story:
      "In my second year, I sailed through without any backlogs—what a win! \n\n" +
      "It was an amazing year because I discovered Blockchain and even started playing around with DSA during the third-semester break. \n\n" +
      "Then came the fourth semester, when we had to do a project. We chose blockchain, and that’s when my blockchain journey truly began. \n\n" +
      "I was so fascinated that I dove right in, but our project needed more than just Blockchain know-how, so I had to learn some frontend as well. \n\n" +
      "My interest in coding pushed me further, and I ended up creating my very first blockchain project, 'Google Drive 3.0.' \n\n" +
      "Yes, that was the name we gave it—oh sorry, I gave it. I was alone with my groupmates. \n\n" +
      "Moral of the story? Choose your project members wisely! 🙃",
  },

  {
    year: 2023,
    story:
      "Oh, you really liked my story? Scrolled all the way here? Nice! So, in 2023, I kept exploring and learned more about Blockchain—finally putting my time to good use (instead of just scrolling memes). To build great apps, I needed great tech, so I dived into the MERN stack. And just like that—boom! I became a Full Stack Web & Blockchain Developer (sounds fancy, right?). Then came the fun part—building projects that combined web and blockchain. The whole year? Learning, coding, deploying, breaking things, fixing them… and repeating the cycle. What a ride! 🚀 ",
  },
  {
    year: 2024,
    story:
      "I heard a voice—wait, was that my heart? Oh yeah, it was. And it had something to say: Hey buddy, remember low-level languages? It’s been ages, and you haven’t learned a new one! Good point. That’s how my love for low-level languages led me to Rust. And let me tell you—what a great, great, GREAT language! By October, I was back in action—practicing my skills, building new projects, and diving into deep research. The grind was on, and the journey was getting even more exciting! ",
  },
  {
    year: 2025,
    story:
      "It’s just the start of 2025, and I’m back at it—same old routine: learning, practicing, then practicing some more. But after all this time, I’ve realized one thing—once you get the fundamentals, everything else becomes easy. That's how I was able to play around so much stuff. So, my biggest takeaway? Master the basics, then move forward.Keep learning, keep growing! 🚀",
  },
];

const AboutSection = () => {
  const { theme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentTimeline = timelineData[selectedIndex];

  return (
    <section className="py-16 px-6 md:px-24 lg:px-60 mt-16 md:mt-24">
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
            FullStack Web Developer & Blockchain Enthusiast
          </p>
        </div>

        {/* Right Side: Social Icons */}
        <div className="mt-5 block">
          <SocialLinks />
        </div>
      </div>

      {/* Longer Introduction */}
      <div
        className={`-mb-2 text-justify  ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {/* <p className="text-lg">
          Currently based in India, a fresh CS graduate, mastering different technologies. Always on the lookout for opportunities, because why settle when you can explore? Skilled in a
          bit of everything—tech, reading books, writing and even the fine art
          of overthinking. Discipline and punctuality bring me happiness (yes,
          I’m that person). If something sparks my interest, I have to dive
          in—comfort zones? Never heard of them. I learn, I implement, I break
          things (sometimes on purpose), and I keep going. That’s the fun part,
          isn’t it?
        </p> */}
        <p className="text-lg">
          Mastering different technologies. Skilled in a bit of everything. I learn, I implement, I break
          things (sometimes on purpose), and I keep going. That’s the fun part,
          isn’t it?
        </p>
      </div>


      {/* Skills Section */}
      <div className="">
        <TechSkills />
      </div>

      {/* Timeline Slider */}
      <div className="mb-16">
        <h2
          className={`text-xl font-medium text-center mb-6 mt-20 ${
            theme === "dark" ? "text-blue-400" : "text-blue-700"
          }`}
        >
          Want to know more about me? Here you go..{" "}
        </h2>
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
            className={`mt-4 p-4 border rounded-md max-w-2xl text-justify min-h-[150px] flex items-center justify-center ${
              theme === "dark"
                ? "border-gray-700 text-gray-200"
                : "border-gray-300 text-gray-800"
            }`}
          >
            {currentTimeline.story}
          </div>
        </div>
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
