export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#223030] text-[#EFEFE9]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
              Final Page
            </p>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Let's <span className="italic text-[#BBA58F]">Connect</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#BBA58F]/40 mb-6" />
            <p className="text-[#959D90] text-base leading-relaxed mb-3 max-w-sm">
              Thank you for reading.
            </p>
            <p className="text-[#E8D9CD]/80 text-sm leading-relaxed max-w-sm">
              If you see intersections between health, humanities, and design —
              let's create together. I'm open to writing collaborations,
              editorial projects, and conversations about food and words.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                { label: "Email", value: "shreyoshi@email.com", icon: "✉️" },
                { label: "Instagram", value: "@shreyoshi.writes", icon: "📸" },
                { label: "Blog", value: "shreyoshi.blog", icon: "🌿" },
              ].map((link) => (
                <div key={link.label} className="flex items-center gap-3">
                  <span className="text-base">{link.icon}</span>
                  <div>
                    <p className="text-xs text-[#959D90] uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-[#E8D9CD] text-sm">{link.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: QR placeholder + form */}
          <div>
            {/* QR code placeholder */}
            <div className="bg-[#2e3f3f] rounded-[12px] p-6 mb-8 inline-block">
              <div className="w-32 h-32 bg-[#EFEFE9] rounded-lg flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#223030" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="5" y="5" width="3" height="3" fill="#223030" />
                  <rect x="16" y="5" width="3" height="3" fill="#223030" />
                  <rect x="5" y="16" width="3" height="3" fill="#223030" />
                  <path d="M14 14h1v1h-1zM16 14h1v1h-1zM18 14h3M14 16h1v1h-1zM16 17h1v3M18 16h1v1h1v2h-2" />
                </svg>
              </div>
              <p className="text-[#959D90] text-xs mt-3 text-center">Scan to connect</p>
            </div>

            {/* Simple message form */}
            <div className="space-y-4">
              <div>
                <label className="text-xs text-[#959D90] tracking-wider uppercase block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  className="w-full bg-[#2e3f3f] border border-[#3d5050] rounded-lg px-4 py-3 text-sm text-[#EFEFE9] placeholder-[#959D90] outline-none focus:border-[#BBA58F] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[#959D90] tracking-wider uppercase block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#2e3f3f] border border-[#3d5050] rounded-lg px-4 py-3 text-sm text-[#EFEFE9] placeholder-[#959D90] outline-none focus:border-[#BBA58F] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[#959D90] tracking-wider uppercase block mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Let's create something together..."
                  className="w-full bg-[#2e3f3f] border border-[#3d5050] rounded-lg px-4 py-3 text-sm text-[#EFEFE9] placeholder-[#959D90] outline-none focus:border-[#BBA58F] transition-colors resize-none"
                />
              </div>
              <button className="w-full py-3.5 bg-[#BBA58F] text-[#223030] rounded-lg text-sm font-semibold hover:bg-[#cfb89e] transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-[#2e3f3f] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif italic text-[#BBA58F] text-lg">Shreyoshi</p>
          <p className="text-[#959D90] text-xs">
            © 2025 · Built with care & curiosity
          </p>
        </div>
      </div>
    </section>
  );
}
