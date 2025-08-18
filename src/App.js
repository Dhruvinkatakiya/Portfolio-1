import { useEffect } from "react";
import React from "react";
import { initGA } from "./ga";
import CreateMagicPage from "./pages/createmagic";
import Navbar from "./pages/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Skills from "./pages/skill";
import HeroPage from "./pages/HeroPage";
import Footer from "./component/Footer";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-PBDP59088P";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initGA();
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
  <title>Dhruvin Katakiya | Web-App Developer, Full-Stack Engineer & UI/UX Designer</title>
  <meta 
    name="description" 
    content="Dhruvin Katakiya is a Full-Stack Web-App Developer and UI/UX Designer building modern, scalable, and creative applications. Expert in ReactJS, NodeJS, JavaScript, and Web Design." 
  />
  <meta 
    name="keywords" 
    content="developer, web developer, software engineer, full stack developer, react developer, UI UX designer, Dhruvin Katakiya, JavaScript expert, front-end developer, back-end developer, portfolio" 
  />
  <meta name="author" content="Dhruvin Katakiya" />

  <meta property="og:title" content="Dhruvin Katakiya — Full-Stack Developer & Designer" />
  <meta property="og:description" content="Professional portfolio of Dhruvin Katakiya. Explore projects, skills, and experience in Web Development, Full Stack Engineering, and UI/UX Design." />
  <meta property="og:image" content="https://dhruvinkatakiya.me/preview.jpg" />
  <meta property="og:url" content="https://dhruvinkatakiya.me" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dhruvin Katakiya — Full-Stack Developer & Designer" />
  <meta name="twitter:description" content="Full-Stack Web Developer & UI/UX Designer building scalable web apps and modern designs." />
  <meta name="twitter:image" content="https://dhruvinkatakiya.me/preview.jpg" />

  {/* Schema Markup for  (Structured Data) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dhruvin Katakiya",
      "url": "https://dhruvinkatakiya.me",
      "jobTitle": "Full Stack Developer, UI/UX Designer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance / Open to Work"
      },
      "sameAs": [
        "https://www.linkedin.com/in/dhruvin-katakiya",
        "https://github.com/Dhruvinkatakiya",
      ]
    }
    `}
  </script>

  {/* Canonical URL */}
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
