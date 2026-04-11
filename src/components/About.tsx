import React from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDocker, FaLinux } from "react-icons/fa"
import { SiRedux, SiNextdotjs, SiSpringboot, SiRedis, SiApachekafka, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si"
import { FaTerminal } from "react-icons/fa"

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={20} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={20} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={20} /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" size={20} /> },
  { name: "React", icon: <FaReact className="text-cyan-400" size={20} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" size={20} /> },
]

const backendSkills = [
  { name: "Java", icon: <FaJava className="text-red-500" size={20} /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" size={20} /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" size={20} /> },
  { name: "Kafka", icon: <SiApachekafka className="text-white" size={20} /> },
]

const dbSkills = [
  { name: "MySQL", icon: <SiMysql className="text-blue-400" size={20} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" size={20} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={20} /> },
  { name: "Bash", icon: <FaTerminal className="text-gray-300" size={20} /> },
  { name: "Linux", icon: <FaLinux className="text-yellow-300" size={20} /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" size={20} /> },
]

interface ScrollCardProps {
  title: string
  skills: { name: string; icon: React.ReactNode }[]
  color: string
}

function ScrollCard({ title, skills, color }: ScrollCardProps) {
  return (
    <div className="flex-1 flex flex-col min-w-[200px]">

      {/* Top curl — outer */}
      <div
        className={`h-10 border-2 ${color} bg-gradient-to-b from-black/60 to-black/20`}
        style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
      />
      {/* Top curl — inner shadow */}
      <div
        className={`h-5 -mt-3 mx-4 border-t-2 border-x-2 ${color} bg-black/50`}
        style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
      />

      {/* Body */}
      <div className={`border-x-2 ${color} bg-black/30 px-6 py-6`}>
        <h3 className="text-xl font-bold text-emerald-400 text-center mb-4">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-900/20 transition-all duration-200"
            >
              {skill.icon}
              <span className="text-white/80 text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom curl — inner shadow */}
      <div
        className={`h-5 mx-4 -mb-3 border-b-2 border-x-2 ${color} bg-black/50`}
        style={{ borderRadius: "0 0 50% 50% / 0 0 100% 100%" }}
      />
      {/* Bottom curl — outer */}
      <div
        className={`h-10 border-2 ${color} bg-gradient-to-t from-black/60 to-black/20`}
        style={{ borderRadius: "0 0 50% 50% / 0 0 100% 100%" }}
      />

    </div>
  )
}

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-black via-emerald-950 to-black px-4 lg:px-10 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-emerald-400 mb-2">About Me</h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="h-px w-16 bg-emerald-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <div className="h-px w-16 bg-emerald-800" />
        </div>
      </div>

      {/* Bio */}
      <div className="max-w-4xl w-full mb-16">
        <p className="text-white/70 text-lg leading-relaxed font-medium">
          I'm{" "}
          <span className="text-emerald-400 font-semibold">Karanis</span>, a
          passionate full-stack developer with a knack for crafting seamless web
          applications. With a strong foundation in both front-end and back-end
          technologies, I specialize in modern web development and cyber systems.
          My journey in coding began with a curiosity for how websites work,
          which quickly evolved into a deep passion for creating digital
          experiences that merge creativity with technology.
        </p>
      </div>

      {/* Scroll Cards */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto">
        <ScrollCard
          title="Frontend"
          skills={frontendSkills}
          color="border-emerald-600/50"
        />
        <ScrollCard
          title="Backend"
          skills={backendSkills}
          color="border-purple-600/50"
        />
        <ScrollCard
          title="Database & Tools"
          skills={dbSkills}
          color="border-amber-600/50"
        />
      </div>
    </section>
  )
}

export default About