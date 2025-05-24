import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const techSkills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "Python", "Firebase", "MongoDB", "SQL", "Docker", "Git", "Tailwind CSS"
];

const bio = "Hello! I'm a passionate Software Engineer with a knack for creating dynamic and user-friendly web applications. I thrive on solving complex problems and continuously learning new technologies. My journey in tech has been driven by a desire to build software that makes a tangible impact. When I'm not coding, I enjoy exploring new hiking trails and experimenting with new recipes.";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://res.cloudinary.com/drmmom6jz/image/upload/t_ayman/v1747143644/2b4d3e0c343bd5caed84ba649f9116e8_high_veoqxc.png"
              alt="My Profile Picture"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover"
              data-ai-hint="profile picture"
            />
          </div>
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {bio}
                </p>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Tech Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-accent text-accent-foreground hover:bg-accent/90">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
