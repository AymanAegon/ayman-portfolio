"use client";

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/services/project-service';
import { ProjectCard } from '@/components/project-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export function ProjectsSection() {
  const { data: projects, isLoading, isError, error } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          My Projects
        </h2>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <div className="flex gap-2 pt-2">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && (
           <Alert variant="destructive" className="max-w-2xl mx-auto">
             <Terminal className="h-4 w-4" />
             <AlertTitle>Error Loading Projects</AlertTitle>
             <AlertDescription>
               There was an issue fetching projects. Displaying sample projects instead. Error: {error?.message}
             </AlertDescription>
           </Alert>
        )}

        {projects && projects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {projects && projects.length === 0 && !isLoading && (
           <Alert className="max-w-lg mx-auto">
             <Terminal className="h-4 w-4" />
             <AlertTitle>No Projects Yet!</AlertTitle>
             <AlertDescription>
               It seems there are no projects to display at the moment. Please check back later!
             </AlertDescription>
           </Alert>
        )}
      </div>
    </section>
  );
}
