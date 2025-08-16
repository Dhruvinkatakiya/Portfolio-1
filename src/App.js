import React from "react";
import CreateMagicPage from "./pages/createmagic";
import Navbar from "./pages/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Skills from "./pages/skill";
import HeroPage from "./pages/HeroPage";
import Footer from "./component/Footer";
import { HelmetProvider, Helmet } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
         
        <Helmet>
        {/* Basic Meta */}
        <title>Dhruvin Katakiya — Full-Stack Web Developer</title>
        <meta name="description" content="Portfolio of Dhruvin Katakiya, a full-stack developer crafting performant, accessible, and elegant web apps." />
        <meta name="keywords" content="Dhruvin Katakiya, Web Developer, ReactJS, Full Stack, Portfolio, JavaScript" />
        <meta name="author" content="Dhruvin Katakiya" />

        {/* Open Graph (For Social Sharing) */}
        <meta property="og:title" content="Dhruvin Katakiya — Full-Stack Web Developer" />
        <meta property="og:description" content="Portfolio of Dhruvin Katakiya, a full-stack developer crafting performant, accessible, and elegant web apps." />
        <meta property="og:image" content="https://dhruvinkatakiya.me/" />
        <meta property="og:url" content="https://dhruvinkatakiya.me" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dhruvin Katakiya — Full-Stack Web Developer" />
        <meta name="twitter:description" content="Portfolio of Dhruvin Katakiya, a full-stack developer crafting performant, accessible, and elegant web apps." />
        <meta name="twitter:image" content="https://dhruvinkatakiya.me/preview-image.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://dhruvinkatakiya.me" />
      </Helmet>


      <div>
        <Navbar />
        <HeroPage />
        <AboutPage />
        <Skills />
        <ProjectsPage />
         <CreateMagicPage />
         <Footer />
      </div>
    </HelmetProvider>
  );
}


export default App;