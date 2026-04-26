import React from "react"
import { FaReact, FaJava, FaDocker } from "react-icons/fa"
import { SiNextdotjs, SiSpringboot, SiMongodb } from "react-icons/si"

const stats = [
  { value: "3+",   label: "Years\nExperience"    },
  { value: "5+",   label: "Projects\nCompleted"  },
  { value: "3+",   label: "Technologies"         },
  { value: "100%", label: "Client\nSatisfaction" },
]

const techIcons = [
  { icon: <FaReact size={16} />,      color: "#61dafb", label: "React"   },
  { icon: <SiNextdotjs size={16} />,  color: "#ffffff", label: "Next.js" },
  { icon: <FaJava size={16} />,       color: "#f89820", label: "Java"    },
  { icon: <SiSpringboot size={16} />, color: "#6db33f", label: "Spring"  },
  { icon: <SiMongodb size={16} />,    color: "#47a248", label: "MongoDB" },
  { icon: <FaDocker size={16} />,     color: "#2496ed", label: "Docker"  },
]

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-between bg-gradient-to-r from-black via-emerald-950 to-black pt-16 pb-0"
      style={{ overflowX: "hidden" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-10 flex-1 px-4 sm:px-6 lg:px-8 py-12">

        {/* Left — always visible */}
        <div className="flex flex-col items-start w-full md:max-w-xl">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#10b981",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-emerald-400">Full-Stack</span>
            <br />
            <span className="text-white">Developer</span>
          </h1>

          <p className="text-white/50 text-base leading-relaxed mb-3">
            Building digital experiences that merge creativity with technology.
          </p>
          <p className="text-white/35 text-sm leading-relaxed mb-8">
            Hi, I'm Karanis, a passionate full-stack developer with a knack for
            crafting seamless web applications. Specializing in modern web
            development and cyber systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#contact"
              className="px-5 py-2.5 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:opacity-90"
              style={{ background: "linear-gradient(to right, #059669, #10b981)" }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 text-white/60 text-sm font-medium rounded-lg transition-colors hover:text-white"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              View Work →
            </a>
            <a
              href="https://docs.google.com/document/d/12v7Bbg8de_FOitc7cMZbEoBcQszXhhr3ooAzxOOrIew/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-white/60 text-sm font-medium rounded-lg transition-colors hover:text-white"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Resume →
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center w-full overflow-x-auto pb-1">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <div className="pr-4 sm:pr-6">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400 leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/30 text-xs leading-tight whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div
                    className="h-8 w-px mr-4 sm:mr-6 flex-shrink-0"
                    style={{ background: "rgba(16,185,129,0.2)" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile image + tech pills — only on small screens */}
          <div className="mt-10 w-full md:hidden">
            <div className="flex justify-center mb-6">
              <div
                className="rounded-full overflow-hidden"
                style={{
                  width: "160px",
                  height: "160px",
                  border: "2px solid rgba(16,185,129,0.5)",
                  boxShadow: "0 0 30px rgba(16,185,129,0.3), 0 0 60px rgba(16,185,129,0.1)",
                }}
              >
                <img
                  src="/dev-portfolio/icon.png"
                  alt="Karanis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {techIcons.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    border: `1px solid ${t.color}30`,
                    color: t.color,
                  }}
                >
                  {t.icon}
                  <span className="text-white/60">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right — desktop ONLY, completely removed from DOM on mobile */}
        <div
          className="hidden md:flex flex-shrink-0 relative items-center justify-center"
          style={{ width: "340px", height: "340px" }}
        >
          {/* Pulsing ring */}
          <div
            className="absolute rounded-full animate-ping"
            style={{
              width: "340px", height: "340px",
              border: "1px solid rgba(16,185,129,0.08)",
              animationDuration: "3s",
            }}
          />
          <div className="absolute rounded-full"
            style={{ width: "320px", height: "320px", border: "1px solid rgba(16,185,129,0.12)" }}
          />
          <div className="absolute rounded-full"
            style={{ width: "290px", height: "290px", border: "1px solid rgba(16,185,129,0.18)" }}
          />

          {/* Glow */}
          <div className="absolute rounded-full"
            style={{
              width: "260px", height: "260px",
              background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Image */}
          <div
            className="relative rounded-full overflow-hidden z-10"
            style={{
              width: "220px", height: "220px",
              border: "3px solid rgba(16,185,129,0.5)",
              boxShadow: `
                0 0 30px rgba(16,185,129,0.4),
                0 0 60px rgba(16,185,129,0.2),
                0 0 100px rgba(16,185,129,0.1)
              `,
            }}
          >
            <img
              src="/dev-portfolio/icon.png"
              alt="Karanis"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, transparent 60%)" }}
            />
          </div>

          {/* Floating icons */}
          {techIcons.map((t, i) => {
            const positions = [
              { top: "0%",   left: "50%",  transform: "translate(-50%, -50%)"  },
              { top: "15%",  left: "98%",  transform: "translate(0%, -50%)"    },
              { top: "78%",  left: "98%",  transform: "translate(0%, -50%)"    },
              { top: "100%", left: "50%",  transform: "translate(-50%, -10%)"  },
              { top: "78%",  left: "2%",   transform: "translate(-100%, -50%)" },
              { top: "15%",  left: "2%",   transform: "translate(-100%, -50%)" },
            ]
            return (
              <div
                key={t.label}
                className="absolute z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium hover:scale-110 transition-transform duration-200"
                style={{
                  ...positions[i],
                  background: "rgba(0,0,0,0.8)",
                  border: `1px solid ${t.color}40`,
                  color: t.color,
                  backdropFilter: "blur(8px)",
                  boxShadow: `0 0 10px ${t.color}20`,
                  whiteSpace: "nowrap",
                }}
              >
                {t.icon}
                <span className="text-white/70">{t.label}</span>
              </div>
            )
          })}
        </div>

      </div>

      {/* Scroll + wave */}
      <div className="w-full flex flex-col items-center mt-8">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-emerald-500/50 hover:text-emerald-400 transition-colors duration-200 mb-4"
        >
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div className="w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
            style={{ height: "50px" }}
          >
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="rgba(6,78,59,0.15)"
            />
            <path
              d="M0,55 C360,20 720,80 1080,40 C1260,20 1380,50 1440,55 L1440,80 L0,80 Z"
              fill="rgba(16,185,129,0.05)"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero