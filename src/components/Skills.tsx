import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              The tools and technologies I work with
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-primary h-5 w-5" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>React.js / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>HTML5 / CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>Redux / Context API</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Server className="text-primary h-5 w-5" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Node.js / Express</li>
                  <li>Python / Django</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>Authentication / Security</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Database className="text-primary h-5 w-5" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Supabase</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="text-primary h-5 w-5" />
                  DevOps & Deployment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Docker / Kubernetes</li>
                  <li>CI/CD Pipelines</li>
                  <li>AWS / GCP / Azure</li>
                  <li>Vercel / Netlify</li>
                  <li>Git / GitHub</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Layout className="text-primary h-5 w-5" />
                  Tools & Methodologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Agile / Scrum</li>
                  <li>Test-Driven Development</li>
                  <li>Responsive Design</li>
                  <li>Performance Optimization</li>
                  <li>Accessibility (WCAG)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Palette className="text-primary h-5 w-5" />
                  Design & UI/UX
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Figma / Adobe XD</li>
                  <li>UI/UX Principles</li>
                  <li>Design Systems</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
