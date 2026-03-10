const skills = [
  { icon: "✍️", label: "Editorial Writing" },
  { icon: "🎨", label: "Content Design (Canva)" },
  { icon: "📖", label: "Literary Analysis" },
  { icon: "💬", label: "Communication Skills" },
  { icon: "🔬", label: "Research Methods" },
  { icon: "📊", label: "Data Interpretation" },
  { icon: "🌿", label: "Nutrition Science" },
  { icon: "📝", label: "Long-form Writing" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
          What I Bring
        </p>
        <h2 className="font-serif text-5xl font-light text-[#223030] leading-tight mb-2">
          Tools & <span className="italic text-[#523D35]">Strengths</span>
        </h2>
        <div className="section-divider" />

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div key={skill.label} className="skill-tag">
              <span>{skill.icon}</span>
              <span>{skill.label}</span>
            </div>
          ))}
        </div>

        {/* Literary Corner */}
        <div className="mt-20">
          <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
            Literary Corner
          </p>
          <h3 className="font-serif text-4xl font-light text-[#223030] mb-2">
            Where to Find <span className="italic text-[#523D35]">My Work</span>
          </h3>
          <div className="section-divider" />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                platform: "Instagram",
                handle: "@shreyoshi.writes",
                desc: "Visual essays, book recommendations, and nutrition notes — aesthetically curated for curious minds.",
                icon: "📸",
              },
              {
                platform: "Blog",
                handle: "shreyoshi.blog",
                desc: "Long-form essays on food, literature, and the body. A quiet corner of the internet for slow reading.",
                icon: "🌿",
              },
              {
                platform: "Newsletter",
                handle: "The Reading Plate",
                desc: "A monthly letter on what I'm reading, eating, and thinking — for those who live at the intersection of both.",
                icon: "✉️",
              },
            ].map((item) => (
              <div
                key={item.platform}
                className="bg-white rounded-[12px] p-6 border border-[#E8D9CD] hover:border-[#BBA58F] transition-colors cursor-pointer"
              >
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-serif text-xl text-[#223030] mt-3 mb-1">
                  {item.platform}
                </h4>
                <p className="text-xs text-[#BBA58F] mb-3 font-medium">
                  {item.handle}
                </p>
                <p className="text-sm text-[#959D90] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
