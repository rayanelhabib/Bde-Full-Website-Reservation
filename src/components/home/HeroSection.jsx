import { Link } from "react-router-dom";
import ReserveButton from "@/components/ui/ReserveButton";
import FancyButton from "@/components/ui/FancyButton";
import SocialHolographic from "@/components/ui/SocialHolographic";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#8ddcff,_transparent_50%),radial-gradient(ellipse_at_top_right,_#f3e8b8,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_#b4b8ff,_transparent_50%)]" />

      {/* GLASS OVERLAY */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-gray-900">

        {/* BADGE */}
        <div className="mb-6 sm:mb-8 inline-flex items-center rounded-full border border-white/50 bg-white/40 px-6 py-2 text-sm font-medium text-gray-700 backdrop-blur-md">
          ✓ skz_rayan23
        </div>

        {/* TITLE RESPONSIVE */}
        <h1 className="bbh-bartle text-center leading-tight tracking-tight">
          <span className="block text-[clamp(2.2rem,6vw,4.5rem)]">
            Alkendi
          </span>

          <span className="block mt-2 text-[#1DA1F2] text-[clamp(1.6rem,4.5vw,3rem)]">
            We Are Different
          </span>
        </h1>

        {/* BUTTONS – PLUS BAS */}
        <div className="mt-20 sm:mt-24 flex flex-col sm:flex-row gap-6 justify-center items-center">

          <Link to="/reservation">
            <ReserveButton text="Réserver maintenant" />
          </Link>

          <FancyButton />

        </div>
      </div>

      {/* ✅ SOCIAL ICONS – ENCORE PLUS BAS (POSITIONNEMENT PAR LE BAS) */}
      <div className="hidden lg:flex absolute right-10 bottom-28 z-30">
        <SocialHolographic />
      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute bottom-0 h-32 sm:h-40 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
