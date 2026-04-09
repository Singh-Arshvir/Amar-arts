import { VideoBackground } from './VideoBackground';

const stats = [
  { value: "5000+", label: "Orders Completed" },
  { value: "99%", label: "Happy Clients" },
  { value: "1M+", label: "Items Printed" },
  { value: "2 days", label: "Average Delivery" }
];

export function Stats() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center py-24 px-8 lg:px-16" id="work">
      <VideoBackground 
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        isDesaturated={true}
        overlayTop={true}
        overlayBottom={true}
      />
      
      <div className="relative z-10 w-full max-w-6xl">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 border border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-white/60 font-body font-light text-sm tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
