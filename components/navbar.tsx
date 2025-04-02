"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = [
        "home",
        "about",
        "event-details",
        "guidelines",
        "timeline",
        "sponsorship",
        "contact",
        "ps",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Event Details", id: "event-details" },
    { name: "Timeline", id: "timeline" },
    { name: "Guidelines", id: "guidelines" },
    { name: "ProblemStatements", id: "ps" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-400">
            GenAIthon 2K25
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className={cn(
                "hover:bg-primary/10",
                activeSection === link.id && "text-primary font-medium"
              )}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </Button>
          ))}
          <Button className="ml-2 bg-gradient-to-r from-purple-600 to-cyan-400 hover:opacity-90">
            Register Now
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden bg-background/95 backdrop-blur-lg p-4 shadow-lg border-t">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className={cn(
                "justify-start mb-1",
                activeSection === link.id && "text-primary font-medium"
              )}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </Button>
          ))}
          <Button className="mt-2 bg-gradient-to-r from-purple-600 to-cyan-400 hover:opacity-90">
            Register Now
          </Button>
        </div>
      )}
    </nav>
  );
}
