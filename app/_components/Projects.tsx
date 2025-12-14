'use client';

import React from 'react';
import { Folder, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { PROJECTS } from './data';

export default function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="reveal delay-4 mb-24">
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#222]">
        <h2 className="text-xl font-medium font-mono">02. Selected Works</h2>
        <span className="text-[#666] text-sm font-mono">/ PROJECTS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            onMouseMove={handleMouseMove}
            className="glow-card group relative bg-[#0a0a0a] border border-[#222] p-8 rounded-xl overflow-hidden hover:border-[#444] hover:-translate-y-0.5 transition-all duration-300 cursor-crosshair"
          >
            <div className="flex justify-between mb-12 text-[#888]">
              {project.type === 'code' ? <Folder size={20} /> : <ImageIcon size={20} />}
              <ExternalLink size={20} className="group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-2 font-mono text-[#ffffff]">{project.title}</h3>
            <p className="text-[#aaa] text-lg mb-6 leading-relaxed">{project.description}</p>
            <div className="font-mono text-sm text-[#999] tracking-wide">
              {project.stack}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
