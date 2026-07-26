import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-white   font-sans text-slate-900">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Handle & Copyright */}
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-950">
          <span>Helder@Mullettoo</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-400 font-normal text-xs">
            © {currentYear} All rights reserved.
          </span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
          <a href="#about" className="hover:text-slate-950 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-slate-950 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-950 transition-colors">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}