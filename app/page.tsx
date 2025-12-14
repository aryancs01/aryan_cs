'use client';

import Header from './_components/Header';
import TechMarquee from './_components/TechMarquee';
import Experience from './_components/Experience';
import Projects from './_components/Projects';
import Contact from './_components/Contact';

export default function Portfolio() {
  return (
    <main className="min-h-screen selection:bg-white/20">
      <div className="max-w-225 mx-auto p-8 md:p-16 border-x border-[#ffffff08] bg-background/50 min-h-screen backdrop-blur-sm">
        <Header />
        <TechMarquee />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
