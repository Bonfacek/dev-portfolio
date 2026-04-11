import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-green-950 to-black px-4 lg:px-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">

        {/* Left — Text */}
        <div className="flex flex-col items-start max-w-xl">
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-emerald-400">Full-Stack</span>
            <br />
            <span className="text-white">Developer</span>
          </h1>
          <p className="text-white/50 text-base leading-relaxed mb-3">
            Building digital experiences that merge creativity with technology.
          </p>
          <p className="text-white/40 text-sm leading-relaxed mb-10">
          Hi, I'm Karanis, a passionate full-stack developer with a knack for crafting seamless web applications. With a strong foundation in both front-end and back-end technologies, I specialize in modern web development and cyber systems.
          </p>
         <a 
            href="#contact"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors duration-300"
          >
            Let's Connect
          </a>
        </div>

        {/* Right — Circular image */}
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl scale-110" />
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-emerald-500/40">
            <img
              src="/karanis.png"
              alt="Karanis"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border border-emerald-500/10 scale-110" />
        </div>

      </div>
    </section>
  )
}

export default Hero