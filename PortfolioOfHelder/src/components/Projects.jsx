import React from 'react';
 

export default function Projects() {
  const projects = [
    {
      title: 'openArchv',
      description: 'Desktop archive decompression utility built with Tauri & Rust.',
      image: '/projects/openarchv.png', // Replace with your image path
      link: 'https://github.com/your-username/openarchv',
    },
    {
      title: 'Archive Extractor',
      description: 'Browser-based file extraction SaaS using React & Supabase.',
      image: '/projects/extractor.png', // Replace with your image path
      link: 'https://your-app-url.com',
    },
    {
      title: '6ix7even Store',
      description: 'Custom e-commerce experience and liquid templating.',
      image: '/projects/storefront.png', // Replace with your image path
      link: 'https://your-store-url.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Featured Projects
          </h2>
        </div>

        {/* Square-ish Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              {/* Top Image Box */}
              <div className="w-full aspect-4/3 bg-slate-100 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Bottom Details & Button */}
              <div className="p-6 flex items-end justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Minimal Black Pill Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs tracking-wide rounded-full transition-colors"
                >
                  Visit now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}