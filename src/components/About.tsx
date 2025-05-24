export function About() {
  return (
    <section id="about" className="bg-muted/50 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Get to know me and my background
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 text-left">
            <p>
              I'm a dedicated full-stack developer with a strong foundation in
              Computer Science, currently pursuing my degree at the University
              of the People. I specialize in building modern, responsive web
              applications using Next.js and React, with a focus on delivering
              seamless user experiences across all devices. Whether it's
              building from scratch or improving existing systems, I bring both
              precision and creativity to every project I take on.
            </p>
            <p>
              My development journey has been shaped by hands-on projects that
              challenged me to think critically and work collaboratively. I’ve
              been recognized for my keen eye in debugging complex issues and my
              ability to foster team collaboration—key factors in driving
              successful project outcomes. These experiences have not only
              sharpened my technical skills but also strengthened my approach to
              problem-solving and teamwork.
            </p>
            <p>
              Outside of coding, I enjoy making music and occasionally hit the
              track for a good run. These creative and physical outlets keep me
              balanced and energized, feeding back into my work as a developer.
              I believe in continuous learning and am always seeking
              opportunities that push me to grow both personally and
              professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
