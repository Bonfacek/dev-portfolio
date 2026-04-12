import React, { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Alice Mwangi",
    role: "CTO",
    company: "TechCorp Kenya",
    initials: "AM",
    color: "#10b981",
    rating: 5,
    text: "Karanis built our entire backend infrastructure from scratch. Clean code, well documented, and delivered on time. Exceptional developer.",
  },
  {
    name: "James Otieno",
    role: "Founder",
    company: "StartupHub",
    initials: "JO",
    color: "#a855f7",
    rating: 5,
    text: "Our web app went from idea to production in 6 weeks. Karanis handled everything — frontend, backend, and deployment. Highly recommend.",
  },
  {
    name: "Sarah Kimani",
    role: "Product Manager",
    company: "Fintech Solutions",
    initials: "SK",
    color: "#f59e0b",
    rating: 5,
    text: "The API integrations Karanis built for us are rock solid. Great communication throughout the project and always open to feedback.",
  },
  {
    name: "Brian Njoroge",
    role: "Lead Engineer",
    company: "DevAgency",
    initials: "BN",
    color: "#3b82f6",
    rating: 5,
    text: "Worked with Karanis on a complex Spring Boot microservices project. Deep knowledge of Java ecosystem and excellent problem solving skills.",
  },
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((currentIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const goTo = (index: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setAnimating(false)
    }, 300)
  }

  const t = testimonials[currentIndex]

  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-black via-emerald-950 to-black px-4 lg:px-8 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-emerald-400 mb-2">Testimonials</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-px w-16 bg-emerald-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <div className="h-px w-16 bg-emerald-800" />
          </div>
          <p className="text-white/40 mt-4 text-base">What people say about working with me</p>
        </div>

        {/* Card */}
        <div
          className="relative rounded-2xl p-10 mb-8 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #0d1117 0%, #0a0f1e 100%)",
            border: `1.5px solid ${t.color}40`,
            boxShadow: `0 0 60px ${t.color}15, 0 20px 40px rgba(0,0,0,0.4)`,
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "translateY(0)",
          }}
        >
          {/* Colored top bar */}
          <div
            className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
            style={{ background: `linear-gradient(to right, transparent, ${t.color}, transparent)` }}
          />

          {/* Big quote mark */}
          <div
            className="absolute top-4 right-8 text-8xl font-bold leading-none select-none pointer-events-none"
            style={{ color: `${t.color}12`, fontFamily: "Georgia, serif" }}
          >
            "
          </div>

          {/* Author — top */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
              style={{
                background: `${t.color}15`,
                border: `2px solid ${t.color}50`,
                color: t.color,
                boxShadow: `0 0 16px ${t.color}20`,
              }}
            >
              {t.initials}
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-base">{t.name}</p>
              <p className="text-white/40 text-sm">
                {t.role} — {t.company}
              </p>
            </div>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill={t.color}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5 mb-8" />

          {/* Quote text */}
          <p className="text-white/70 text-lg leading-relaxed italic">
            "{t.text}"
          </p>

          {/* Colored bottom bar */}
          <div
            className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full"
            style={{ background: `linear-gradient(to right, transparent, ${t.color}50, transparent)` }}
          />
        </div>

        {/* Dots + counter */}
        <div className="flex items-center justify-between px-2">
          <span className="text-white/20 text-sm">
            {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => goTo(index)}
                className={`transition-all duration-300 rounded-full h-1.5 border-none cursor-pointer ${
                  index === currentIndex ? "w-8" : "w-1.5 bg-white/15 hover:bg-white/30"
                }`}
                style={index === currentIndex ? { background: t.color } : {}}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => goTo((currentIndex - 1 + testimonials.length) % testimonials.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => goTo((currentIndex + 1) % testimonials.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials