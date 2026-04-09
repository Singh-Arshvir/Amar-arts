const testimonials = [
  {
    quote: "The flex banners we ordered for our storefront are incredibly vibrant and durable. Amar Arts delivered perfectly!",
    author: "Sarah Chen",
    role: "Local Business Owner"
  },
  {
    quote: "Our wedding cards were absolutely stunning. The paper quality and design exceeded all our expectations.",
    author: "Priya & Rahul",
    role: "Happy Couple"
  },
  {
    quote: "We order all our company t-shirts from Amar Arts. The print quality is fantastic and lasts wash after wash.",
    author: "Rajiv Gupta",
    role: "HR Manager, TechFlow"
  }
];

export function Testimonials() {
  return (
    <section className="w-full bg-black py-24 md:py-32 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-xs font-medium text-white font-body tracking-wide uppercase">What They Say</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="liquid-glass rounded-2xl p-8 flex flex-col justify-between">
              <p className="text-white/80 font-body font-light text-base italic leading-relaxed mb-8">
                "{item.quote}"
              </p>
              <div>
                <div className="text-white font-body font-medium text-sm">
                  {item.author}
                </div>
                <div className="text-white/50 font-body font-light text-xs">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
