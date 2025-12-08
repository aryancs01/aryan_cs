import Experience from "./src/components/sections/Experience";
import Hero from "./src/components/sections/Hero";
import Projects from "./src/components/sections/Projects";
import Tesseract from "./src/components/sections/Tesseract";
import Tag from "./src/components/ui/Tag";

function App() {
  return (
    <div className="min-h-screen bg-brutal-line font-mono text-brutal-text p-4 md:p-8">
      
      {/* Main Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-0.5 bg-brutal-line border-2 border-brutal-line">
        
        {/* Row 1: Hero & Visual */}
        <Hero />
        <Tesseract />

        {/* Row 2: Experience */}
        <Experience />

        {/* Row 3: Skills (Inline for simplicity) */}
        <div className="bg-brutal-bg p-4 sm:p-6 md:p-8 col-span-12">
          <h2 className="text-xl sm:text-2xl font-bold uppercase mb-4 sm:mb-6"> Stack_Trace</h2>
          <div className="flex flex-wrap gap-1">
            {['TypeScript', 'React', 'Node.js',"Python", 'Next.js', 'Tailwind', 'PostgreSQL', 'Docker',"MongoDB"].map(skill => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </div>

        {/* Row 4: Projects */}
        <Projects />

        {/* Footer */}
        <div className="bg-brutal-text text-brutal-bg p-3 sm:p-4 text-center col-span-12">
          <p className="text-xs sm:text-sm">END_OF_LINE // © 2025</p>
        </div>

      </div>
    </div>
  );
}

export default App;