import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
          </div>

          {/* Text */}
          <div className="pt-4">
            <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
              The Mind Behind The Pages
            </p>
            <h2 className="font-serif text-5xl font-light text-[#223030] leading-tight mb-4">
              About <span className="italic text-[#523D35]">Me</span>
            </h2>
            <Separator className="w-12 bg-[#BBA58F] h-0.5 my-4" />
            <p className="text-[#523D35] text-base leading-relaxed mb-6">
              {`Hey!! It’s me — Shreyoshi aka @Caffeinated_reader navigating the
              world with 17 personalities, 296 Spotify playlists, 985 unread
              books, and a slightly disastrous coffee addiction.`}
            </p>
            <p className="text-[#959D90] text-sm leading-relaxed mb-6">
              An avid reader, passionate writer, and meticulous editor, I craft
              narratives where every word finds its precise place. Somewhere
              between books, drafts, and playlists, I transform ideas into
              engaging stories and content.
            </p>
            <p className="text-[#959D90] text-sm leading-relaxed mb-8">
              Alongside my writing and editorial work, I also freelance as a
              content creator and social media manager, where I create, curate,
              and manage digital content for online platforms. I design and edit
              visual content using Canva, paying close attention to aesthetics,
              clarity, and audience engagement. With a growing understanding of
              social media algorithms and digital trends, I focus on creating
              content that is not only visually appealing but also strategically
              positioned to reach and resonate with wider audiences.
            </p>
            <p className="text-[#959D90] text-sm leading-relaxed mb-8">
              I particularly enjoy the process of shaping raw ideas into
              polished, engaging posts — refining captions, editing visuals, and
              structuring content so that it communicates effectively.
              Freelancing allows me to explore the dynamic world of digital
              storytelling while continuously developing my skills in editing,
              creative communication, and content strategy. Through this work, I
              aim to build thoughtful and authentic online spaces where ideas,
              creativity, and meaningful conversations can thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
