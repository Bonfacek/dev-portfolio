import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  const navLinks = [
    { label: "Home",         href: "#home" },
    { label: "About",        href: "#about" },
    { label: "Projects",     href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact",      href: "#contact" },
  ]

  const socials = [
    { href: "https://github.com/karanis",      icon: <FaGithub size={18} />,   color: "#ffffff",  label: "GitHub"   },
    { href: "https://linkedin.com/in/karanis", icon: <FaLinkedin size={18} />, color: "#0a66c2",  label: "LinkedIn" },
    { href: "https://twitter.com/karanis",     icon: <FaTwitter size={18} />,  color: "#1d9bf0",  label: "Twitter"  },
    { href: "https://wa.me/254700000000",      icon: <FaWhatsapp size={18} />, color: "#25d366",  label: "WhatsApp" },
    { href: "mailto:karanis@email.com",        icon: <MdEmail size={18} />,    color: "#ea4335",  label: "Email"    },
  ]

  return (
    <footer
      className="relative px-4 lg:px-8 pt-16 pb-8 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #080810, #0a0a0f)",
        borderTop: "1px solid rgba(16,185,129,0.12)",
      }}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-950/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: "2px solid #10b981" }}
              >
                <img
                  src="/karanis.png"
                  alt="Karanis"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-green-400 font-bold text-lg">~Karanis.</span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed">
              Full stack developer building modern web applications with clean code and great user experiences.
            </p>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit text-xs"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400">Available for work</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px transition-all duration-200"
                      style={{ background: "#10b981" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-widest mb-4">Get in touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:karanis@email.com"
                className="flex items-center gap-3 text-white/40 text-sm hover:text-emerald-400 transition-colors duration-200"
              >
                <MdEmail size={15} className="text-emerald-600 flex-shrink-0" />
                karanis@email.com
              </a>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 text-sm hover:text-emerald-400 transition-colors duration-200"
              >
                <FaWhatsapp size={15} className="text-emerald-600 flex-shrink-0" />
                +254 700 000 000
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                  style={{
                    background: `${s.color}10`,
                    border: `1px solid ${s.color}25`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: "linear-gradient(to right, transparent, rgba(16,185,129,0.2), transparent)" }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {year} Karanis. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-white/20 text-xs">
            <span>Built with</span>
            <span className="text-emerald-600">React</span>
            <span>+</span>
            <span className="text-emerald-600">Tailwind CSS</span>
            <span>+</span>
            <span className="text-emerald-600">TypeScript</span>
          </div>
        </div>

      </div>{/* ✅ closes max-w-5xl */}
    </footer>
  )
}

export default Footer