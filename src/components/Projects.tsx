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
import { projects } from "@/lib/projects-data";

export function Projects() {
  const projectElements = projects.map((project) => (
    <Card key={project.id} className="overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {project.badge && (
          <span className="text-foreground border-border absolute right-2 rounded-lg border-2 bg-white/40 px-4 py-2 text-center">
            {project.badge}
          </span>
        )}
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
  ));

  return (
    <section
      id="projects"
      className="bg-muted/50 flex w-full justify-center py-16"
    >
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
            {projectElements}
          </div>
        </div>
      </div>
    </section>
  );
}
