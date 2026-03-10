const essays = [
  {
    category: "Essay",
    title: "The Language of Hunger",
    description:
      "An exploration of how appetite is shaped by memory, culture, and the stories we tell ourselves about food.",
    tag: "Nutrition · Culture",
  },
  {
    category: "Essay",
    title: "Margins & Meaning",
    description:
      "Reflections on annotation as a form of dialogue — between reader, text, and the self that emerges in the space between lines.",
    tag: "Literary · Personal",
  },
  {
    category: "Essay",
    title: "What the Gut Knows",
    description:
      "Bridging gut microbiome science with intuitive eating philosophy — a meditation on listening to the body's intelligence.",
    tag: "Science · Wellness",
  },
];

const editorials = [
  {
    category: "Book Review",
    title: "In Defense of Food — Michael Pollan",
    description:
      "A close reading of Pollan's manifesto on eating, arguing that nutritionism has obscured the simple wisdom of traditional food cultures.",
    tag: "Book Review",
  },
  {
    category: "Editorial",
    title: "Poster: Eat to Live, Live to Read",
    description:
      "A visual essay in poster form — pairing typographic design with a meditation on nourishment as daily ritual.",
    tag: "Design · Editorial",
  },
  {
    category: "Editorial",
    title: "The Calm Science of Eating Well",
    description:
      "An editorial for a health publication reframing nutrition advice away from fear and toward curiosity and pleasure.",
    tag: "Health Writing",
  },
];

function WorkCard({
  item,
  index,
}: {
  item: (typeof essays)[0];
  index: number;
}) {
  return (
    <div className="project-card group">
      {/* Image placeholder */}
      <div
        className="w-full h-44 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${
            index % 3 === 0
              ? "#E8D9CD, #BBA58F"
              : index % 3 === 1
              ? "#EFEFE9, #959D90"
              : "#E8D9CD, #523D35"
          })`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <p className="text-white/50 text-xs">{item.category}</p>
        </div>
      </div>
      <div className="p-5">
        <span className="text-xs text-[#BBA58F] font-medium tracking-wider uppercase">
          {item.tag}
        </span>
        <h3 className="font-serif text-xl text-[#223030] mt-2 mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-[#959D90] text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#523D35] tracking-wider uppercase group-hover:gap-3 transition-all">
          READ MORE
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
          Curated Work
        </p>
        <h2 className="font-serif text-5xl font-light text-[#223030] leading-tight mb-2">
          Essays & <span className="italic text-[#523D35]">Editorials</span>
        </h2>
        <div className="section-divider" />

        {/* Essays */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-[#523D35] mb-6 italic">Essays</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essays.map((item, i) => (
              <WorkCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Editorials */}
        <div>
          <h3 className="font-serif text-2xl text-[#523D35] mb-6 italic">
            Reviews & Editorials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editorials.map((item, i) => (
              <WorkCard key={item.title} item={item} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
