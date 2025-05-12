
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.author.name}. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          {siteConfig.socialLinks.github && (
            <Link href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
          {siteConfig.socialLinks.linkedin && (
            <Link href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
           {siteConfig.socialLinks.twitter && (
            <Link href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
