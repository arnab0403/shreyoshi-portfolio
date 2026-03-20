"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";
import { link } from "fs";

const essays = [
  {
    category: "Essay",
    title: "College Publications",
    description:
      "A collection of editorial projects created for my college, including newsletters and the National Nutrition Month report. These works involved content writing, editorial planning, and organizing layouts to present academic events, awareness initiatives, and student perspectives in a clear, engaging, and well-structured format.",
    tag: "ACADEMIC · EDITORIAL",
    image: "/college-publication.jpeg",
    link: "",
  },
  {
    category: "Essay",
    title: "Animae Cibus",
    description:
      "A nutritional magazine exploring the relationship between food, science, and wellbeing. The publication blends research, creative writing, and editorial design to present nutrition concepts in an engaging and accessible format.",
    tag: "NUTRITION · PUBLICATION",
    image: "/animaee.jpeg",
    link: "https://online.fliphtml5.com/eozwc/frkg/#p=74",
  },
  {
    category: "Essay",
    title: "World Cuisine Articles",
    description:
      "A series of magazine articles exploring world cuisines and culinary traditions. These pieces reflect my interest in food culture, combining research with engaging storytelling to present diverse cuisines, ingredients, and cultural narratives behind global food practices.",
    tag: "FOOD · CULTURE · PUBLICATION",
    image: "/world-cuisine.jpeg",
    link: "",
  },
  {
    category: "Essay",
    title: "Nutritional Psychiatry",
    description:
      "An article exploring the emerging field of nutritional psychiatry and the relationship between diet and mental well-being. The piece examines how nutrients and dietary patterns influence brain health, translating scientific research into clear and engaging insights for readers.",
    tag: "SCIENCE · NUTRITION · PUBLICATION",
    image: "/nutri.jpeg",
    link: "",
  },
];

const designProjects = [
  {
    category: "Book Review",
    title: "The Ornament Edit",
    description:
      "A curated catalogue developed for a jewellery collection, combining visual storytelling with product presentation. The project involved organizing product descriptions, designing layouts, and creating an aesthetic narrative that enhances the brand’s visual identity.",
    tag: "BRAND · DESIGN",
    image: "/ornaments.jpeg",
    link: "https://online.fliphtml5.com/phlur/ibyf/",
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
    <Card className="group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2  p-4">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <CardContent className="p-5 flex flex-col h-[calc(100%-176px)]">
        <Badge
          variant="accent"
          className="mb-3 self-start uppercase text-[10px]"
        >
          {item.tag}
        </Badge>
        <h3 className="font-serif text-xl text-[#223030] mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-[#959D90] text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto"
        >
          <Button
            variant="ghost"
            size="sm"
            className="px-2 gap-2 text-xs tracking-wider uppercase group-hover:gap-3 transition-all  mt-auto hover:text-white"
          >
            Read More <ArrowRight size={13} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function Work() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest text-[#959D90] uppercase mb-3">
          Curated Work
        </p>
        <h2 className="font-serif text-5xl font-light text-[#223030] leading-tight mb-2">
          Publication & <span className="italic text-[#523D35]">Projects</span>
        </h2>
        <Separator className="w-12 bg-[#BBA58F] h-0.5 my-4" />

        {/* Essays */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-[#523D35] mb-6 italic">
            Campus Chronicles
          </h3>
          <Carousel
            className="w-full p-4 sm:p-8"
            opts={{ loop: true }}
            plugins={[plugin.current]}
          >
            <CarouselPrevious className="-left-3 hidden sm:flex" />
            <CarouselNext className="-right-3 hidden sm:flex" />
            <CarouselContent>
              {essays.map((item, i) => (
                <CarouselItem
                  key={item.title}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 py-2"
                >
                  <WorkCard item={item} index={i + 1} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Editorials */}
        <div className="w-full">
          <h3 className="font-serif text-2xl text-[#523D35] mb-6 italic">
            Design Project
          </h3>
          <div className="w-full">
            <Carousel
              className="w-full p-4"
              opts={{ loop: true, align: "center" }}
            >
              <CarouselPrevious className="-left-3 hidden sm:flex" />
              <CarouselNext className="-right-3 hidden sm:flex" />

              <CarouselContent>
                {designProjects.map((item, i) => (
                  <CarouselItem
                    key={item.title}
                    className={
                      "basis-full sm:basis-1/2 lg:basis-1/3 py-2" +
                      (designProjects.length === 1 ? " mx-auto" : "")
                    }
                  >
                    <WorkCard item={item} index={i + 1} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
