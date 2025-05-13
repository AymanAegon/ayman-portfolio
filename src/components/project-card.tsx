import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="rounded-t-lg object-cover"
          data-ai-hint="project application"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl md:text-2xl font-semibold text-primary">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Accordion type="single" collapsible onValueChange={(value) => setIsExpanded(!!value)}>
          <AccordionItem value="item-1" className="border-b-0">
            <CardDescription className={`text-sm text-muted-foreground mb-3 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
              {project.shortSummary || project.description}
            </CardDescription>
            <AccordionTrigger className="text-sm text-primary hover:no-underline justify-start py-1 pt-0">
              {isExpanded ? "Show less" : "Show more"}
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </CardDescription>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-wrap gap-2 mb-4 mt-3">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5 bg-accent/90 text-accent-foreground/80 hover:bg-accent/70">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start space-x-3 pt-2 pb-4 px-6 border-t">
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveDemoUrl && (
          <Button asChild variant="default" size="sm">
            <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
