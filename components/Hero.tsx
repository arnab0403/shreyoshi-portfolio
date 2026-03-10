import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <p className="text-sm font-medium tracking-widest text-[#959D90] uppercase mb-6">
              Reader · Writer · Nutritionist
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-[#223030] leading-[1.05] mb-6">
              Shreyoshi
              <span className="block italic text-[#523D35]">Dhali</span>
            </h1>
            <div className="section-divider" />
            <p className="text-[#959D90] text-base leading-relaxed mb-10 max-w-sm">
              I communicate health not as a set of rules, but as a lived
              experience — weaving nutrition science with narrative craft.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#work"
                className="px-7 py-3.5 bg-[#223030] text-[#EFEFE9] rounded-lg text-sm font-medium hover:bg-[#1a2525] transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-[#BBA58F] text-[#523D35] rounded-lg text-sm font-medium hover:bg-[#E8D9CD] transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Portrait placeholder */}
          <div className="animate-fade-up delay-200 flex justify-center md:justify-end">
            <div
              className="relative w-72 h-80 md:w-80 md:h-96 rounded-[16px] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #E8D9CD 0%, #BBA58F 100%)",
              }}
            >
              {/* Decorative overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <Image
                  src="/cover-image.jpeg"
                  alt="Portrait of Shreyoshi Dhali"
                  className="rounded-[16px] h-full object-cover object-top shadow-[0_20px_20px_rgba(0,0,0,0.2)]"
                  width={400}
                  height={400}
                  
                />
              </div>
              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#BBA58F]/60 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#BBA58F]/60 rounded-bl-lg" />
            </div>
          </div>
        </div>

        {/* Subtle scroll hint */}
        <div className="mt-20 flex items-center gap-3 opacity-40">
          <div className="w-10 h-px bg-[#959D90]" />
          <p className="text-xs tracking-widest text-[#959D90] uppercase">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}
