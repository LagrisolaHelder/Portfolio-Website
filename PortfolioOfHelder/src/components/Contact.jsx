import React, { useState } from 'react';
 
export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
 

     <div className="max-w-lg mx-auto px-10 py-5 bg-base-200 text-black rounded-xl border border-black/10 shadow-sm font-sans">
      <h3 className="text-base font-bold tracking-tight mb-1">Contact</h3>
      <p className="text-xs text-black/60 mb-4">Drop a quick line below.</p>

      {status === 'success' ? (
        <p className="text-xs font-semibold py-2 px-3 bg-black text-white rounded-lg text-center">
          Sent! I&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-3 py-1.5 text-xs bg-white text-black placeholder-black/40 border border-black/15 rounded-md focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <textarea
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full px-3 py-1.5 text-xs bg-white text-black placeholder-black/40 border border-black/15 rounded-md focus:outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-[11px] text-red-600 font-medium">Failed to send. Try again.</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-2 bg-black hover:bg-black/85 disabled:opacity-50 text-white font-medium text-xs rounded-md transition-opacity"
          >
            {status === 'loading' ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </div>
 
  );
}