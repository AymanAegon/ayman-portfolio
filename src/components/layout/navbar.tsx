"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Feather } from "lucide-react";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const closeSheet = () => setIsOpen(false);

  if (!mounted) return null; // Avoid hydration mismatch for isMobile dependent rendering

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Feather className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{siteConfig.name.split(' ')[0]}</span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeSheet}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                 <ThemeToggleButton />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggleButton />
          </nav>
        )}
      </div>
    </header>
  );
}
