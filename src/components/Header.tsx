"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { DarkModeToggle } from "./DarkModeToggle";

export function Header() {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            KenCoding
          </Link>
        </div>

        {isMobile ? (
          <>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
              <DarkModeToggle />
            </div>

            {isMenuOpen && (
              <div className="bg-background absolute top-16 right-0 left-0 flex flex-col gap-2 border-b p-4">
                <Link
                  href="#about"
                  onClick={toggleMenu}
                  className="hover:bg-muted rounded-md px-4 py-2"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  onClick={toggleMenu}
                  className="hover:bg-muted rounded-md px-4 py-2"
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  onClick={toggleMenu}
                  className="hover:bg-muted rounded-md px-4 py-2"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  onClick={toggleMenu}
                  className="hover:bg-muted rounded-md px-4 py-2"
                >
                  Contact
                </Link>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            <Link
              href="#about"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <DarkModeToggle />
          </nav>
        )}
      </div>
    </header>
  );
}
