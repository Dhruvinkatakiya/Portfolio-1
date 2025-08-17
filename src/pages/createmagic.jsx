import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function CreateMagicPage() {
  return (
    <div id="contact" className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-x-hidden font-sans">
      {/* Floating particles with motion */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-900 opacity-20 blur-lg animate-pulse"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-2 sm:px-0 animate-fade-in-up">
        {/* Title */}
        <h1 className="text-[56px] font-extrabold text-white text-center mb-4 mt-20 leading-none tracking-tight">
          Let's Create{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Magic
          </span>
        </h1>
        <p className="text-center text-[20px] text-gray-300 mb-10 max-w-xl font-medium">
          Ready to transform your vision into reality? Let's collaborate and build something extraordinary that makes a difference.
        </p>

        {/* Contact Cards */}
        <div className="mx-auto w-full max-w-2xl sm:max-w-3xl bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-0 border border-gray-800 backdrop-blur-md flex flex-col items-center mb-8 transition-all duration-300 animate-fade-in">
          <div className="flex w-full justify-center items-center py-10 px-2 sm:px-8 gap-0 flex-wrap">
            {[
              {
                title: "Email Me",
                subtitle: "dev.dhruvin.0.1@gmail.com",
                note: "Drop me a line anytime",
                color: "bg-red-500",
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.01L12 13l8-6.99V6H4zm16 2.236-7.447 6.504a2 2 0 0 1-2.106 0L4 8.236V18h16V8.236z"></path>
                  </svg>
                ),
              },
              {
                title: "LinkedIn",
                subtitle: "Dhruvin Katakiya",
                note: "Let's network professionally",
                color: "bg-blue-500",
                icon: (
                  <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7.5 0h3.7v1.7h.05c.52-.98 1.8-2 3.7-2 3.95 0 4.68 2.6 4.68 6v6.3h-4v-5.6c0-1.4-.03-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.7h-4V8z" />
                  </svg>
                ),
              },
              {
                title: "Connect Me",
                subtitle: "+91 9537998165",
                note: "Call Now",
                color: "bg-green-500",
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.05 11.05 0 0 0 3.47.55 1 1 0 0 1 1 1v3.34a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4.99a1 1 0 0 1 1-1H7.4a1 1 0 0 1 1 1c0 1.2.19 2.38.55 3.47a1 1 0 0 1-.25 1.01l-2.08 2.32z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center px-4 py-4 m-2 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className={`${item.color} p-4 rounded-xl mb-3 text-white text-4xl flex items-center justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-0">{item.subtitle}</p>
                <p className="text-gray-400 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-8 animate-fade-in">
          <a
            href="mailto:katakiyadhruvin1@gmail.com"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:scale-110 transition text-base"
          >
            <FaEnvelope /> Start a Project
          </a>
          <a
            href="https://www.linkedin.com/in/dhruvin-katakiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-full border border-gray-700 shadow hover:scale-110 transition text-base"
          >
            <FaLinkedin /> Connect on LinkedIn
          </a>
        </div>

        {/* Stats */}
        {/* <div className="flex flex-wrap gap-6 sm:gap-12 text-center text-white mb-2 justify-center animate-fade-in-up">
          {[
            ["50+", "Projects Delivered"],
            ["100%", "Client Satisfaction"],
            ["5+", "Years Experience"],
            ["24/7", "Support Available"],
          ].map(([val, label], i) => (
            <div key={i} className="hover:scale-105 transition-all duration-300">
              <div className="text-[22px] font-bold">{val}</div>
              <div className="text-xs text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out both;
          }
          .animate-fade-in {
            animation: fadeInUp 1.2s ease-out both;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 3s ease infinite;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}
