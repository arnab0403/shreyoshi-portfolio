import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const skills = [
  { icon: "🎨", label: "Content Design (Canva)" },
  { icon: "💬", label: "Communication Skills" },
  { icon: "🌿", label: "Nutrition Science" },
  { icon: "⚖️", label: "Management Skills" },
  { icon: "📝", label: "Content Creator" },
  { icon: "📖", label: "Creative Story Telling" },
  { icon: "👥", label: "Team Collaboration" },
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
        <Separator className="w-12 bg-[#BBA58F] h-0.5 my-4" />

        <TooltipProvider>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Tooltip key={skill.label}>
                <TooltipTrigger asChild>
                  <Badge
                    variant="default"
                    className="skill-tag cursor-default text-sm py-2.5 px-4"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.label}</span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* Literary Corner */}
        <div className="mt-20">
          <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
            Literary Corner
          </p>
          <h3 className="font-serif text-4xl font-light text-[#223030] mb-2">
            Where to Find <span className="italic text-[#523D35]">My Work</span>
          </h3>
          <Separator className="w-12 bg-[#BBA58F] h-0.5 my-4" />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                platform: "Instagram",
                handle: "@caffeinated_reader",
                desc: "A cozy corner for book lovers—where stories come alive through aesthetic posts, thoughtful reviews, and endless literary vibes",
                icon: "📸",
                link: "https://www.instagram.com/_caffeinated_reader_/",
              },
              {
                platform: "Goodreads",
                handle: "Caffeinated",
                desc: "Just tracking what I read, sharing my thoughts, and discovering new books along the way 📚🙂",
                icon: "🌿",
                link: "https://www.goodreads.com/user/show/134076920-caffeinated",
              },
              {
                platform: "LinkedIn",
                handle: "Shreyoshi Dhali",
                desc: "Just figuring things out as I go, learning from every step, and meeting some really great people along the way 🙂",
                icon: "✉️",
                link: "https://www.linkedin.com/in/shreyoshi-dhali-83aba0306/",
              },
            ].map((item) => (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.platform}
              >
                <Card
                  key={item.platform}
                  className="p-6 hover:border-[#BBA58F] transition-colors cursor-pointer h-[220px]"
                >
                  <CardContent className="p-0">
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
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
