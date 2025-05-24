import { ArrowRight, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import profile from "../../public/img/profile.jpg";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 lg:pt-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm{" "}
                <span className="text-primary">Kennedy Senyo Dordoe</span>
              </h1>
              <p className="text-muted-foreground text-xl">
                Full Stack Developer specializing in building exceptional
                digital experiences
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="https://github.com/Kennedysenyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <FiGithub className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/kennedy-senyo-dordoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <FiLinkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:kennedysenyo@gmail.com">
                <Button variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="border-primary relative aspect-square h-[280px] w-[280px] overflow-hidden rounded-full border-4 md:h-[350px] md:w-[350px]">
              <Image
                src={profile}
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
