import React, { useEffect, useState, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate once
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getItemClass = () => `
    transition-all duration-1000 ease-out transform
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
  `;

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-white text-slate-950 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Eyebrow & Title */}
        <div className={getItemClass()} style={{ transitionDelay: '100ms' }}>
          <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Selected Works
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
            Featured Projects
          </h2>
        </div>

        {/* Minimal Placeholder Banner */}
        <div className={getItemClass()} style={{ transitionDelay: '250ms' }}>
          <div className="p-8 sm:p-12 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col items-start gap-3">
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