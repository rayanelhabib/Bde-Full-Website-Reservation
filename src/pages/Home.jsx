import HeroSection from "../components/home/HeroSection";
import DomeGallery from "../components/ui/DomeGallery";

import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <main className="bg-white">

      <section className="py-24">
        <HeroSection />


        <section className="relative w-full h-[60vh] md:h-[80vh] bg-white">
          <DomeGallery
          segments={24}
          dragSensitivity={35}
          maxVerticalRotationDeg={3}
          grayscale={false}
          overlayBlurColor="rgba(255,255,255,0.9)"
          />
          </section>


      
      </section>
      
      
      

    </main>
  );
};

export default Home;
