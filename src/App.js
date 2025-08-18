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
    // Add GA4 script dynamically
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
        {/* ✅ Basic Meta */}
        <title>Dhruvin Katakiya | Full Stack Web & App Developer | ReactJS | UI/UX Designer | Portfolio</title>
        <meta
          name="description"
          content="Dhruvin Katakiya - a full stack web & app developer and UI/UX designer specializing in ReactJS, Node.js, and modern design systems. Explore my portfolio, projects, and skills in web development."
        />
        <meta
          name="keywords"
          content="Dhruvin Katakiya, Web Developer, ReactJS, Full Stack Developer, JavaScript, Portfolio, UI UX Designer"
        />
        <meta name="author" content="Dhruvin Katakiya" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Dhruvin Katakiya | Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Dhruvin Katakiya, a full-stack developer crafting performant, accessible, and elegant web apps."
        />
        <meta
          property="og:image"
          content="https://dhruvinkatakiya.me/preview-image.png"
        />
        <meta property="og:url" content="https://dhruvinkatakiya.me" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dhruvin Katakiya | Full Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Dhruvin Katakiya, a full-stack developer crafting performant, accessible, and elegant web apps."
        />
        <meta
          name="twitter:image"
          content="https://dhruvinkatakiya.me/preview-image.png"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href="https://dhruvinkatakiya.me" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dhruvin Katakiya",
          "jobTitle": "Full Stack Developer",
          "url": "https://dhruvinkatakiya.me",
          "image": "https://dhruvinkatakiya.me/preview-image.png",
          "sameAs": [
            "https://www.linkedin.com/in/dhruvin-katakiya",
            "https://github.com/dhruvin_katakiya"
          ],
          "knowsAbout": ["Web Development", "ReactJS", "Frontend Developer", "Backend Developer", "UI/UX Design"]
        }
        `}</script>
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
