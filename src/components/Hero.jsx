import { ArrowUpRight, Play } from 'lucide-react';
import { BlurText } from './BlurText';
import { VideoBackground } from './VideoBackground';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[1000px] flex flex-col items-center overflow-visible bg-black">
      <VideoBackground 
        src="/videos/hero.mp4"
        poster="/images/hero_bg.jpeg"
        overlayBottom={true}
        bottomFadeHeight="300px"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-8 lg:px-16 mx-auto pt-[150px] flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-3 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">10+ Years Experience</span>
          <span className="text-white/80 font-body text-sm font-medium pr-3">Welcome to Amar Arts Kurali.</span>
        </motion.div>

        <BlurText 
          text="Turning Your Ideas into Prints"
          delay={0.1}
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl tracking-[-4px] mb-6"
        />

        <motion.p 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm md:text-base text-white font-body font-light leading-snug max-w-xl mx-auto mb-10"
        >
          Premium quality t-shirts, exquisite wedding cards, mug printing, and high-impact flex banners. We bring your ideas to life with stunning clarity and trusted service.
        </motion.p>

        <motion.div 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#services" className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform">
            Get Started
            <ArrowUpRight className="w-5 h-5 ml-1" />
          </a>
          
          <a href="#work" className="rounded-full px-6 py-3 font-medium text-white/90 flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
              <Play className="w-3.5 h-3.5 fill-white" />
            </div>
            See Our Work
          </a>
        </motion.div>

      </div>

      <div className="relative z-10 w-full mt-auto pb-8 pt-16 flex flex-col items-center pointer-events-none">
        <div className="liquid-glass rounded-full px-5 py-1.5 mb-8">
          <span className="text-xs font-medium text-white/60 font-body tracking-wider uppercase">Premium services tailored for you</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-70">
          {['T-Shirts', 'Wedding Cards', 'Flex Banners', 'Visiting Cards', 'Gifts & Mugs'].map(partner => (
            <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white/80">{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
