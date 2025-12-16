'use client';

import { EXPERIENCE } from './data';

export default function Experience() {
  return (
    <section className="reveal delay-3 mb-24">
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#222]">
        <h2 className="text-xl font-medium font-mono">01. Experience</h2>
        <span className="text-[#666] text-sm font-mono">/ 6m</span>
      </div>

      <div className="flex flex-col">
        {EXPERIENCE.map((job, index) => (
          <div 
            key={index} 
            className="group py-8 border-b border-[#ffffff08]"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold font-mono text-[#ffffff] mb-1">
                  {job.role}
                </h3>
                <p className="text-[#aaa] font-mono text-base mb-2">
                  {job.company}
                </p>
              </div>
              <div className="font-mono text-base text-[#888] whitespace-nowrap">{job.date}</div>
            </div>
            
            <div className="ml-0 md:ml-0 mb-3">
              {job.points.map((point, i) => (
                <div key={i} className="text-[#aaa] text-base mb-2 leading-relaxed">
                  <span className="text-[#888] mr-2">›</span>{point}
                </div>
              ))}
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {job.stack.map(tech => (
                <span key={tech} className="text-xs uppercase text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
