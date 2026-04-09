import { ShieldCheck, IndianRupee, Clock, Package } from 'lucide-react';

const coreFeatures = [
  {
    icon: ShieldCheck,
    title: "10+ Years Experience",
    description: "A trusted local business serving Kurali since 2015 with high-quality printing solutions and reliable service."
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "We provide premium printing and finishing services at highly competitive rates without compromising quality."
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Timely delivery and quick turnaround optimized for your personal, event, and business printing needs."
  },
  {
    icon: Package,
    title: "Wide Range of Services",
    description: "From visiting cards to custom name plates, we offer comprehensive customized printing and personalized items."
  }
];

export function FeaturesGrid() {
  return (
    <section className="w-full bg-black py-24 md:py-32 px-8 lg:px-16" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-xs font-medium text-white font-body tracking-wide uppercase">Why Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Trusted local business.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, idx) => (
            <div key={idx} className="liquid-glass rounded-2xl p-8 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <feature.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-body font-medium mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
