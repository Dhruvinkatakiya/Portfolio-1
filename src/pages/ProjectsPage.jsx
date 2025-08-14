import React from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { FiCalendar, FiUser, FiBookOpen, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";


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
    // github: "#",
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


const publications = [
  {
    id: 1,
    title: "Cryptography-Based Secure JSON Web Token for Robotic Telesurgery Systems in Healthcare 4.0",
    authors: "Dhruvin Katakiya",
    journal: "IEEE",
    publishDate: "22 May, 2025",
    type: "Research Paper",
    keySkills: ["JSON Web Token (JWT)", "Advanced Encryption Standard", "Cryptography", "Healthcare 4.0"],
    tags: ["Cryptography", "JWT", "AES Algorithm", "Robotic Surgery", "Healthcare 4.0", "Telesurgery", "Cybersecurity", "Medical IoT"],
    status: "Published",
    publisher: "IEEE",
    link: "https://ieeexplore.ieee.org/document/11006207", // Replace with actual IEEE paper link
    isUpcoming: false // Paper was published on May 22, 2025 - already published
  }
];



export default function ProjectsPage() {
  return (
    <main
      id="work"
      className="min-h-screen bg-black text-white py-12 sm:py-16 px-2 sm:px-6 font-sans overflow-x-hidden"
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

      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-6 px-1 sm:px-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent snap-x snap-mandatory w-full max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="snap-start min-w-[90vw] max-w-[95vw] sm:min-w-[360px] sm:max-w-[380px] bg-gray-900/80 text-white rounded-xl shadow-xl overflow-hidden flex-shrink-0 border border-gray-800 backdrop-blur-xl hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <img loading="lazy"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-40 w-full object-cover rounded-xl mb-4 border border-gray-700"
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-2"
                  >
                    <FaCode /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
   </div>
        
   <div className="mt-20">
  <h1 className="text-4xl md:text-5xl font-extrabold mt-28 text-center mb-4">
    Research &{" "}
    <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text">
      Publication
    </span>
  </h1>
  <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
    Advancing healthcare technology through innovative research
  </p>

  {/* Publication Card */}
  <div className="max-w-6xl mx-auto px-4 mb-12">
    {publications.map((publication) => (
      <motion.div
        key={publication.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/15 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>

        {/* Header Badges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between mb-8">
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Published
            </span>
            <span className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              IEEE Xplore
            </span>
            <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30">
              Research Paper
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-full border border-gray-700/50">
            <FiCalendar className="text-blue-400" />
            <span className="text-gray-300 font-medium">{publication.publishDate}</span>
          </div>
        </div>

        {/* Title */}
        <div className="relative z-10 mb-8">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
            {publication.title}
          </h2>
        </div>

        {/* Publication Details */}
        <div className="relative z-10 mb-8">
          <div className="grid md:grid-cols-1 gap-6">
            <div className="flex items-center gap-4 bg-gray-800/40 p-5 rounded-xl border border-gray-700/30">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                <FiBookOpen className="text-blue-400 text-xl" />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Published in</div>
                <div className="text-white font-semibold">2025 11th International Conference on Web Research (ICWR)</div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Key Technologies */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-yellow-500/30">
              <FiAward className="text-yellow-400 text-lg" />
            </div>
            <h3 className="text-xl font-bold text-white">Key Technologies</h3>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-4 gap-5">
            {publication.keySkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-500/15 to-pink-500/15 border border-purple-500/30 rounded-xl p-3 text-center hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group"
              >
                <div className="text-purple-300 font-semibold text-sm group-hover:text-purple-200 transition-colors">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <a
            href={publication.link} // Replace with actual IEEE link
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3"
          >
            <FiBookOpen className="text-xl" />
            View Paper
          </a>
          
          
        </div>
      </motion.div>
    ))}
  </div>
</div>
  
</div >

   
   
    </main>
  );
}
