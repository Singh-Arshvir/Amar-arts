import { ArrowUpRight } from 'lucide-react';
import logoIcon from '../assets/logo-icon.png';
import { motion } from 'motion/react';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
      <div className="flex-shrink-0 pointer-events-auto flex items-center gap-3">
        <img src={logoIcon} alt="Logo" className="h-12 w-12 object-contain" />
        <span className="text-2xl font-heading italic text-white tracking-tight">Amar Arts</span>
      </div>

      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 pointer-events-auto shadow-2xl shadow-black/50">
        <div className="flex items-center space-x-1 px-4">
          {["Home", "Services", "Work", "Process", "Pricing"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <a href="tel:9115155366" className="px-3 py-2 text-sm font-medium text-foreground/90 hover:text-white transition-colors">
          9115155366
        </a>
        <a href="#services" className="bg-white text-black font-medium rounded-full px-3.5 py-1.5 text-sm flex items-center gap-1 hover:bg-white/90 transition-colors ml-2 cursor-pointer">
          Get Started
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </nav>
  );
}
