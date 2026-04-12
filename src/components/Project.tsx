import React from "react"

const projects = [
  {
    title: "JawaTech Platform",
    description: "Full stack engineering platform with JWT auth, Redis blacklisting, Spring Boot backend and Next.js frontend.",
    tags: ["Next.js", "Spring Boot", "Redis", "JWT"],
    link: "#",
    github: "#",
  },
  {
    title: "Client Portfolio Website",
    description: "Designed and developed a responsive portfolio website using HTML, Tailwind CSS, and deployed on Vercel. Implemented smooth scrolling, dark mode, and interactive project showcases.",
    tags: ["HTML", "CSS", "Tailwind"],
    link: "https://stalwart-dasik-7af5f3.netlify.app/",
    github: "#",
  },
  {
    title: "Project Three",
    description: "Description of your third project. What technologies did you use?",
    tags: ["Java", "Spring Boot", "MySQL"],
    link: "#",
    github: "#",
  },
]

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Happy Clients",      value: "5+"  },
  { label: "Years Experience",   value: "3+"  },
]

const Project: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-black via-green-950 to-black px-4 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-400 mb-2">Projects</h2>
          <div className="flex items-center justify-center gap-2 mt-2 mb-4">
            <div className="h-px w-16 bg-emerald-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <div className="h-px w-16 bg-emerald-800" />
          </div>
          <p className="text-gray-400 text-lg">Here are some of my recent projects</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(16,185,129,0.15)",
              }}
            >
              <div className="text-4xl font-bold text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: "linear-gradient(135deg, #0d1117 0%, #0a0f1e 100%)",
                border: "1.5px solid rgba(16,185,129,0.15)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              {/* Number */}
              <div
                className="text-xs font-bold mb-4 w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  color: "#10b981",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 text-sm">
                <a
                  href={project.link}
                  className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
                >
                  Live →
                </a>
                <a                
                  href={project.github}
                  className="text-white/40 hover:text-white/70 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Project