export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CodeCanvas Portfolio",
  description: "Showcasing my journey and projects as a Software Engineer.",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  author: {
    name: "Your Name",
    title: "Software Engineer",
    email: "your.email@example.com",
    intro: "I build modern, responsive, and scalable web applications. Passionate about clean code and user-centric design.",
  }
};
