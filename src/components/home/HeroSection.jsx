import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FlowerLoader from "@/components/ui/FlowerLoader";
import ReserveButton from "@/components/ui/ReserveButton";
import SocialHolographic from "@/components/ui/SocialHolographic";
import TextType from "@/components/ui/TextType";

// Vidéo de fond
import videoGala from "@/assets/video_gala.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Forcer la lecture continue de la vidéo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const forcePlay = () => {
      video.play().catch(() => {});
    };

    video.addEventListener("ended", forcePlay);
    video.addEventListener("pause", forcePlay);

    return () => {
      video.removeEventListener("ended", forcePlay);
      video.removeEventListener("pause", forcePlay);
    };
  }, []);

  // Click Réserver → loader → redirection
  const handleReserveClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/reservation");
    }, 1000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={videoGala} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>

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
