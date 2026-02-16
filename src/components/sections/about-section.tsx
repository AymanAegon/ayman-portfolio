"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const techSkills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Python", "Firebase", "MongoDB", "SQL", "Docker", "Git", "Tailwind CSS"
];

const bio = "Hello! I'm a passionate Software Engineer with a knack for creating dynamic and user-friendly web applications. I thrive on solving complex problems and continuously learning new technologies. My journey in tech has been driven by a desire to build software that makes a tangible impact. When I'm not coding, I enjoy exploring new hiking trails and experimenting with new recipes.";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <Image
                src="https://res.cloudinary.com/drmmom6jz/image/upload/t_ayman/v1747143644/2b4d3e0c343bd5caed84ba649f9116e8_high_veoqxc.png"
                alt="Aimane Ammar"
                width={320}
                height={320}
                className="rounded-full shadow-2xl object-cover relative z-10 border-4 border-background/50"
                data-ai-hint="profile picture"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card className="shadow-lg border-border/50 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-semibold">My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {bio}
                </p>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Tech Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-background/50 hover:bg-primary/10 text-primary border border-primary/10 transition-colors duration-300">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
