import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    role: "Freelance Content Creator & Editorial Writer",
    period: "2025 – Present",
    company: "Independent, Remote",
    description:
      "Working as a freelance content creator and editor, developing and managing digital content for social media platforms. My work focuses on shaping engaging narratives, refining written pieces, and creating visually cohesive content using tools like Canva. Through freelancing, I combine storytelling, editorial precision, and an understanding of digital trends to build thoughtful and engaging online spaces.",
  },
  {
    role: "Bookstagram Creator & Literary Content Curator",
    period: "2024 – Present",
    company: "@Caffeinated_readers (Instagram)",
    description:
      "Founded and developed a book-focused digital platform dedicated to reading culture and literary reflections. Through curated posts, reviews, and visual storytelling, I create content that connects readers with books while building a consistent and engaging online presence.",
  },
  {
    role: "Academic Writing & Editorial Publications",
    period: "2023 – 2024",
    company: "University Projects & Publications, Calcutta Women’s College",
    description:
      "Contributed articles and editorial pieces to academic magazines and publications, including work on world cuisines and topics in nutritional science such as nutritional psychiatry. I also curated college newsletters and reports for initiatives like National Nutrition Month, combining research, writing, and editorial organization to communicate ideas clearly.",
  },
  {
    role: "Academic Background – Food & Nutrition",
    period: "2022 – Present",
    company: "Calcutta University",
    description:
      "Having completed my Bachelor’s degree in Food & Nutrition, I am currently pursuing a Master’s in the same field while continuing my freelance and creative pursuits. My academic path centers on exploring the science of nutrition and communicating its complexities through research-driven writing, reflective storytelling, and thoughtful interpretation.",
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
        <Separator className="w-12 bg-[#BBA58F] h-0.5 my-4" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0">
          {/* Left: role list */}
          <div className="hidden md:block pr-8 border-r border-[#E8D9CD]">
            {experiences.map((exp, i) => (
              <div key={i} className="h-[200px] mb-[72px]">
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
              <div key={i} className="relative mb-10 last:pb-0 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[52px] top-1 hidden md:flex items-center justify-center">
                  <div className="timeline-dot" />
                </div>

                {/* Mobile: show role here */}
                <div className="md:hidden mb-3">
                  <p className="font-serif text-lg font-medium text-[#223030]">
                    {exp.role}
                  </p>
                  <p className="text-xs text-[#959D90] mt-1">{exp.period}</p>
                </div>

                <Card className="p-5 h-[340px] md:h-[200px]">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <p className="font-medium text-[#523D35] text-base">
                        {exp.company}
                      </p>
                      <Badge variant="muted">{exp.period}</Badge>
                    </div>
                    <p className="text-sm text-[#959D90] leading-relaxed max-w-xl">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
                {i < experiences.length - 1 && (
                  <Separator className="mt-10 bg-[#E8D9CD]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
