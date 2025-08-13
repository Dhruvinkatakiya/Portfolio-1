  import React from "react";

export default function AboutPage() {
  return (
    <main id="about" className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(32)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400 opacity-20 blur-2xl"
            style={{
              width: `${10 + Math.random() * 18}px`,
              height: `${10 + Math.random() * 18}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transition: "all 1s"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex mt-14 flex-col items-center w-full px-4 md:px-8 lg:px-12 py-8">
        {/* Title */}
        <h1 className="text-[56px] font-extrabold text-white text-center mb-2 leading-none tracking-tight drop-shadow-lg">
          About {" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Me
          </span>
        </h1>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl font-medium">
          Passionate about pushing the boundaries of what's possible in web development.
        </p>

        {/* Cards Layout */}
        <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-start md:items-stretch">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-xl w-full md:w-3/5 flex flex-col p-10 transition-all duration-300 hover:shadow-[0_0_40px_0_rgba(0,255,255,0.15)]">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-3 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                {/* Sparkle Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M17.07 6.93l2.12-2.12M4.81 19.19l2.12-2.12M17.07 17.07l2.12 2.12M4.81 4.81l2.12 2.12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="4" fill="white" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white drop-shadow">About Me</h2>
                <div className="text-sm text-gray-400 font-medium">From curiosity to mastery</div>
              </div>
            </div>
            <div className="text-gray-300 text-base mb-6 leading-relaxed">
             With a strong foundation in computer science and engineering, I've evolved from building small applications to engineering real-world digital solutions. My journey began with curiosity during my diploma years and matured through hands-on development, research, and impactful collaborations.
             <br/><br/>
              I have 3 years of development experience, including internships and freelance work. I specialize in crafting seamless user experiences using <strong> React.js, Flutter, Firebase</strong> and <strong>TailwindCSS,</strong>and building scalable backend systems with <strong>Node.js and MySQL</strong> .
             </div>
              
            {/* Timeline */}
            <div className="mb-6 space-y-3">
              <h3 className="text-lg text-white font-bold mb-2">Existing Work</h3>

              {[
                {
                  title: "Freelance ",
                  company: "Dheera Circuits",
                  color: "bg-cyan-400"
                },
                {
                  title: "Full-Stack Web",
                  company: "Flix-tex E-Commerce Platform",
                  color: "bg-purple-400"
                },
                {
                  title: "Flutter App ",
                  company: "Smart Parents App",
                  color: "bg-pink-400"
                },
                {
                  title: "Technical Head",
                  company: "ACES, Nirma University",
                  color: "bg-green-400"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.color} shadow`}></span>
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="text-gray-400 text-sm ml-2">{item.company}</span>
                </div>
              ))}
            </div>


            {/* Tags */}
            <div className="flex gap-3 flex-wrap mt-2">
              {"🔍 Problem Solver,🎨 Creative Thinker,🤝 Collaborative Leader,📚 Lifelong Learner".split(",").map((tag, i) => (
                <span
                  key={i}
                  className={`bg-gray-800 text-sm font-semibold shadow hover:scale-105 transition px-4 py-2 rounded-full text-${["cyan", "purple", "yellow", "green"][i]}-400`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Side Feature Cards */}
          <div className="flex flex-col gap-8 w-full md:w-2/5 justify-center">
            {[{
              title: "Clean Architecture",
              color: "cyan",
              desc: "Building scalable, maintainable systems with modern design patterns and best practices.",
              icon: (
                <path stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
              )
            }, {
              title: "Design Systems",
              color: "purple",
              desc: "Creating cohesive design languages that ensure consistency across all platforms.",
              icon: (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-12 h-12 fill-current text-purple-500">
                    <path d="M576 320C576 320.9 576 321.8 576 322.7C575.6 359.2 542.4 384 505.9 384L408 384C381.5 384 360 405.5 360 432C360 435.4 360.4 438.7 361 441.9C363.1 452.1 367.5 461.9 371.8 471.8C377.9 485.6 383.9 499.3 383.9 513.8C383.9 545.6 362.3 574.5 330.5 575.8C327 575.9 323.5 576 319.9 576C178.5 576 63.9 461.4 63.9 320C63.9 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320zM192 352C192 334.3 177.7 320 160 320C142.3 320 128 334.3 128 352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352zM192 256C209.7 256 224 241.7 224 224C224 206.3 209.7 192 192 192C174.3 192 160 206.3 160 224C160 241.7 174.3 256 192 256zM352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192C337.7 192 352 177.7 352 160zM448 256C465.7 256 480 241.7 480 224C480 206.3 465.7 192 448 192C430.3 192 416 206.3 416 224C416 241.7 430.3 256 448 256z" />
                  </svg>
                </>
              )
            },

            {
              title: "Performance",
              color: "pink",
              desc: "Optimizing applications for lightning-fast performance and exceptional user experience.",
              icon: (
                <path stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7v8l8-12h-7z" />
              )
            }].map((card, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-gray-900/80 to-${card.color}-900/80 rounded-2xl shadow-xl p-8 border border-gray-800 backdrop-blur-md flex-1 flex flex-col justify-center transition-all duration-300 hover:shadow-[0_0_40px_0_rgba(255,255,255,0.15)] hover:scale-[1.07]`}
                style={{ minHeight: "180px" }}
              >
                <div className="flex items-center mb-4">
                  <svg width="45" height="45" fill="none" viewBox="0 0 24 24" className="mr-4">
                    {card.icon}
                  </svg>
                  <span className="text-xl font-bold text-white">{card.title}</span>
                </div>
                <div className="text-gray-300 text-base font-medium">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
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
