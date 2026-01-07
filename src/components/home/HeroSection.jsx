import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FlowerLoader from "@/components/ui/FlowerLoader";
import ReserveButton from "@/components/ui/ReserveButton";
import SocialHolographic from "@/components/ui/SocialHolographic";
import TextType from "@/components/ui/TextType";
import ProgressiveBackground from "@/components/ui/ProgressiveBackground";

// Vidéo de fond
import videoGala from "@/assets/video_gala.mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Click Réserver → loader → redirection
  const handleReserveClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/reservation");
    }, 1000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* PROGRESSIVE BACKGROUND WITH LOW-RES PLACEHOLDER */}
      <ProgressiveBackground
        videoSrc={videoGala}
        lowQualitySrc={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE5MiA5MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzU1NCIvPjwvc3ZnPg==`} // Simple SVG placeholder
        className="w-full h-full object-cover object-center"
        overlayClass="absolute inset-0 bg-black/40"
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">

        <h1 className="bbh-bartle text-[clamp(2.6rem,6.5vw,5rem)] leading-tight tracking-tight drop-shadow-lg">
          Alkendi
        </h1>

        <div className="mt-4 flex justify-center">
          <TextType
            text={["BDEALKENDY", "WE ARE DIFFERENT", "JOIN THE FUTURE"]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            className="
              font-sans
              text-[clamp(1rem,3vw,2.8rem)]
              tracking-wide
              text-white
              drop-shadow-sm
            "
          />
        </div>

        <div className="mt-40 sm:mt-36 flex justify-center">
          <button onClick={handleReserveClick} disabled={loading}>
            <ReserveButton text="Réserver maintenant" />
          </button>
        </div>

        <div className="mt-20 sm:mt-28 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-sm font-medium tracking-wide drop-shadow">
            Suivez-nous
          </span>
          <SocialHolographic />
        </div>

      </div>

      <div className="pointer-events-none absolute bottom-0 h-32 sm:h-40 w-full bg-gradient-to-t from-black/60 to-transparent" />

      {loading && <FlowerLoader />}
    </section>
  );
};

export default HeroSection;
