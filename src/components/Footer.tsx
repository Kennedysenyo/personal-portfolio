import Link from "next/link";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
          © {new Date().getFullYear()} KenCoding. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/kennedysenyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <FiGithub className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/kennedy-senyo-dordoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <FiLinkedin className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="mailto:kennedysenyo@gmail.com">
            <Button variant="ghost" size="icon" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
