import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaAward, FaLeetcode } from "react-icons/fa";
import { FiDownload, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profileImg from "../assets/profile.jpeg";
import { SiLeetcode } from "react-icons/si";
import { FaBook, FaCode, FaPencilRuler, FaMedal } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';



const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen w-full bg-black text-white px-2 sm:px-6 py-32 sm:py-44 mt-[-80px] sm:mt-[-120px] flex justify-center items-start relative overflow-x-hidden overflow-y-visible"
    >

       <Helmet>
        <meta name="description" content="Welcome to my portfolio website" />
      </Helmet>
      {/* Animated floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400 opacity-20 blur-xl animate-pulse"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 z-10">
        <motion.div
          variants={cardVariants}
          className="lg:col-span-2 flex flex-col justify-center bg-gradient-to-br from-gray-900/80 to-black/80 p-10 rounded-3xl shadow-lg border border-gray-800 backdrop-blur-md"
        >
          <div className="mb-4">
            <button className="px-4 py-1 bg-gray-800  mb-5 text-sm rounded-full text-gray-300 border border-gray-700 animate-pulse">
              ✨ Available for exciting projects
            </button>
          </div>
          <h1 className="text-4xl sm:text-7xl mb-5 font-bold leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Dhruvin Katakiya
            </span>
          </h1>
          <h2 className="text-2xl mt-2 text-purple-400 font-semibold">
            <ReactTyped
              strings={[
                "Full-Stack Developer",
                "Problem Solver",
                "Flutter Developer",
                "UI/UX Enthusiast",
                "Freelancer",

              ]}
              typeSpeed={60}
              backSpeed={30}
              backDelay={1000}
              loop
            />

          </h2>
          <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
            I craft exceptional digital experiences through innovative design and cutting-edge technology.
            Transforming ideas into reality with passion, precision, and a touch of magic ✨
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#work"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 hover:shadow-lg transform transition duration-300 text-white font-medium flex items-center gap-2"
            >
              <FiSend /> Explore My Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 rounded-full border border-gray-600 hover:bg-gray-800 hover:scale-105 hover:shadow-md transform transition duration-300 text-white font-medium flex items-center gap-2"
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <span className="bg-gray-800 px-4 py-1 rounded-full text-sm flex items-center gap-2 border border-gray-700 hover:scale-105 hover:shadow   animate-bounce">
              Flutter
            </span>
            <span className="bg-gray-800 px-4 py-1 rounded-full text-sm flex items-center gap-2 border border-gray-700 hover:scale-105 hover:shadow  animate-bounce">
              React.js
            </span>
            <span className="bg-gray-800 px-4 py-1 rounded-full text-sm flex items-center gap-2 border border-gray-700 hover:scale-105 hover:shadow  animate-bounce">
              Figma
            </span>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="flex flex-col gap-6">
          <div className="bg-gradient-to-b from-gray-900/80 to-black/80 p-6 rounded-2xl border border-gray-800 text-center shadow-xl backdrop-blur-md hover:shadow-2xl transition">
            <img loading="lazy"
              src={profileImg}
              alt="Profile"
              className="w-52 h-52 object-cover rounded-full mx-auto mb-3 border-4 border-cyan-400 shadow-md hover:scale-105 transform transition"
            />

            <div className="flex justify-center gap-3">
              <a className="p-4 rounded-full bg-gray-800 hover:bg-cyan-600 transition" href="https://github.com/Dhruvinkatakiya"><FaGithub /></a>
              <a className="p-4 rounded-full bg-gray-800 hover:bg-blue-700 transition" href="https://linkedin.com/in/dhruvin-katakiya"><FaLinkedin /></a>

              <a className="p-4 rounded-full bg-gray-800 hover:bg-red-600 transition" href="mailto:katakiyadhruvin1@gmail.com"><FaEnvelope /></a>
              <a
                className="p-4 rounded-full bg-gray-800 hover:bg-yellow-500 transition"
                href="https://leetcode.com/u/dhruvin_katakiya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="text-white" />

              </a>
            </div>
          </div>

          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-gray-900/70 to-black/80 p-6 sm:p-8 rounded-3xl border border-gray-800 backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 gap-6 text-center text-sm font-medium shadow-md hover:shadow-xl transition"
          >
            {/* Full-Stack Projects */}
            <div className="flex flex-col items-center justify-center gap-2">
              <FaCode className="text-cyan-400 text-3xl mb-1 drop-shadow" />
              <span className="text-3xl font-extrabold text-white">15+</span>
              <p className="text-gray-400 text-xs tracking-wider uppercase">Industry Level Projects</p>
            </div>

            {/* UI/UX Designs */}
            <div className="flex flex-col items-center justify-center gap-2">
              <FaPencilRuler className="text-purple-400 text-3xl mb-1 drop-shadow" />
              <span className="text-3xl font-extrabold text-white">25+</span>
              <p className="text-gray-400 text-xs tracking-wider uppercase">UI/UX Designs Created</p>
            </div>

            {/* Research Papers */}
            <div className="flex flex-col items-center justify-center gap-2">
              <FaBook className="text-yellow-400 text-3xl mb-1 drop-shadow" />
              <span className="text-3xl font-extrabold text-white">1</span>
              <p className="text-gray-400 text-xs tracking-wider uppercase">Research Papers Published</p>
            </div>

            {/* Certifications */}
            <div className="flex flex-col items-center justify-center gap-2">
              <FaMedal className="text-pink-500 text-3xl mb-1 drop-shadow" />
              <span className="text-3xl font-extrabold text-white">10+</span>
              <p className="text-gray-400 text-xs tracking-wider uppercase">Certifications Earned</p>
            </div>
          </motion.div>



          {/* <motion.div variants={cardVariants} className="bg-gray-900/80 p-4 rounded-2xl border border-gray-800 flex items-center justify-between hover:shadow-lg transition">
            <div>
              <h4 className="text-lg font-semibold text-purple-400 p-1 ">Expertise</h4>
              <p className="text-sm text-gray-400 p-1 "> · UI/UX    · WEB DELOPMENT  <br />
                · APP DEVELOPMENT  · n8n </p>
            </div>
            <FaAward className=" text-3xl text-purple-400 animate-pulse" />
          </motion.div> */}
        </motion.div>
      </div>
    </motion.section>
  );
}
