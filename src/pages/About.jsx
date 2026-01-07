import { useEffect, useRef } from "react";
import ChromaGrid from "../components/ui/ChromaGrid";
import Footer from "../components/ui/Footer";

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animation d'entrée subtile
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen">
      {/* ESPACE POUR NAVBAR FIXE */}
      <div className="h-16" />

      {/* SECTION HERO - Our Teams BDE */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-left ml-32">
          {/* Logo BDE */}
          <div className="mb-8 flex justify-start">
            <img 
              src="/bde_balck_pic.jpg" 
              alt="BDE Alkendi Logo" 
              className="h-16 w-16 object-cover rounded-full"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 mb-8">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-purple-700">BDE Alkendi Team</span>
          </div>
                
          {/* Main Title */}
          <div ref={titleRef} className="opacity-0 transition-all duration-1000">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Our Teams
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                BDE Alkendi
              </span>
            </h1>
            
            {/* Decorative line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400 to-purple-600"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-400 to-blue-600"></div>
            </div>
          </div>

          {/* Description Text */}
          <div ref={textRef} className="opacity-0 transition-all duration-1000 delay-200">
            <p className="text-3xl sm:text-4xl md:text-5xl text-slate-800 leading-relaxed max-w-4xl font-bold mb-8 italic bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              "Innovation distinguishes between a leader and a follower."
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed max-w-4xl font-light mb-6">
              Meet the passionate individuals who make Alkendi an innovative student community, 
              dedicated to creativity, events, and the next generation.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-light">
              Together, we build unique experiences that bring people together, inspire, 
              and showcase the talents of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION CHROMA GRID - Team Members */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-16 pb-32">
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              <span className="smooth-typing-animation">Meet Our Team</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The creative minds behind every event and innovation
            </p>
          </div>

          {/* Grid Container */}
          <div className="flex justify-center items-center">
            <ChromaGrid className="flex justify-center items-center" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
};

/* yo should  have an  bai ch  */

export default About;
