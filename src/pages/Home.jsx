import HeroSection from "../components/home/HeroSection";
import DomeGallery from "../components/ui/DomeGallery";
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <main className="transition-colors duration-300">
      {/* HeroSection commence dès le haut pour que la navbar soit transparente sur la vidéo */}
      <section className="pt-0">
        <HeroSection />
      </section>

      <section className="relative w-full h-[60vh] md:h-[80vh] bg-[#0f172a] dark:bg-[#0f172a] transition-colors duration-300">
        <DomeGallery
          segments={24}
          dragSensitivity={35}
          maxVerticalRotationDeg={3}
          grayscale={false}
          overlayBlurColor="rgba(0,0,0,0.9)"
          
        />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
