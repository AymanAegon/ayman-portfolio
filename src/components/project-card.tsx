"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from 'react';
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 rounded-xl border-border/50 bg-card/40 backdrop-blur-sm">
        <div className="relative w-full h-48 sm:h-56 group">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="project application"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl md:text-2xl font-bold text-primary tracking-tight">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <Accordion type="single" collapsible onValueChange={(value) => setIsExpanded(!!value)}>
            <AccordionItem value="item-1" className="border-b-0">
              <CardDescription className={`text-sm text-muted-foreground mb-3 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                {project.shortSummary || project.description}
              </CardDescription>
              <AccordionTrigger className="text-sm text-primary font-medium hover:text-primary/80 hover:no-underline justify-start py-1 pt-0">
                {isExpanded ? "Show less" : "Show more"}
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {project.description}
                </CardDescription>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex flex-wrap gap-2 mb-4 mt-4">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs px-2.5 py-1 bg-primary/10 text-primary hover:bg-primary/20 border-transparent rounded-full font-medium">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-start space-x-3 pt-2 pb-6 px-6 border-t border-border/50">
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button asChild variant="default" size="sm" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30">
              <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
