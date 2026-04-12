
import React, { useState, useEffect } from "react"

interface HeaderProps {
  activeSection: string
}

const Header: React.FC<HeaderProps> = ({ activeSection: initialSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(initialSection)

  const navItems = [
    { name: "Home",         href: "#home"         },
    { name: "About",        href: "#about"        },
    { name: "Projects",     href: "#projects"     },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact",      href: "#contact"      },
  ]

  // Scroll detection — updates active section based on which section is in view
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sectionIds = navItems.map((item) => item.href.substring(1))
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <nav className="mx-auto px-4 lg:px-8 flex items-center justify-between h-16 bg-gradient-to-r from-black via-emerald-800 to-black">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <div
            className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "2px solid #10b981" }}
          >
            <img
              src="/karanis.png"
              alt="Karanis"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-emerald-400 font-bold text-3xl hover:text-emerald-300 transition-colors">
            ~Karanis
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.substring(1))
                  setActiveSection(item.href.substring(1))
                }}
                className="group relative text-xl font-bold transition-all duration-300"
                style={{ color: isActive ? "#10b981" : "rgba(255,255,255,0.5)" }}
              >
                <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                  {item.name}
                </span>

                {/* Animated underline */}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 origin-left"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background: "linear-gradient(to right, #059669, #10b981)",
                  }}
                />

                {/* Hover underline for non-active */}
                {!isActive && (
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                    style={{ background: "rgba(16,185,129,0.4)" }}
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "linear-gradient(to bottom, #0a0f1e, #080810)",
            borderColor: "rgba(16,185,129,0.15)",
          }}
        >
          <div className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.substring(1))
                    setActiveSection(item.href.substring(1))
                  }}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "#10b981" : "rgba(255,255,255,0.5)",
                    background: isActive ? "rgba(16,185,129,0.08)" : "transparent",
                    borderLeft: isActive ? "2px solid #10b981" : "2px solid transparent",
                  }}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header