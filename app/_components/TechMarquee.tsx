'use client';

import { TECH_STACK } from './data';

export default function TechMarquee() {
  return (
    <div className="reveal delay-2 mb-24 overflow-hidden">
      <div className="marquee-container whitespace-nowrap">
        <div className="marquee-content inline-block">
          {TECH_STACK.map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-6 text-2xl font-semibold text-[#777] hover:text-white transition-colors duration-200 font-mono cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
