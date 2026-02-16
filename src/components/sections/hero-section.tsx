"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
            {siteConfig.author.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-primary font-medium tracking-wide">
            {siteConfig.author.title}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {siteConfig.author.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="#projects" passHref>
            <Button size="lg" className="w-full sm:w-auto group text-base font-semibold h-12 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#contact" passHref>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-semibold h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
