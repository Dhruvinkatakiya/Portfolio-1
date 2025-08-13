import React from "react";
import CreateMagicPage from "./pages/createmagic";
import Navbar from "./pages/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Skills from "./pages/skill";
import HeroPage from "./pages/HeroPage";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <Skills />
      <ProjectsPage />
      <CreateMagicPage />
      <Footer />
    </div>
  );
}

export default App;