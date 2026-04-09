import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const pricingPlans = [
  {
    title: "Apparel Printing",
    price: "₹299",
    unit: "per shirt",
    features: [
      "Premium Cotton Fabric",
      "Vibrant DTF/Vinyl Print",
      "Bulk Discounts Available",
      "Quick 2-Day Turnaround",
      "Custom Designs Included"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    title: "Wedding Cards",
    price: "₹25",
    unit: "per card",
    features: [
      "Luxury Paper Stock",
      "Gold Foil Accents",
      "Custom Envelopes",
      "Artistic Layouts",
      "Personalized Proofing"
    ],
    cta: "Request Samples",
    popular: false
  },
  {
    title: "Flex & Signage",
    price: "₹20",
    unit: "per sq. ft.",
    features: [
      "Weather Resistant Flex",
      "High-Resolution Printing",
      "Installation Available",
      "Metal/Vinyl Name Plates",
      "Fast Professional Setup"
    ],
    cta: "Get a Quote",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-black py-24 md:py-32 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-xs font-medium text-white font-body tracking-wide uppercase">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Premium quality. Honest rates.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl ${plan.popular ? 'liquid-glass-strong ring-1 ring-white/20' : 'liquid-glass'} transition-transform hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-heading italic text-white mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-heading italic text-white">{plan.price}</span>
                <span className="text-white/40 text-sm font-body font-light">{plan.unit}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm font-body font-light">
                    <Check className="w-4 h-4 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-3.5 rounded-full font-medium text-sm text-center transition-all ${
                  plan.popular 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'liquid-glass-strong text-white hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
