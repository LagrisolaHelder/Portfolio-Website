import React from 'react';
 

export default function About() {
  const timelineEvents = [
    {
      year: '2026 - Present',
      role: 'Full-Stack & Desktop Software Engineering',
      description: 'Building modern web SaaS applications and lightweight desktop tools focused on performance and clean UX.',
      skills: ['React', 'Astro', 'Next.js', 'Tailwind CSS', 'Tauri', 'Rust'],
    },
    {
      year: '2023 - 2026',
      role: 'Operations, Logistics & Production (UK)',
      description: 'Gained real-world experience across warehouse, food production, and packaging logistics since moving to the UK in 2022.',
      skills: ['Operations', 'Workflow Optimization', 'Process Control'],
    },
    {
      year: 'Origin',
      role: 'Timor-Leste to United Kingdom',
      description: 'Driven by relentless curiosity and a passion for continuous learning and problem-solving.',
      skills: ['Adaptability', 'Self-Driven Learning'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-base-100 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Short & Punchy Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Engineer by day, problem solver always.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            I build fast, performant web applications and desktop utilities. Backed by practical experience in operations and engineering, I turn complex problems into clean, functional software.
          </p>
        </div>

        {/* Minimalist Vertical Timeline */}
        <div className="relative border-l border-slate-200 ml-4 sm:ml-32 space-y-12">
          {timelineEvents.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Marker Line/Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white group-hover:bg-slate-950 transition-colors" />

              {/* Year - Positioned on left for tablet/desktop */}
              <span className="block sm:absolute sm:-left-32 sm:top-1 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 sm:mb-0 sm:w-24 sm:text-right">
                {item.year}
              </span>

              {/* Content Card */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                  {item.role}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                  {item.description}
                </p>

                {/* Tech & Skill Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-700 bg-white border border-slate-200 rounded-md shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}