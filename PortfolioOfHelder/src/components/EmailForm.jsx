import React, { useEffect, useState, useRef } from 'react';

export default function Contact() {
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

  const socials = [
    { name: 'GitHub', href: 'https://github.com/LagrisolaHelder' },
    { name: 'Fiverr', href: 'https://www.fiverr.com/lagrisolahelder/' },
    { name: 'X / Twitter', href: 'https://x.com/Helderlagrisola' },
    { name: 'Instagram', href: 'https://www.instagram.com/_mullettooisme/' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-white text-slate-950 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Eyebrow Label */}
        <div className={getItemClass()} style={{ transitionDelay: '100ms' }}>
          <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">
            Get in touch
          </span>
        </div>

        {/* Big Bold Headline */}
        <div className={getItemClass()} style={{ transitionDelay: '220ms' }}>
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
              Let’s build something together.
            </h2>
            <p className="text-xl sm:text-2xl font-medium text-slate-500 max-w-xl">
              Have a project in mind, or just want to connect? Drop me a line.
            </p>
          </div>
        </div>

        {/* Direct Large Email Link */}
        <div className={getItemClass()} style={{ transitionDelay: '340ms' }}>
          <a
            href="mailto:helderlagrisola@mulletoo.com"
            className="text-2xl sm:text-4xl font-extrabold text-slate-950 hover:text-slate-500 transition-colors underline underline-offset-8 decoration-2"
          >
            helderlagrisola@mulletoo.com
          </a>
        </div>

        {/* Big Minimal Social Links */}
        <div className={getItemClass()} style={{ transitionDelay: '460ms' }}>
          <div className="pt-4 flex flex-wrap gap-x-8 gap-y-4 text-lg sm:text-xl font-bold">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 hover:text-slate-400 transition-colors"
              >
                {social.name} ↗
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}