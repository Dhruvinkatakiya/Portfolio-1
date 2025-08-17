import React, { useRef, useState } from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// 🖼️ Import project images
import smartParentsImg from "../assets/smart_parents.png";
import flixTexImg from "../assets/Flextix.png";
import dheeraCircuitsImg from "../assets/Dheera.png";
import coffeeBarImg from "../assets/coffee_bar.png";
import homeDecorImg from "../assets//Homedecore.png";

// 📦 Project data
const projects = [
  {
    title: "Smart Parents App",
    description:
      "A Flutter-based college management app with real-time student tracking and secure multi-role access for students, faculty, and parents.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps"],
    github: "https://github.com/Dhruvinkatakiya/smart_parents.git",
    demo: "https://github.com/Dhruvinkatakiya/smart_parents.git",
    image: smartParentsImg,
  },
  {
    title: "Flix-tex E-Commerce",
    description:
      "FlixTex is an innovative clothing site that offers a diverse range of clothing collections for men and women.",
    tags: ["React", "TailwindCSS", "Node.js", "MySQL"],
    github: "https://github.com/Dhruvinkatakiya/FlixTex.git",
    demo: "https://github.com/Dhruvinkatakiya/FlixTex.git",
    image: flixTexImg,
  },
  {
    title: "Dheera Circuits Website",
    description:
      "A professional website built as a freelance project. Integrated with Google Sheets API to capture form submissions in real time.",
    tags: ["React.js", "SCSS", "Google Sheets API", "AWS"],
    demo: "https://dheeracircuits.com/",
    image: dheeraCircuitsImg,
  },
  {
    title: "Coffee Bar Management System",
    description:
      "A simple and effective web-based management system for coffee bar operations including ordering and billing.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Dhruvinkatakiya/coffee_bar",
    demo: "#",
    image: coffeeBarImg,
  },
  {
    title: "Home Decor Website",
    description:
      "A static website to showcase home décor items using elegant design and layout built with HTML & CSS.",
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/Dhruvinkatakiya/home_decore.git",
    demo: "https://dhruvinkatakiya.github.io/home_decore/",
    image: homeDecorImg,
  },
];

export default function ProjectsPage() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -380 : 380,
        behavior: "smooth",
      });
    }
  };

  // 🖱️ Drag-to-scroll logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // drag speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <main
      id="work"
      className="min-h-screen bg-black text-white py-12 sm:py-16 px-2 sm:px-6 font-sans overflow-hidden relative"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mt-10 text-center mb-4">
        Featured{" "}
        <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text">
          Projects
        </span>
      </h1>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        A showcase of my recent work and creative solutions
      </p>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full p-3 shadow-lg z-20 hover:scale-110 transition"
        >
          <MdKeyboardArrowLeft size={28} />
        </button>

        {/* Gradient overlay edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none z-10 hidden sm:block" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10 hidden sm:block" />

        {/* Scroll Container (with drag support) */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex space-x-4 sm:space-x-6 pb-6 px-6 snap-x snap-mandatory overflow-x-auto sm:overflow-x-hidden scroll-smooth cursor-grab active:cursor-grabbing"
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="snap-start min-w-[90vw] max-w-[95vw] sm:min-w-[360px] sm:max-w-[380px] bg-gray-900/80 text-white rounded-xl shadow-2xl overflow-hidden flex-shrink-0 border border-gray-800 backdrop-blur-xl hover:scale-105 hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="p-6">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-44 w-full object-cover rounded-xl mb-4 border border-gray-700"
                />
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-800 text-white border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition"
                    >
                      <FaCode /> Code
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full p-3 shadow-lg z-20 hover:scale-110 transition"
        >
          <MdKeyboardArrowRight size={28} />
        </button>
      </div>
    </main>
  );
}
