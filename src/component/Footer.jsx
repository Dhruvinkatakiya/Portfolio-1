import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full px-2 sm:px-6 py-8 bg-black text-white relative overflow-x-hidden border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Name & Role */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
            DK
          </div>
          <div>
            <h4 className="font-semibold text-base">Dhruvin Katakiya</h4>
            <p className="text-gray-400 text-sm">Frontend Developer & UI Designer</p>
          </div>
        </div>

        {/* Center - Copyright */}
        <div className="text-center text-sm text-gray-400 leading-5">
          © {new Date().getFullYear()} Dhruvin Katakiya. All rights reserved. <br className="md:hidden" />
          <span className="text-xs text-gray-500">
            <br />
            Crafted with <span className="text-red-500">❤️</span> & lots of ☕
          </span>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-3">
          <a
            href="https://github.com/Dhruvinkatakiya"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f1f1f] p-2 rounded-full hover:bg-gray-700 hover:shadow-md transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="text-white w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/dhruvin-katakiya"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f1f1f] p-2 rounded-full hover:bg-gray-700 hover:shadow-md transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-white w-4 h-4" />
          </a>
          <a
            href="mailto:katakiyadhruvin1@gmail.com"
            className="bg-[#1f1f1f] p-2 rounded-full hover:bg-gray-700 hover:shadow-md transition duration-200"
            aria-label="Email"
          >
            <FaEnvelope className="text-white w-4 h-4" />
          </a>
        </div>
      </div>

    
    </footer>
  );
}
