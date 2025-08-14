import React from "react";

const skills = {
  frontend: [
    { name: "Html", value: 95 },
    { name: "CSS", value: 90 },
    { name: "Tailwind CSS", value: 88 },
    { name: "Raect.js", value: 92 },
    { name: "Next.js", value: 85 },
    { name: "Flutter", value: 80 },
  ],
  backend: [
    { name: "C++", value: 90 },
    { name: "Node.js", value: 90 },
    { name: "Mysql", value: 85 },
    { name: "PostgreSQL", value: 88 },
    { name: "Firebase", value: 82 },

  ],
  tools: [
    { name: "Git", value: 95 },
    { name: "Versal", value: 85 },
    { name: "AWS", value: 80 },
    { name: "Figma", value: 88 },
    { name: "n8n", value: 82 },
  ],
};

const certifications = [
  {
    icon: (
      <img loading="lazy"
        src="https://skillicons.dev/icons?i=aws"
        alt="Tech Stack Icons"
        className="w-full max-w-xl mx-auto"
      />

    ),
    title: "AWS Certified Developer",
    org: "Amazon Web Services",
    year: "2025",
    color: "bg-gradient-to-r from-orange-500 to-pink-400",
  },
  {
    icon: (
      <img loading="lazy"
        src="https://skillicons.dev/icons?i=react"
        alt="Tech Stack Icons"
        className="w-full max-w-xl mx-auto"
      />
    ),
    title: "Frontend Developer (React)",
    org: "HackerRank",
    year: "2025",
    color: "bg-gradient-to-r from-cyan-500 to-blue-400",
  },
  {
  icon: (
    <img loading="lazy"
      src="https://en.wikipedia.org/wiki/Flipkart#/media/File:Flipkart_Logo_as_of_2025.png"
      alt="Flip"
      className="w-12 h-12 object-contain"
    />
  ),
    title: "Flipkart GRiD 6.0",
    org: "unstop",
    year: "202",
    color: "bg-gradient-to-r from-blue-400 to-cyan-400",
  },
];

function ProgressBar({ value, color }) {
  return (
    <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 mb-1 relative overflow-hidden">
      <div
        className="h-1.5 rounded-full transition-all duration-700"
        style={{
          width: `${value}%`,
          background: `linear-gradient(90deg, ${color}, #fff0)`,
        }}
      />
    </div>
  );
}

export default function SkillPage() {
  return (
    <main id="skills" className="scroll-mt-24 min-h-screen bg-black flex flex-col items-center justify-center relative overflow-x-hidden font-sans">
    
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
      <section className="relative z-10 flex flex-col items-center w-full mt-24 px-2 sm:px-6 box-border">
        {/* Title */}
        <h1 className="text-[44px] font-extrabold text-white text-center mb-2  leading-none tracking-tight drop-shadow-lg">
          Skills <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">& Expertise</span>
        </h1>
        <p className="text-center text-base text-gray-300 mb-10 max-w-xl font-medium">
          A comprehensive toolkit of modern technologies and methodologies
        </p>
        {/* Skill Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center items-start mb-10">
          {/* Frontend */}
          <div className="bg-gradient-to-br from-gray-900/95 to-cyan-900/80 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-xl max-w-sm w-full flex flex-col p-6 transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(6,182,212,0.18)] hover:-translate-y-1"
            style={{ boxShadow: "0 4px 32px 0 rgba(34,211,238,0.08) inset" }}>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-2.5 rounded-lg mr-3 flex items-center justify-center shadow">
                {/* Code Icon */}
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#22d3ee" />
                  <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M9 9l-2 3 2 3M15 9l2 3-2 3" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white drop-shadow">Frontend Development</h2>
                <div className="text-xs text-gray-400 font-medium">User Interface & Experience</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {skills.frontend.map((skill, idx) => (
                <div key={skill.name} className="bg-gray-900/80 rounded-lg p-2 flex flex-col items-center shadow hover:shadow-lg transition">
                  <span className="text-white text-[13px] font-semibold">{skill.name}</span>
                  <span className="text-gray-400 text-[10px] mt-1">{skill.value}%</span>
                  <ProgressBar
                    value={skill.value}
                    color={
                      idx === 0 ? "#22d3ee" :
                        idx === 1 ? "#38bdf8" :
                          idx === 2 ? "#818cf8" :
                            idx === 3 ? "#06b6d4" :
                              idx === 4 ? "#a3e635" : "#f472b6"
                    }
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-400 text-xs">Proficiency Level</span>
              <span className="text-cyan-400 font-bold text-xs">Expert</span>
            </div>
          </div>
          {/* Backend */}
          <div className="bg-gradient-to-br from-gray-900/95 to-purple-900/80 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-xl max-w-sm w-full flex flex-col p-6 transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(168,139,250,0.18)] hover:-translate-y-1"
            style={{ boxShadow: "0 4px 32px 0 rgba(168,139,250,0.08) inset" }}>
            <div className="flex items-center mb-3">
              <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-2.5 rounded-lg mr-3 flex items-center justify-center shadow">
                {/* Backend Icon */}
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#a78bfa" />
                  <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white drop-shadow">Backend</h2>
                <div className="text-xs text-gray-400 font-medium">Server & Database</div>
              </div>
            </div>
            <div className="space-y-2 mb-2">
              {skills.backend.map((skill, idx) => (
                <div key={skill.name} className="hover:shadow-lg transition">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-[13px] font-semibold">{skill.name}</span>
                    <span className="text-gray-400 text-[10px]">{skill.value}%</span>
                  </div>
                  <ProgressBar
                    value={skill.value}
                    color={
                      idx === 0 ? "#f472b6" :
                        idx === 1 ? "#818cf8" :
                          idx === 2 ? "#a78bfa" :
                            idx === 3 ? "#38bdf8" : "#f472b6"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Tools & DevOps */}
          <div className="bg-gradient-to-br from-gray-900/95 to-blue-900/80 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-xl max-w-sm w-full flex flex-col p-6 transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(56,189,248,0.18)] hover:-translate-y-1"
            style={{ boxShadow: "0 4px 32px 0 rgba(56,189,248,0.08) inset" }}>
            <div className="flex items-center mb-3">
              <div className="bg-gradient-to-r from-cyan-400 to-pink-400 p-2.5 rounded-lg mr-3 flex items-center justify-center shadow">
                {/* Tools Icon */}
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#38bdf8" />
                  <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white drop-shadow">Tools & DevOps</h2>
                <div className="text-xs text-gray-400 font-medium">Development & Design</div>
              </div>
            </div>
            <div className="space-y-2 mb-2">
              {skills.tools.map((skill, idx) => (
                <div key={skill.name} className="hover:shadow-lg transition">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-[13px] font-semibold">{skill.name}</span>
                    <span className="text-gray-400 text-[10px]">{skill.value}%</span>
                  </div>
                  <ProgressBar
                    value={skill.value}
                    color={
                      idx === 0 ? "#38bdf8" :
                        idx === 1 ? "#06b6d4" :
                          idx === 2 ? "#f472b6" :
                            idx === 3 ? "#818cf8" : "#a78bfa"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Certifications & Awards */}
        {/* Certifications & Awards */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8 leading-none tracking-tight drop-shadow-lg">
          Certifications <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">& Awards</span>
        </h2>

        <div className="w-full max-w-6xl px-4 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="relative flex items-center p-4 gap-4 bg-gradient-to-br from-gray-900/95 to-gray-800/90 rounded-2xl shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 group"
            >
              {/* Gradient Border Layer */}
              <span
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  padding: "2px",
                  background: "linear-gradient(90deg, #06b6d4, #a78bfa, #f472b6)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  opacity: 0.15,
                  zIndex: 0,
                }}
              ></span>

              {/* Icon */}
              <div
                className={`z-10 flex items-center justify-center p-3 rounded-xl shadow-xl transition-transform duration-300 transform group-hover:scale-105 ${cert.color}`}
              >
                {cert.icon}
              </div>

              {/* Text Beside Icon */}
              <div className="z-10 text-left flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium truncate">{cert.org}</p>
                <p className="text-[10px] text-gray-500">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
      {/* Gradient animation for title */}
      <style>
        {`
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
    </main>
  );
}