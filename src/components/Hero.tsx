import React from "react"
import { FaReact, FaJava, FaDocker } from "react-icons/fa"
import { SiNextdotjs, SiSpringboot, SiMongodb } from "react-icons/si"

const stats = [
  { value: "3+",  label: "Years\nExperience" },
  { value: "5+", label: "Projects\nCompleted" },
  { value: "3+", label: "Technologies" },
  { value: "100%", label: "Client\nSatisfaction" },
]

const techIcons = [
  { icon: <FaReact size={20} />,      color: "#61dafb", label: "React"      },
  { icon: <SiNextdotjs size={20} />,  color: "#ffffff", label: "Next.js"    },
  { icon: <FaJava size={20} />,       color: "#f89820", label: "Java"       },
  { icon: <SiSpringboot size={20} />, color: "#6db33f", label: "Spring"     },
  { icon: <SiMongodb size={20} />,    color: "#47a248", label: "MongoDB"    },
  { icon: <FaDocker size={20} />,     color: "#2496ed", label: "Docker"     },
]

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-black via-emerald-950 to-black px-4 lg:px-8 pt-24 pb-0 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 flex-1">

        {/* Left */}
        <div className="flex flex-col items-start max-w-xl">

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

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-emerald-400">Full-Stack</span>
            <br />
            <span className="text-white">Developer</span>
          </h1>

          <p className="text-white/50 text-base leading-relaxed mb-3">
            Building digital experiences that merge creativity with technology.
          </p>
          <p className="text-white/35 text-sm leading-relaxed mb-10">
            Hi, I'm Karanis, a passionate full-stack developer with a knack for
            crafting seamless web applications. Specializing in modern web
            development and cyber systems.
          </p>

          <div className="flex items-center gap-3 mb-10">
            <a
              href="#contact"
              className="px-6 py-3 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(to right, #059669, #10b981)" }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-white/60 text-sm font-medium rounded-lg transition-all duration-300 hover:text-white"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              View Work →
            </a>
               <a
              href="https://docs.google.com/document/d/12v7Bbg8de_FOitc7cMZbEoBcQszXhhr3ooAzxOOrIew/edit?usp=sharing"
              className="px-6 py-3 text-white/60 text-sm font-medium rounded-lg transition-all duration-300 hover:text-white"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
             See Resume →
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-0">
            {stats.map((stat, i) => (
              <div key={stat.value} className="flex items-center">
                <div className="pr-6">
                  <div className="text-2xl font-bold text-emerald-400 leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/30 text-xs leading-tight whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-8 w-px mr-6 flex-shrink-0"
                    style={{ background: "rgba(16,185,129,0.2)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — image + floating icons */}
        <div className="flex-shrink-0 relative flex items-center justify-center">

          {/* Outer pulsing glow rings */}
          <div
            className="absolute rounded-full animate-ping"
            style={{
              width: "420px", height: "420px",
              border: "2px solid rgba(16,185,129,0.1)",
              animationDuration: "2s",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "400px", height: "400px",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "360px", height: "360px",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          />

          {/* Green glow behind image */}
          <div
            className="absolute rounded-full"
            style={{
              width: "320px", height: "320px",
              background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(16,185,129,0.1) 50%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Image */}
          <div
            className="relative rounded-full overflow-hidden"
            style={{
              width: "300px",
              height: "300px",
              border: "3px solid rgba(16,185,129,0.5)",
              boxShadow: `
                0 0 30px rgba(16,185,129,0.4),
                0 0 60px rgba(16,185,129,0.2),
                0 0 100px rgba(16,185,129,0.1),
                inset 0 0 20px rgba(16,185,129,0.1)
              `,
            }}
          >
            <img
              src="/dev-portfolio/icon.png"
              alt="Karanis"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay shine */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Floating tech icon pills — positioned around the image */}
          {techIcons.map((t, i) => {
            const positions = [
              { top: "0%",   left: "50%",   transform: "translate(-50%, -50%)" },
              { top: "18%",  left: "100%",  transform: "translate(-20%, -50%)" },
              { top: "75%",  left: "100%",  transform: "translate(-20%, -50%)" },
              { top: "100%", left: "50%",   transform: "translate(-50%, -20%)" },
              { top: "75%",  left: "0%",    transform: "translate(-80%, -50%)" },
              { top: "18%",  left: "0%",    transform: "translate(-80%, -50%)" },
            ]
            const pos = positions[i]
            return (
              <div
                key={t.label}
                className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110"
                style={{
                  ...pos,
                  background: "rgba(0,0,0,0.7)",
                  border: `1px solid ${t.color}40`,
                  color: t.color,
                  backdropFilter: "blur(8px)",
                  boxShadow: `0 0 12px ${t.color}20`,
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

      {/* Bottom scroll + wave */}
      <div className="w-full flex flex-col items-center mt-16">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-emerald-500/50 hover:text-emerald-400 transition-colors duration-200 mb-6"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div className="w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
            style={{ height: "60px" }}
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
