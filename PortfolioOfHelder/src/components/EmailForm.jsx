import React from 'react';
 

export default function Contact() {
  const socials = [
    { name: 'GitHub', href: 'https://github.com/your-username' },
    { name: 'Discord', href: 'https://discord.gg/your-invite-or-user' },
    { name: 'X / Twitter', href: 'https://x.com/your-handle' },
    { name: 'Instagram', href: 'https://instagram.com/your-handle' },
  ];

  return (
    <section id="contact" className="py-24 bg-white text-slate-950 font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Label */}
        <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">
          Get in touch
        </span>

        {/* Big Bold Headline */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
            Let’s build something together.
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-slate-500 max-w-xl">
            Have a project in mind, or just want to connect? Drop me a line.
          </p>
        </div>

        {/* Direct Large Email Link */}
        <div className="pt-4">
          <a
            href="mailto:helderlagrisola@mullettoo.com"
            className="text-2xl sm:text-4xl font-extrabold text-slate-950 hover:text-slate-500 transition-colors underline underline-offset-8 decoration-2"
          >
            helderlagrisola@mullettoo.com
          </a>
        </div>

        {/* Big Minimal Social Links */}
        <div className="pt-8 flex flex-wrap gap-x-8 gap-y-4 text-lg sm:text-xl font-bold">
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
    </section>
  );
}