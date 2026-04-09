import { VideoBackground } from './VideoBackground';

export function StartSection() {
  return (
    <section id="process" className="relative w-full min-h-[500px] flex flex-col items-center justify-center overflow-hidden py-32 bg-black">
      <VideoBackground 
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        overlayTop={true}
        overlayBottom={true}
        bottomFadeHeight="200px"
      />
      
      <div className="relative z-10 max-w-4xl px-8 flex flex-col items-center text-center">
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-8">
          <span className="text-xs font-medium text-white font-body tracking-wide uppercase">How It Works</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          You dream it. We print it.
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-2xl mb-10">
          Share your design or let our experts create one for you. We handle the printing and deliver top-notch results.
        </p>

        <a href="#contact" className="liquid-glass-strong rounded-full px-8 py-3.5 font-medium text-white text-sm hover:scale-105 transition-transform inline-flex items-center justify-center">
          Get Started
        </a>
      </div>
    </section>
  );
}
