import React from 'react';
 

export default function Hero() {
  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center bg-white px-6 py-12 md:py-20">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Side: Image with rounded corners */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <img
              src="https://scontent-lhr11-1.xx.fbcdn.net/v/t39.30808-6/748907866_122268365210132658_737943247740754703_n.jpg?stp=dst-jpg_tt6&cstp=mx960x957&ctp=s960x957&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=F3d3fafti6MQ7kNvwG7WZb-&_nc_oc=Ado7ufw8XuBnD38Xomh-IwLd1q3pNSwR6Y0FeCeuLOsq7PaqEpXsgEA_8dTs-yIB-qM&_nc_zt=23&_nc_ht=scontent-lhr11-1.xx&_nc_gid=ZvYg6tnSaqziD2HeDub7Dw&_nc_ss=7b2a8&oh=00_AQC5YrTKIrkqEQMJ_YrVloqWYxrkncy1z_vm-1G7mlSq-A&oe=6A6AC7C7" // Replace with your image path or import
              alt="Helder"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Side: Copy & CTAs */}
        <div className="md:col-span-7 flex flex-col items-start justify-center space-y-6">
          
          <div className="space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400">
              Software Engineer
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Let's turn your ideas into digital reality.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
            Hi, I'm <span className="font-semibold text-slate-900">Helder</span>. I design and build fast, modern web applications. Got a concept in mind, or need a developer to help scale your project? Let's collaborate.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-medium text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            >
              Discuss a Project
            </a>

            <a
              href="https://github.com/LagrisolaHelder" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 text-slate-950 hover:text-slate-600 transition-colors rounded-full border border-slate-200 hover:border-slate-400"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}