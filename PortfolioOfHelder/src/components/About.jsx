import React from 'react';
 

export default function About() {
  const highlights = [
    { label: 'Role', value: 'Software Engineer' },
    { label: 'Stack', value: 'React, Next.js, Tauri, Rust' },
    { label: 'Focus', value: 'Clean Code & Fast Apps' },
  ];

  return (
    <section id="about" className="py-24 bg-base-100 border-y border-slate-200/60 min-h-screen flex items-center justify-around ">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Big Bold Headline */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            About Me
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
            I turn ideas into fast, minimal software.
          </h2>
        </div>

        {/* Short Statement */}
        <p className="text-xl sm:text-2xl font-medium text-slate-600 leading-relaxed max-w-2xl">
          Based in the UK. Focused on building sleek web applications and lightweight desktop utilities that solve real problems.
        </p>

        {/* Key Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-slate-200">
          {highlights.map((item, index) => (
            <div key={index} className="space-y-1">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                {item.label}
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}