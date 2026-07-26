import React from 'react';
 

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white text-slate-950 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Eyebrow Label */}
        <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">
          Selected Works
        </span>

        {/* Big Bold Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
          Featured Projects
        </h2>

        {/* Minimal Placeholder Banner */}
        <div className="pt-6">
          <div className="p-8 sm:p-12 shadow-xs border border-gray-100 rounded-2xl flex flex-col items-start gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Status • In Progress
            </span>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Building & refining new software.
            </p>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-lg">
              Projects are currently being updated. Check back soon or visit my GitHub to see what I’m working on.
            </p>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs tracking-wide rounded-full transition-colors inline-block"
            >
              View GitHub ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}