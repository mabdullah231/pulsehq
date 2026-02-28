"use client";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- new state

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#review" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-lg border-b border border-gray-200 dark:border-gray-700 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold text-foreground">PulseHQ</span>
            </div>
            <span className="hidden md:block text-sm text-muted-foreground border-l border-border pl-3">
              Clarity into how your org works
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground
                 hover:text-[#6366F1]
                 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className=" sm:inline-flex items-center justify-center rounded-md p-2
  text-foreground
  hover:bg-gradient-to-r hover:from-[#6366F1] hover:to-[#8B5CF6]
  hover:text-white
  transition-colors duration-300
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <Link
              className="hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
  text-foreground
  hover:bg-primary hover:text-[#6366F1]
  transition-colors duration-200
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer" href={"/login"}
            >
              Login 
            </Link>

            {/* Start Free Trial – primary CTA with scale effect */}
            <Link href={"/register"} className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Start Free Trial
            </Link>

            {/* Mobile menu button – now with onClick handler */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // <-- added onClick
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground   hover:bg-gradient-to-r hover:from-[#6366F1] hover:to-[#8B5CF6]
  hover:text-white
  transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
    absolute top-full left-0 right-0 lg:hidden
    z-[101]
    bg-white dark:bg-gray-900 border-b-3 border-[#6366F1] shadow-md
    transition-all duration-300 ease-in-out
    overflow-hidden
    ${isMobileMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"}
  `}
      >
        <div className="py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground
                   hover:text-[#6366F1]
                   hover:underline
                   transition-colors duration-200 py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}