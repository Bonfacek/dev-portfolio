// Contact.tsx
import React, { useState } from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp,FaReddit } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const socials = [
  {
    name: "GitHub",
    handle: "@karanis",
    href: "https://github.com/Bonfacek",
    icon: <FaGithub size={22} />,
    color: "#ffffff",
  },
  {
    name: "LinkedIn",
    handle: "Karanis",
    href: "https://www.linkedin.com/in/karani-bonface-425968331/",
    icon: <FaLinkedin size={22} />,
    color: "#0a66c2",
  },
  {
    name: "Twitter",
    handle: "@karanis",
    href: "https://x.com/karanis",
    icon: <FaTwitter size={22} />,
    color: "#1d9bf0",
  },
  {
    name: "WhatsApp",
    handle: "+254 700 581 386",
    href: "https://wa.me/254700581386",
    icon: <FaWhatsapp size={22} />,
    color: "#25d366",
  },
  {
    name: "Reddit",
    handle: "u/Karani-005",
    href: "https://www.reddit.com/user/Karani-005/",
    icon: <FaReddit size={22} />,
    color: "#ff4509",
  },
]

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-black via-emerald-950 to-black px-4 lg:px-8 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-emerald-400 mb-2">Contact Me</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-px w-16 bg-emerald-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <div className="h-px w-16 bg-emerald-800" />
          </div>
          <p className="text-white/40 mt-4 text-base">
            Have a project in mind? Let's actualize it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — Form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "linear-gradient(135deg, #0d1117 0%, #0a0f1e 100%)",
              border: "1.5px solid rgba(16,185,129,0.2)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Send a message</h3>

            {sent && (
              <div className="mb-4 px-4 py-3 rounded-lg text-sm text-emerald-400"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}
              >
                Message sent! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/50 text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(16,185,129,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(16,185,129,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(16,185,129,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: "linear-gradient(to right, #059669, #10b981)" }}
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Right — Socials */}
          <div className="flex flex-col justify-between gap-6">

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's connect</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: `${social.color}15`,
                      color: social.color,
                    }}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{social.name}</p>
                    <p className="text-white/40 text-xs">{social.handle}</p>
                  </div>
                  <span className="ml-auto text-white/20 group-hover:text-white/50 transition-colors text-sm">→</span>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-xl"
              style={{
                background: "rgba(16,185,129,0.05)",
                border: "1px solid rgba(16,185,129,0.15)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <p className="text-white/60 text-sm">
                Currently <span className="text-emerald-400 font-medium">available</span> for freelance and full-time roles.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact