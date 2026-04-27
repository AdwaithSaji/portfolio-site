import About from "./components/About";
import Achievements from "./components/Achievements";
import Background from "./components/Background";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollBar from "./components/ScrollBar";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import WhyMe from "./components/WhyMe";

function App() {
  return (
    <div className="relative text-white">

      {/* Effects */}
      <Background />
      <CursorGlow />
      <ScrollBar />

      {/* Main Content */}
      <Navbar />
      <Hero />

      <About />
      <WhyMe />
      <Stats />

      {/* 🔥 NEW SECTION (VERY IMPORTANT POSITION) */}
      <Achievements />

      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;