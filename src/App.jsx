import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechSkills from "./pages/SkillsPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background />
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
    </>
  );
}

export default App;
