import React, { useState } from 'react';
 
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit form. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-12 bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6 border border-slate-200/80">
        
        {/* Compact Header */}
        <div className="mb-5">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
            Get in touch
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950">
            Send us a message
          </h2>
        </div>

        {/* Status Alerts */}
        {status === 'success' && (
          <div className="mb-4 p-3 rounded-lg bg-slate-950 text-white text-xs font-medium flex items-center justify-between">
            <span>Message sent successfully!</span>
            <button 
              onClick={() => setStatus('idle')}
              className="ml-2 text-slate-400 hover:text-white transition-colors text-[10px] uppercase tracking-wider"
            >
              Dismiss
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs font-medium">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-lg text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-1.5 focus:ring-slate-950 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-lg text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-1.5 focus:ring-slate-950 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-lg text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-1.5 focus:ring-slate-950 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-lg text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-1.5 focus:ring-slate-950 focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-2.5 px-4 bg-slate-950 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium text-xs rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-1"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-1.5">
                <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}