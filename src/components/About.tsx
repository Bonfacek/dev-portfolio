import React from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDocker, FaLinux, FaTerminal } from "react-icons/fa"
import { SiRedux, SiNextdotjs, SiSpringboot, SiRedis, SiApachekafka, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si"

const frontendSkills = [
  { name: "HTML",       icon: <FaHtml5      className="text-orange-500" size={20} /> },
  { name: "CSS",        icon: <FaCss3Alt    className="text-blue-500"   size={20} /> },
  { name: "JavaScript", icon: <FaJs         className="text-yellow-400" size={20} /> },
  { name: "Redux",      icon: <SiRedux      className="text-purple-500" size={20} /> },
  { name: "React",      icon: <FaReact      className="text-cyan-400"   size={20} /> },
  { name: "Next.js",    icon: <SiNextdotjs  className="text-white"      size={20} /> },
]

const backendSkills = [
  { name: "Java",        icon: <FaJava       className="text-red-500"   size={20} /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" size={20} /> },
  { name: "Redis",       icon: <SiRedis      className="text-red-500"   size={20} /> },
  { name: "Kafka",       icon: <SiApachekafka className="text-white"    size={20} /> },
]

const dbSkills = [
  { name: "MySQL",      icon: <SiMysql      className="text-blue-400"   size={20} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500"   size={20} /> },
  { name: "MongoDB",    icon: <SiMongodb    className="text-green-500"  size={20} /> },
  { name: "Bash",       icon: <FaTerminal   className="text-gray-300"   size={20} /> },
  { name: "Linux",      icon: <FaLinux      className="text-yellow-300" size={20} /> },
  { name: "Docker",     icon: <FaDocker     className="text-blue-400"   size={20} /> },
]

function ScrollCard({ title, skills, borderColor }: {
  title: string
  skills: { name: string; icon: React.ReactNode }[]
  borderColor: string
}) {
  return (
    <div
      className="flex-1 min-w-[280px] relative"
      style={{
        perspective: "1000px",
        filter: `drop-shadow(0 20px 30px ${borderColor}30)`,
      }}
    >
      <div
        style={{
          transform: "rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      >

        {/* Top outer roll */}
        <div style={{
          height: "50px",
          background: `linear-gradient(to bottom, ${borderColor}15, ${borderColor}05)`,
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          border: `1.5px solid ${borderColor}`,
          borderBottom: "none",
          position: "relative",
          zIndex: 3,
          boxShadow: `inset 0 6px 12px rgba(0,0,0,0.5), 0 -4px 8px ${borderColor}20`,
        }} />

        {/* Top inner fold shadow */}
        <div style={{
          height: "24px",
          margin: "0 24px",
          background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2))`,
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          border: `1.5px solid ${borderColor}60`,
          borderTop: "none",
          marginTop: "-2px",
          position: "relative",
          zIndex: 2,
          boxShadow: `inset 0 -4px 8px rgba(0,0,0,0.6)`,
        }} />

        {/* Body */}
        <div style={{
          background: `linear-gradient(160deg, #0d1117 0%, #0a0f1e 50%, #060810 100%)`,
          border: `1.5px solid ${borderColor}`,
          borderTop: "none",
          borderBottom: "none",
          padding: "28px 24px",
          marginTop: "-1px",
          position: "relative",
          zIndex: 1,
          boxShadow: `
            inset 4px 0 12px rgba(0,0,0,0.4),
            inset -4px 0 12px rgba(0,0,0,0.4),
            4px 0 0 ${borderColor}10,
            -4px 0 0 ${borderColor}10
          `,
        }}>
          {/* Subtle vertical light line for paper depth */}
          <div style={{
            position: "absolute",
            top: 0, bottom: 0, left: "12px",
            width: "1px",
            background: `linear-gradient(to bottom, transparent, ${borderColor}20, transparent)`,
          }} />
          <div style={{
            position: "absolute",
            top: 0, bottom: 0, right: "12px",
            width: "1px",
            background: `linear-gradient(to bottom, transparent, ${borderColor}20, transparent)`,
          }} />

          <h3 className="text-xl font-bold text-center mb-5" style={{ color: borderColor }}>
            {title}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${borderColor}25`,
                  boxShadow: `0 2px 8px rgba(0,0,0,0.3)`,
                }}
              >
                {skill.icon}
                <span className="text-white/80 text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom inner fold shadow */}
        <div style={{
          height: "24px",
          margin: "0 24px",
          background: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))`,
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          border: `1.5px solid ${borderColor}60`,
          borderBottom: "none",
          marginBottom: "-2px",
          position: "relative",
          zIndex: 2,
          boxShadow: `inset 0 4px 8px rgba(0,0,0,0.6)`,
        }} />

        {/* Bottom outer roll */}
        <div style={{
          height: "50px",
          background: `linear-gradient(to top, ${borderColor}15, ${borderColor}05)`,
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          border: `1.5px solid ${borderColor}`,
          borderTop: "none",
          position: "relative",
          zIndex: 3,
          boxShadow: `inset 0 -6px 12px rgba(0,0,0,0.5), 0 4px 8px ${borderColor}20`,
        }} />

        {/* 3D bottom face — thickness illusion */}
        <div style={{
          height: "8px",
          margin: "0 8px",
          background: `linear-gradient(to bottom, ${borderColor}30, transparent)`,
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          transform: "translateY(-2px) scaleY(0.5)",
          opacity: 0.6,
        }} />

      </div>
    </div>
  )
}

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-black via-emerald-950 to-black px-4 lg:px-10 py-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-emerald-400 mb-2">About Me</h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="h-px w-16 bg-emerald-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <div className="h-px w-16 bg-emerald-800" />
        </div>
      </div>

      <div className="max-w-4xl w-full mb-16">
        <p className="text-white/70 text-lg leading-relaxed font-medium">
          I'm{" "}
          <span className="text-emerald-400 font-semibold">Karanis</span>, a
          passionate full-stack developer with a knack for crafting seamless web
          applications. With a strong foundation and over 5 years of experience in both front-end and back-end
          technologies, I specialize in modern web development and cyber systems.
          My journey in coding began with a curiosity for how websites work,
          which quickly evolved into a deep passion for creating digital
          experiences that merge creativity with technology.
        </p>
      </div>

            {/* 3D Scroll Cards */}
        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl mx-auto">
        {[
            { title: "Frontend",        skills: frontendSkills, borderColor: "#10b981" },
            { title: "Backend",         skills: backendSkills,  borderColor: "#a855f7" },
            { title: "Database & Tools",skills: dbSkills,       borderColor: "#f59e0b" },
        ].map((card) => (
            <div
            key={card.title}
            className="flex-1 transition-transform duration-300 hover:-translate-y-2"
            style={{ perspective: "800px" }}
            >
            <ScrollCard
                title={card.title}
                skills={card.skills}
                borderColor={card.borderColor}
            />
            </div>
        ))}
        </div>
    </section>
  )
}

export default About