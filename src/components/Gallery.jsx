import React from 'react';
import { motion } from 'motion/react';

const galleryItems = [
  {
    title: "Premium T-Shirts",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    description: "High-quality fabric with vibrant, long-lasting prints."
  },
  {
    title: "Luxury Wedding Cards",
    category: "Invitations",
    image: "/images/wedding_cards.jpg",
    description: "Intricate gold foil and premium paper for your special day."
  },
  {
    title: "High-Impact Banners",
    category: "Marketing",
    image: "/images/flex_banners.jpg",
    description: "Large format flex printing for maximum business visibility."
  },
  {
    title: "Personalized Mugs",
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800",
    description: "Custom photo mugs that make the perfect personalized gift."
  },
  {
    title: "Professional Visiting Cards",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800",
    description: "Premium finishes to make a lasting first impression."
  },
  {
    title: "Vinyl Name Plates",
    category: "Signage",
    image: "https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&q=80&w=800",
    description: "Durable and stylish custom name plates for homes and offices."
  }
];

export function Gallery() {
  return (
    <section className="w-full bg-black py-24 md:py-32 px-8 lg:px-16" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-xs font-medium text-white font-body tracking-wide uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Excellence in every print.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl liquid-glass p-2 aspect-[4/5]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-medium text-white/60 font-body uppercase tracking-widest mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-heading italic text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <a href="#contact" className="liquid-glass-strong rounded-full px-8 py-4 font-medium text-white hover:scale-105 transition-transform flex items-center gap-2">
            Discuss Your Project 
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
