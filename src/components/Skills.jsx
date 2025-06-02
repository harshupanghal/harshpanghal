import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useRef, useEffect } from "react";

const SkillsSection = () => {
  const { theme } = useTheme();

  const skills = [
    {
      name: "HTML",
      icon: (
        <img
          src="/icons/html5.png"
          alt="HTML"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "CSS",
      icon: (
        <img
          src="/icons/css3.png"
          alt="CSS"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <img
          src="/icons/javascript.svg"
          alt="JavaScript"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "Rust",
      icon: (
        <img
          src="/icons/rust.png"
          alt="Rust"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "C++",
      icon: (
        <img
          src="/icons/cplusplus.svg"
          alt="C++"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          src="/icons/python.svg"
          alt="Python"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "React.js",
      icon: (
        <img
          src="/icons/react.svg"
          alt="React.js"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "Solidity",
      icon: (
        <img
          src="/icons/solidity.svg"
          alt="Solidity"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <img
          src="/icons/nodejs.png"
          alt="NodeJs"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "Express.js",
      icon: (
        <img
          src="/icons/express.png"
          alt="ExpressJs"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },

    {
      name: "Web3.js",
      icon: (
        <img
          src="/icons/web3.png"
          alt="Web3.js"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },

    {
      // Example SVG icon – note that its fill uses currentColor
      name: "Tailwind",
      icon: (
        <img
          src="/icons/tailwind.png"
          alt="Tailwind"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },

    {
      name: "Git",
      icon: (
        <img
          src="/icons/git.png"
          alt="Git"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "GitHub",
      icon: (
        <img
          src="/icons/github.png"
          alt="Github"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },

    {
      name: "Remix",
      icon: (
        <svg
          width="97"
          height="30"
          viewBox="0 0 42 30"
          margin-2
          fill="currentcolor"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-16 max-h-16 scale-[2.5] object-contain"
          alt="Remix logo"
        >
          <path d="M29.9551 10.5C29.9484 10.5009 29.9416 10.4992 29.936 10.4953C29.9305 10.4914 29.9266 10.4856 29.9251 10.479C29.2522 7.82748 27.7145 5.476 25.5553 3.79638C23.3962 2.11675 20.7387 1.20483 18.0031 1.20483C15.2676 1.20483 12.6101 2.11675 10.4509 3.79638C8.29174 5.476 6.75409 7.82748 6.08113 10.479C6.07968 10.4856 6.07579 10.4914 6.07023 10.4953C6.06467 10.4992 6.05785 10.5009 6.05113 10.5C5.23813 10.5 2.70312 10.605 2.70312 12.759C2.70312 15.327 3.00313 17.559 4.50313 18.855C5.15113 19.41 6.24613 19.545 7.28413 19.521C7.93324 19.5002 8.57996 19.432 9.21913 19.317C9.22416 19.3166 9.22898 19.3148 9.23305 19.3118C9.23712 19.3088 9.24027 19.3048 9.24214 19.3001C9.24401 19.2954 9.24454 19.2903 9.24365 19.2853C9.24276 19.2803 9.2405 19.2757 9.23713 19.272C8.10443 17.5602 7.50131 15.5526 7.50313 13.5C7.50313 13.47 7.50313 13.437 7.50313 13.407C7.50313 10.6222 8.60937 7.95147 10.5785 5.98234C12.5476 4.01321 15.2184 2.90696 18.0031 2.90696C20.7879 2.90696 23.4586 4.01321 25.4277 5.98234C27.3969 7.95147 28.5031 10.6222 28.5031 13.407C28.5031 13.437 28.5031 13.47 28.5031 13.5C28.5049 15.5526 27.9018 17.5602 26.7691 19.272C26.7657 19.2757 26.7635 19.2803 26.7626 19.2853C26.7617 19.2903 26.7622 19.2954 26.7641 19.3001C26.766 19.3048 26.7691 19.3088 26.7732 19.3118C26.7773 19.3148 26.7821 19.3166 26.7871 19.317C27.4263 19.432 28.073 19.5002 28.7221 19.521C29.7601 19.545 30.8551 19.41 31.5031 18.855C33.0031 17.574 33.3031 15.327 33.3031 12.759C33.3031 10.605 30.7681 10.5 29.9551 10.5Z"></path>
          <path d="M18.0051 22.2001L10.0251 19.5391C10.0185 19.5366 10.0112 19.5365 10.0045 19.5388C9.99776 19.5411 9.99211 19.5458 9.98852 19.5519C9.98492 19.558 9.98361 19.5652 9.98481 19.5722C9.98601 19.5792 9.98965 19.5855 9.99509 19.5901L17.9841 27.5791C17.9897 27.5846 17.9972 27.5877 18.0051 27.5877C18.0129 27.5877 18.0205 27.5846 18.0261 27.5791L26.0151 19.5901C26.0205 19.5855 26.0242 19.5792 26.0254 19.5722C26.0266 19.5652 26.0252 19.558 26.0217 19.5519C26.0181 19.5458 26.0124 19.5411 26.0057 19.5388C25.999 19.5365 25.9917 19.5366 25.9851 19.5391L18.0051 22.2001Z"></path>
          <path d="M25.104 14.0701L27 13.5001C27.0067 13.4993 27.0128 13.4961 27.0172 13.4912C27.0216 13.4862 27.0241 13.4797 27.024 13.4731C27.0188 12.7712 26.9312 12.0725 26.763 11.3911C26.7614 11.3849 26.7579 11.3793 26.7531 11.375C26.7483 11.3708 26.7424 11.368 26.736 11.3671L24.807 11.1931C24.8007 11.1931 24.7946 11.1911 24.7895 11.1874C24.7844 11.1837 24.7806 11.1785 24.7786 11.1725C24.7766 11.1666 24.7765 11.1601 24.7784 11.1541C24.7803 11.1481 24.784 11.1428 24.789 11.1391L26.223 9.88505C26.2259 9.87949 26.2274 9.87332 26.2274 9.86705C26.2274 9.86079 26.2259 9.85461 26.223 9.84905C25.9308 9.20119 25.5632 8.58999 25.128 8.02805C25.1233 8.0244 25.1175 8.02242 25.1115 8.02242C25.1056 8.02242 25.0998 8.0244 25.095 8.02805L23.322 8.62805C23.3164 8.62986 23.3104 8.62997 23.3047 8.62836C23.299 8.62675 23.2939 8.6235 23.2901 8.61901C23.2862 8.61453 23.2838 8.60901 23.2831 8.60314C23.2824 8.59728 23.2834 8.59133 23.286 8.58605L24.057 6.90005C24.0605 6.8947 24.0624 6.88844 24.0624 6.88205C24.0624 6.87566 24.0605 6.86941 24.057 6.86405C23.5248 6.38234 22.9366 5.96636 22.305 5.62505C22.3003 5.6214 22.2945 5.61942 22.2885 5.61942C22.2826 5.61942 22.2768 5.6214 22.272 5.62505L20.931 6.86405C20.9268 6.86816 20.9215 6.87095 20.9158 6.87208C20.91 6.8732 20.904 6.87261 20.8986 6.87037C20.8932 6.86814 20.8885 6.86436 20.8852 6.8595C20.8819 6.85464 20.8801 6.84892 20.88 6.84305L20.907 5.04305C20.9073 5.03644 20.9054 5.0299 20.9016 5.02448C20.8978 5.01905 20.8924 5.01503 20.886 5.01305C20.2057 4.7843 19.5009 4.63629 18.786 4.57205C18.7794 4.57175 18.7729 4.57365 18.7675 4.57744C18.762 4.58124 18.758 4.58673 18.756 4.59305L18.042 6.25505C18.0396 6.26013 18.0357 6.2644 18.031 6.2674C18.0262 6.27039 18.0207 6.27198 18.015 6.27198C18.0094 6.27198 18.0039 6.27039 17.9991 6.2674C17.9943 6.2644 17.9905 6.26013 17.988 6.25505L17.277 4.59305C17.274 4.58705 17.2692 4.58211 17.2633 4.5789C17.2574 4.57568 17.2507 4.57434 17.244 4.57505C16.5288 4.63875 15.8238 4.78781 15.144 5.01905C15.1382 5.02172 15.1331 5.02591 15.1294 5.03118C15.1257 5.03646 15.1235 5.04263 15.123 5.04905L15.147 6.86405C15.148 6.86999 15.147 6.8761 15.1442 6.8814C15.1413 6.88669 15.1368 6.89088 15.1312 6.8933C15.1257 6.89571 15.1195 6.89621 15.1137 6.89472C15.1079 6.89322 15.1027 6.88982 15.099 6.88505L13.74 5.62805C13.7347 5.62457 13.7284 5.62271 13.722 5.62271C13.7156 5.62271 13.7094 5.62457 13.704 5.62805C13.0734 5.96929 12.4861 6.38529 11.955 6.86705C11.9515 6.87241 11.9497 6.87866 11.9497 6.88505C11.9497 6.89144 11.9515 6.8977 11.955 6.90305L12.732 8.58305C12.7338 8.58861 12.734 8.59452 12.7327 8.6002C12.7314 8.60587 12.7287 8.61111 12.7247 8.61537C12.7208 8.61964 12.7157 8.62278 12.7102 8.62448C12.7046 8.62618 12.6987 8.62638 12.693 8.62505L10.923 8.02505C10.9177 8.02157 10.9114 8.01971 10.905 8.01971C10.8986 8.01971 10.8924 8.02157 10.887 8.02505C10.4549 8.58844 10.0904 9.20064 9.80103 9.84905C9.79755 9.85441 9.79569 9.86066 9.79569 9.86705C9.79569 9.87344 9.79755 9.8797 9.80103 9.88505L11.238 11.1421C11.242 11.1461 11.2448 11.1511 11.246 11.1566C11.2473 11.1621 11.247 11.1679 11.2451 11.1732C11.2432 11.1785 11.2398 11.1832 11.2354 11.1867C11.231 11.1903 11.2257 11.1924 11.22 11.1931L9.30003 11.3731C9.29393 11.3734 9.28807 11.3756 9.28325 11.3793C9.27842 11.3831 9.27486 11.3882 9.27303 11.3941C9.10083 12.075 9.00921 12.7738 9.00003 13.4761C8.99973 13.4827 9.00162 13.4892 9.00542 13.4946C9.00922 13.5001 9.01471 13.5041 9.02103 13.5061L10.92 14.1001C10.9251 14.1025 10.9294 14.1063 10.9324 14.1111C10.9354 14.1159 10.937 14.1214 10.937 14.1271C10.937 14.1327 10.9354 14.1382 10.9324 14.143C10.9294 14.1478 10.9251 14.1516 10.92 14.1541L9.16803 15.1321C9.16413 15.1427 9.16413 15.1544 9.16803 15.1651C9.29773 15.8634 9.50918 16.5441 9.79803 17.1931C9.89403 17.4061 9.99903 17.6131 10.098 17.8171C10.1039 17.8189 10.1102 17.8189 10.116 17.8171L18 20.4481L25.902 17.8141C25.9059 17.8129 25.9095 17.811 25.9126 17.8084C25.9157 17.8058 25.9182 17.8026 25.92 17.7991C26.367 16.9647 26.6818 16.066 26.853 15.1351C26.8545 15.1287 26.8538 15.122 26.8511 15.116C26.8484 15.1101 26.8438 15.1052 26.838 15.1021L25.089 14.1241C25.0841 14.1204 25.0805 14.1154 25.0785 14.1097C25.0765 14.104 25.0763 14.0977 25.078 14.0919C25.0796 14.086 25.0829 14.0808 25.0876 14.0769C25.0923 14.073 25.098 14.0706 25.104 14.0701Z"></path>
        </svg>
      ),
    },

    {
      name: "EtherJs",
      icon: (
        <img
          src="/icons/eth.png"
          alt="EtherJs"
          className="max-w-16 max-h-16 scale-150 object-contain"
        />
      ),
    },

    {
      name: "Pinata",
      icon: (
        <img
          src="/icons/pinata.svg"
          alt="Pinata"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },

    {
      name: "Metamask",
      icon: (
        <img
          src="/icons/metamask.svg
"
          alt="Metamask"
          className="max-w-16 max-h-16 scale-[2.3] object-contain"
        />
      ),
    },
    {
      name: "Ganache",
      icon: (
        <img
          src="/icons/ganache.png"
          alt="Google OAuth2"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },

    {
      name: "Hardhat",
      icon: (
        <img
          src="/icons/hardhat.svg"
          alt="Hardhat"
          className="max-w-16 max-h-16 scale-[1.75] object-contain"
        />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <img
          src="/icons/mongodb.svg"
          alt="MongoDB"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "IPFS",
      icon: (
        <img
          src="/icons/ipfs.svg"
          alt="IPFS"
          className="max-w-16 max-h-16 scale-125 object-contain"
        />
      ),
    },
    {
      name: "Firebase",
      icon: (
        <img
          src="/icons/firebase.svg"
          alt="Firebase"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
    {
      name: "AWS",
      icon: (
        <img
          src="/icons/aws.svg"
          alt="AWS"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },

    {
      name: "Render",
      icon: (
        <svg
          viewBox="-24 -24 72 72"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Render"
          className="max-w-16 max-h-16 scale-[2.80] object-contain
  fill-current text-black dark:text-white"
        >
          <path d="M15.6491 0.00582604C12.9679 -0.120371 10.7133 1.81847 10.3286 4.373C10.3134 4.49154 10.2905 4.60627 10.2715 4.72099C9.67356 7.90268 6.88955 10.3119 3.5457 10.3119C2.35364 10.3119 1.23395 10.006 0.258977 9.47058C0.140914 9.40557 0 9.4897 0 9.62354V10.3081V20.6218H10.2677V12.8894C10.2677 11.4668 11.4178 10.3119 12.8346 10.3119H15.4015C18.3074 10.3119 20.6458 7.89121 20.5315 4.94662C20.4287 2.29649 18.2884 0.132023 15.6491 0.00582604Z"></path>
        </svg>
      ),
    },

    {
      name: "Vercel",
      icon: (
        <img
          src="/icons/vercel.png"
          alt="Google OAuth2"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },

    {
      name: "Google OAuth2",
      icon: (
        <img
          src="/icons/google.svg"
          alt="Google OAuth2"
          className="max-w-16 max-h-16 object-contain"
        />
      ),
    },
  ];

  const SkillMarquee = ({ skills, reverse }) => {
    return (
      <motion.div
        className="flex space-x-5 w-max"
        initial={{ x: reverse ? "100%" : "-100%" }}
        animate={{ x: reverse ? "-100%" : "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-6">
            <div className="w-24 h-24 text-black dark:text-white">
              {skill.icon}
            </div>
          </div>
        ))}
      </motion.div>
    );
  };

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const startScrolling = (ref, direction) => {
      if (!ref.current) return;
      let speed = 30;
      let pos = 0;

      const scroll = () => {
        if (direction === "left") {
          pos -= 1;
          if (pos <= -ref.current.scrollWidth / 2) pos = 0;
        } else {
          pos += 1;
          if (pos >= ref.current.scrollWidth / 2) pos = 0;
        }
        ref.current.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(scroll);
      };
      scroll();
    };

    startScrolling(row1Ref, "left");
    startScrolling(row2Ref, "right");
  }, []);


  return (
    <section className="transition-all overflow-hidden">
      
      {/* Scroller with Side Blur and Curved Effect */}
      <div className="relative w-full overflow-hidden perspective">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12  z-10 pointer-events-none"></div>
        
        {/* Scrolling Icons with Curved Effect */}
        <div className="curved-scroller">
          <div className="curved-scroller__inner">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="icon-wrapper group">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-tooltip">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12  pointer-events-none"></div>
      </div>
      
      {/* Styles */}
      <style jsx="true">{`
        .perspective {
          perspective: 200px;
          height: 100px;
        }
        
        .curved-scroller {
          overflow: hidden;
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .curved-scroller__inner {
          display: flex;
          white-space: nowrap;
          animation: scroll-curved 20s linear infinite;
          position: absolute;
          top: 0;
          left: 0;
          transform-style: preserve-3d;
        }
        
        @keyframes scroll-curved {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .icon-wrapper {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .skill-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          object-fit: contain;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.1));
        }
        
        .skill-icon img,
        .skill-icon svg {
          max-width: 100%;
          max-height: 100%;
          transition: all 0.3s ease;
        }
        
        .icon-wrapper:nth-child(odd) {
          transform: translateZ(-5px) rotateX(5deg);
        }
        
        .icon-wrapper:nth-child(even) {
          transform: translateZ(-5px) rotateX(-5deg);
        }
        
        /* Edge icons have more pronounced curve */
        .curved-scroller__inner .icon-wrapper:nth-child(-n + 3),
        .curved-scroller__inner .icon-wrapper:nth-last-child(-n + 3) {
          transform: translateZ(-10px) rotateX(20deg);
        }
        
        .skill-tooltip {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(139, 92, 246, 0.9));
          backdrop-filter: blur(8px);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: white;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 8px;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }
        
        /* Dark mode tooltip styles */
        .dark .skill-tooltip {
          background: linear-gradient(135deg, rgba(71, 85, 105, 0.95), rgba(100, 116, 139, 0.95));
          border: 1px solid rgba(148, 163, 184, 0.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .icon-wrapper:hover .skill-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(-4px);
        }
        
        .icon-wrapper:hover .skill-icon {
          transform: scale(1.2) translateY(-2px);
          filter: drop-shadow(0 8px 16px rgba(99, 102, 241, 0.3));
        }
        
        /* Enhanced hover glow effect */
        .icon-wrapper:hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
          border-radius: 50%;
          z-index: -1;
          animation: pulse-glow 2s infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .icon-wrapper {
            width: 80px;
            height: 80px;
          }
          
          .skill-icon {
            width: 60px;
            height: 60px;
          }
          
          .skill-tooltip {
            font-size: 11px;
            padding: 4px 8px;
          }
        }
      `}</style>
    </section>
  );
};



export default SkillsSection;
