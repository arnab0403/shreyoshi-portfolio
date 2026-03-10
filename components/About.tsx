import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#E8D9CD]/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div className="relative">
            <div
              className="w-full aspect-[4/5] rounded-[12px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, #EFEFE9 0%, #E8D9CD 50%, #BBA58F 100%)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                  src="/about-photo.jpeg"
                  alt="Shreyoshi Dhali"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
            </div>
            {/* Decorative quote block */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-[10px] px-5 py-4 shadow-md max-w-[200px]">
              <p className="font-serif italic text-[#523D35] text-sm leading-relaxed">
                "Nutrition is a story the body tells."
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-4">
            <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
              The Mind Behind The Pages
            </p>
            <h2 className="font-serif text-5xl font-light text-[#223030] leading-tight mb-4">
              About <span className="italic text-[#523D35]">Me</span>
            </h2>
            <div className="section-divider" />
            <p className="text-[#523D35] text-base leading-relaxed mb-6">
              I am Shreyoshi — a reader at heart, a writer by reflection, and a
              communicator by craft. What began as annotating passages in
              margins became a method for interpreting nutrition not just as
              science, but as narrative.
            </p>
            <p className="text-[#959D90] text-sm leading-relaxed mb-6">
              I grew up reaching for books before breakfast — fiction, biology,
              philosophy, anything that asked me to think differently. When I
              discovered nutrition science, it felt like learning a new language
              for a story I'd always been reading: the story of how we live
              inside our bodies.
            </p>
            <p className="text-[#959D90] text-sm leading-relaxed mb-8">
              My passion for food and nutrition is deeply human. I believe that
              eating well isn't a discipline — it's a practice of
              self-understanding. Through essays, editorials, and curated
              writing, I translate the complexity of nutritional science into
              language that nourishes both mind and body.
            </p>
            <div className="flex gap-6 flex-wrap">
              {[
                { label: "Essays Written", value: "12+" },
                { label: "Books Annotated", value: "40+" },
                { label: "Years Reading", value: "15+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-[#523D35]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#959D90] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
