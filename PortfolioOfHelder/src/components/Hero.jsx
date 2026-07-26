import React from 'react';
 

export default function Hero() {
  return (
    <section id="hero" className="py-24 sm:py-32 bg-white text-slate-950 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
       

        {/* Giant Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.95]">
            Helder
            <br />
            <span className="text-slate-400">Mullettoo.</span>
          </h1>
        </div>

        {/* Clean Subtitle */}
        <p className="text-xl sm:text-2xl font-medium text-slate-600 max-w-2xl leading-relaxed">
          Full-Stack & Desktop Software Engineer creating fast, minimalist applications with React, Next.js, and Rust.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm tracking-wide rounded-full transition-all shadow-xs"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-950 font-semibold text-sm tracking-wide rounded-full transition-all"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}