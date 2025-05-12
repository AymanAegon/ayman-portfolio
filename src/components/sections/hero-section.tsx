"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          {siteConfig.author.name}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary font-semibold">
          {siteConfig.author.title}
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
          {siteConfig.author.intro}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="#projects" passHref>
            <Button size="lg" className="w-full sm:w-auto group">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#contact" passHref>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
