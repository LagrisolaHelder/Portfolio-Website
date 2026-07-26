import React, { useEffect, useState, useRef } from 'react';
import "../index.css";

export default function About() {
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
      { threshold: 0.2 } // Triggers when 20% of section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { label: 'Role', value: 'Software Engineer' },
    { label: 'Stack', value: 'React, Next.js, Tauri, Rust' },
    { label: 'Focus', value: 'Clean Code & Fast Apps' },
  ];

  const getItemClass = () => `
    transition-all duration-1000 ease-out transform
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
  `;

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-base-100   font-sans text-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Eyebrow & Big Headline */}
        <div className={getItemClass()} style={{ transitionDelay: '100ms' }}>
          <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
            I turn ideas into fast, <b>minimal software.</b>
          </h2>
        </div>

        {/* Short Statement */}
        <div className={getItemClass()} style={{ transitionDelay: '250ms' }}>
          <p className="text-xl sm:text-2xl font-medium text-slate-600 leading-relaxed max-w-2xl">
            Based in the UK. Focused on building sleek web applications and lightweight desktop utilities that solve real problems.
          </p>
        </div>

        {/* Key Details Grid */}
        <div className={getItemClass()} style={{ transitionDelay: '400ms' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
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

      </div>
    </section>
  );
}