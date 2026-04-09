import React, { useState } from 'react';
import { VideoBackground } from './VideoBackground';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export function CtaFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/xlgokllj", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setLoading(false);
      if (submitted) {
        setTimeout(() => setSubmitted(false), 5000);
      }
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-[800px] flex flex-col items-center pt-32 pb-8 px-8 lg:px-16 bg-black overflow-hidden">
      <VideoBackground 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        overlayTop={true}
        overlayBottom={true}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        {/* Left Side: Info */}
        <div className="flex-1 text-left lg:pt-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-tight mb-8">
            Your next print project starts here.
          </h2>
          <p className="text-white/60 font-body font-light text-base md:text-lg mb-12 max-w-xl">
            Get a quote for your custom t-shirts, wedding cards, or flex banners today. Design • Print • Deliver.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:9115155366" className="liquid-glass-strong text-center rounded-full px-8 py-3.5 font-medium text-white text-sm hover:scale-105 transition-transform w-full sm:w-auto">
                Call Us Today
              </a>
              <a href="mailto:amarartz@gmail.com" className="bg-white text-black text-center rounded-full px-8 py-3.5 font-medium text-sm hover:bg-white/90 transition-colors w-full sm:w-auto">
                Send an Email
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 w-full lg:max-w-md">
          <div className="liquid-glass-strong rounded-3xl p-8 md:p-10 relative">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-16 h-16 text-white mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-heading italic text-white mb-3">Message Sent!</h3>
                <p className="text-white/60 font-body font-light text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-heading italic text-white mb-6">Quick Quote</h3>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/40 uppercase tracking-widest pl-1">Full Name</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border-none rounded-2xl px-5 py-4 text-white text-sm focus:ring-1 focus:ring-white/20 transition-all outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/40 uppercase tracking-widest pl-1">Email Address</label>
                  <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-white/5 border-none rounded-2xl px-5 py-4 text-white text-sm focus:ring-1 focus:ring-white/20 transition-all outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/40 uppercase tracking-widest pl-1">Your Message</label>
                  <textarea required name="message" rows={4} placeholder="I'm interested in..." className="w-full bg-white/5 border-none rounded-2xl px-5 py-4 text-white text-sm focus:ring-1 focus:ring-white/20 transition-all outline-none resize-none" />
                </div>
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-white text-black font-medium rounded-full py-4 text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-colors group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 w-full max-w-7xl mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start justify-between pointer-events-auto gap-12">
        <div className="text-white/60 text-sm font-body mb-4 sm:mb-0 space-y-3 md:max-w-xs">
          <p className="font-semibold text-white">Amar Arts Kurali</p>
          <p>Ward No. 1, Near Veterinary Hospital, Niholka Road, Kurali, Punjab – 140103</p>
          <p className="text-xs text-white/40 pt-2">&copy; {new Date().getFullYear()} Amar Arts. All rights reserved.</p>
        </div>
        
        <div className="text-white/60 text-sm font-body space-y-3">
          <p className="font-semibold text-white">Contact</p>
          <p>Phone: <a href="tel:9115155366" className="hover:text-white transition-colors">9115155366</a></p>
          <p>Email: <a href="mailto:amarartz@gmail.com" className="hover:text-white transition-colors">amarartz@gmail.com</a></p>
        </div>

        <div className="text-white/60 text-sm font-body space-y-3">
          <p className="font-semibold text-white">Working Hours</p>
          <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </section>
  );
}
