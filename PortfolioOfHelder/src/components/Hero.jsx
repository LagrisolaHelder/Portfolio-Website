import React, { useEffect, useState, useRef } from 'react';

export default function Hero() {
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
      { threshold: 0.15 } // Triggers when 15% of section is visible
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
    <section ref={sectionRef} id="hero" className="py-24 sm:py-32 bg-white text-slate-950 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
      

        {/* Giant Headline */}
        <div className={getItemClass()} style={{ transitionDelay: '220ms' }}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.95]">
            Helder
            <br />
            <span className="text-green-500">Mullettoo.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={getItemClass()} style={{ transitionDelay: '340ms' }}>
          <p className="text-xl sm:text-2xl font-medium text-slate-600 max-w-2xl leading-relaxed">
            Full-Stack & Desktop Software Engineer creating fast, minimalist applications with React, Next.js, and Rust.
          </p>
        </div>

        {/* Action Buttons */}
        <div className={getItemClass()} style={{ transitionDelay: '460ms' }}>
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

      </div>
    </section>
  );
}