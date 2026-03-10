const experiences = [
  {
    role: "Freelance Writer & Nutrition Communicator",
    period: "2023 — Present",
    company: "Independent, Remote",
    description:
      "Writing essays, editorials, and book reviews at the intersection of food science, culture, and storytelling. Contributing to health publications and building a curated body of literary nutrition writing.",
  },
  {
    role: "Content Designer & Editorial Writer",
    period: "2022 — 2023",
    company: "Creative Collective, Kolkata",
    description:
      "Designed visual content and authored long-form editorial pieces for health and lifestyle brands. Focused on simplicity, warmth, and narrative clarity in every deliverable.",
  },
  {
    role: "Nutrition Research Assistant",
    period: "2020 — 2022",
    company: "Academic Institute, West Bengal",
    description:
      "Assisted in dietary analysis and research documentation. Developed skills in data interpretation, scientific writing, and translating complex findings into accessible language.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#E8D9CD]/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
          Journey
        </p>
        <h2 className="font-serif text-5xl font-light text-[#223030] leading-tight mb-2">
          Experience
        </h2>
        <div className="section-divider" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0">
          {/* Left: role list */}
          <div className="hidden md:block pr-8 border-r border-[#E8D9CD]">
            {experiences.map((exp, i) => (
              <div key={i} className="mb-10">
                <p className="font-serif text-base font-medium text-[#223030] leading-snug">
                  {exp.role}
                </p>
                <p className="text-xs text-[#959D90] mt-1">{exp.period}</p>
                {i < experiences.length - 1 && (
                  <div className="w-8 h-px bg-[#BBA58F] mt-8" />
                )}
              </div>
            ))}
          </div>

          {/* Right: details */}
          <div className="md:pl-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative mb-10 pb-10 border-b border-[#E8D9CD] last:border-0 last:pb-0 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[49px] top-1 hidden md:flex items-center justify-center">
                  <div className="timeline-dot" />
                </div>

                {/* Mobile: show role here */}
                <div className="md:hidden mb-3">
                  <p className="font-serif text-lg font-medium text-[#223030]">
                    {exp.role}
                  </p>
                  <p className="text-xs text-[#959D90] mt-1">{exp.period}</p>
                </div>

                <p className="font-medium text-[#523D35] text-base mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-[#959D90] mb-2 font-medium">
                  {exp.period}
                </p>
                <p className="text-sm text-[#959D90] leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
