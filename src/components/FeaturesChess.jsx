

const featureImages = {
  tshirts: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
  wedding: '/images/wedding_cards.jpg',
  flex: '/images/flex_banners.jpg',
};

export function FeaturesChess() {
  return (
    <section className="w-full bg-black py-24 md:py-32 px-8 lg:px-16 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-xs font-medium text-white font-body tracking-wide uppercase">Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Creative Printing. Trusted Service.
          </h2>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 lg:pr-12">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">
              Custom T-Shirts & Personalized Gifts
            </h3>
            <p className="text-white/60 font-body font-light text-base md:text-lg mb-8 leading-relaxed">
              From personalized photo mugs to custom t-shirt printing, our high-quality printing ensures vibrant colors and lasting durability. Perfect for corporate teams or personal gifting.
            </p>
            <a href="#services" className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white text-sm hover:scale-105 transition-transform inline-flex items-center justify-center">
              Learn more
            </a>
          </div>
          <div className="flex-1 w-full relative">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] p-2">
              <img src={featureImages.tshirts} alt="Custom T-Shirts" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 lg:pl-12">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">
              Elegant Wedding & Invitation Cards
            </h3>
            <p className="text-white/60 font-body font-light text-base md:text-lg mb-8 leading-relaxed">
              Make your special day unforgettable with our beautifully crafted wedding cards. Featuring custom designs, premium paper stock, and flawless finishes that wow your guests.
            </p>
            <a href="#work" className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white text-sm hover:scale-105 transition-transform inline-flex items-center justify-center">
              See how it works
            </a>
          </div>
          <div className="flex-1 w-full relative">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] p-2">
              <img src={featureImages.wedding} alt="Elegant Wedding Cards" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mt-32">
          <div className="flex-1 lg:pr-12">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">
              High-Impact Flex & Visiting Cards
            </h3>
            <p className="text-white/60 font-body font-light text-base md:text-lg mb-8 leading-relaxed">
              Boost your business visibility with our large-format flex printing and premium visiting cards. We handle everything from name plates to promotional banners.
            </p>
            <a href="#contact" className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white text-sm hover:scale-105 transition-transform inline-flex items-center justify-center">
              Get a Quote
            </a>
          </div>
          <div className="flex-1 w-full relative">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] p-2">
              <img src={featureImages.flex} alt="Flex and Banners" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
