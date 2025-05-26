
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import Link from "next/link";

export function CvDownloadSection() {
  return (
    <section id="cv" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Download My CV
        </h2>
        <Card className="max-w-lg mx-auto shadow-lg text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Get a Copy of My Resume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Click the button below to download my CV in PDF format.
            </p>
            {/* 
              Developer Note: 
              1. Place your CV PDF file (e.g., 'your-cv.pdf') in the `public` directory of your project.
              2. Update the `href` attribute in the Link component below to point to your CV file (e.g., '/your-cv.pdf').
              3. The `download` attribute suggests the filename for the user when they download the file.
            */}
            <Button asChild size="lg">
              <Link href="/aimane-ammar-cv.pdf" download="Aimane_Ammar_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV (PDF)
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
