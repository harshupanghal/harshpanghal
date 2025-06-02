
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechSkills from "./pages/SkillsPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkBackground from "./components/DarkBackground";
import LightBackground from "./components/LightBackground";

import { Analytics } from '@vercel/analytics/react';
import { useTheme } from "./contexts/ThemeContext";

function App() {
	const { theme } = useTheme();
  return (
    <>
      {/* Background updates instantly when theme changes */}
      {theme === "dark" ? (
        <DarkBackground key="dark" />
      ) : (
        <LightBackground key="light" />
      )}

      {/* Main Content */}
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<TechSkills />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
