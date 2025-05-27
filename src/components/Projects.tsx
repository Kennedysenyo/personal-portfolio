import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiGithub } from "react-icons/fi";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Assembly Endgame",
      description:
        "Assembly Endgame is a thrilling word-guessing game inspired by the classic Hangman.",
      image: "/img/assembly-endgame.jpg",
      tags: ["React"],
      liveUrl: "https://kcassemblyendgame.netlify.app/",
      githubUrl: "https://github.com/Kennedysenyo/Assembly-Endgame",
    },
    {
      id: 2,
      title: "Tenzies Game",
      description:
        "A simple and interactive game built with React where players roll dice to match all numbers and win! The goal is to get all the dice to show the same number.",
      image: "/img/tenzies.jpg",
      tags: ["React"],
      liveUrl: "https://kctenzies.netlify.app/",
      githubUrl: "https://github.com/Kennedysenyo/Tenzies",
    },
  ];

  return (
    <section id="projects" className="bg-muted/50 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              A selection of my recent work
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
