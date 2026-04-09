import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StartSection } from './components/StartSection';
import { FeaturesChess } from './components/FeaturesChess';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { CtaFooter } from './components/CtaFooter';

function App() {
  return (
    <div className="bg-black min-h-screen text-foreground w-full overflow-x-hidden relative">
      <div className="relative z-10 w-full h-full">
        <Navbar />
        <Hero />
        
        <div className="bg-black relative w-full z-20">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <Gallery />
          <Pricing />
          <Stats />
          <Testimonials />
          <CtaFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
