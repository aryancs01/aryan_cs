'use client';

import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className="reveal delay-4 mt-24 text-center">
        <p className="text-[#999] mb-4 text-sm tracking-wide">What&apos;s next?</p>
        <a href="mailto:hello@example.com" className="text-3xl md:text-4xl font-semibold font-mono border-b border-[#444] pb-2 hover:text-white hover:border-white transition-all duration-300">
          Let&apos;s work together
        </a>

        <div className="flex justify-center gap-8 mt-12">
          {[Github, Twitter, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="text-[#999] hover:text-white hover:-translate-y-1 transition-all duration-200">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center text-shadow-white text-xs font-mono">
        SYSTEM v2.0 • 2025
      </footer>
    </>
  );
}
