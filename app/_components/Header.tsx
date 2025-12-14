'use client';

export default function Header() {
  return (
    <header className="reveal delay-1 mb-24 flex flex-col gap-16 relative">
      {/* Left Section - Main Heading */}
      <div className="z-10 flex gap-5">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00ff64]/5 border border-[#00ff64]/20 text-[#4ade80] text-xs rounded-full mb-6 font-mono">
          <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full shadow-[0_0_8px_#4ade80]" />
          Open to work
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00ff64]/5 border border-[#00ff64]/20 text-white text-md rounded-full mb-6 font-mono font-bold text-center">
          # Resume
        </div>
      </div>

      {/* Right Section - Profile */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-[#ffffff]">
            Aryan Saxena<span className="text-[#aaa]">_</span>
          </h2>
          <p className="text-[#aaa] text-base md:text-lg mb-2 font-mono">
            Software Engineer Focused on Backend Systems.
          </p>
          <p className="text-[#999] text-sm md:text-base font-mono">
            Visualizing logic through code.
          </p>
        </div>

        {/* Orbit Animation */}
        <div className="orbit-container hidden md:block shrink-0">
          {/* Core */}
          <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-[radial-gradient(circle,#fff,#444)] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10" />
          <div className="ring-base ring-1" />
          <div className="ring-base ring-2" />
          <div className="ring-base ring-3" />
        </div>
      </div>
    </header>
  );
}
