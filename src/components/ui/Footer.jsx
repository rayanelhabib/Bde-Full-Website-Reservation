import "./footer-social.css";
import schoolLogo from "@/assets/alkendi-school.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1220] text-gray-300 shadow-[0_-10px_30px_rgba(0,0,0,0.35)]">


      {/* TOP SEPARATOR */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">

          {/* LEFT — IDENTITÉ */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-3">
              <img
                src={schoolLogo}
                alt="Alkendi"
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-semibold text-white">
                BDE Alkendi
              </span>
            </div>

            <p className="text-sm max-w-sm text-gray-400">
              Bureau des Étudiants d’Alkendi.  
              Événements, innovation et nouvelle génération.
            </p>
          </div>

          {/* RIGHT — RÉSEAUX SOCIAUX */}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-400">
              Suivez-nous
            </span>

            {/* SOCIAL CARD */}
            <div className="card">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.27 3.5 3.5 5.27 3.5 7.75v8.5c0 2.48 1.77 4.25 4.25 4.25h8.5c2.48 0 4.25-1.77 4.25-4.25v-8.5c0-2.48-1.77-4.25-4.25-4.25h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.38-.88a1.12 1.12 0 1 1 0 2.24a1.12 1.12 0 0 1 0-2.24z"/>
                </svg>
              </a>

              {/* Twitter / X 
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.4 4.8c-.8.4-1.6.6-2.5.8.9-.6 1.6-1.4 1.9-2.5-.8.5-1.8.9-2.8 1.1A4.3 4.3 0 0 0 16.7 3c-2.4 0-4.3 2-4.3 4.3 0 .3 0 .6.1.9-3.6-.2-6.7-1.9-8.8-4.5-.4.6-.6 1.4-.6 2.1 0 1.5.8 2.8 1.9 3.6-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.2 3.1 4.2 3.1A8.6 8.6 0 0 1 2 19.5 12.2 12.2 0 0 0 8.6 21c8 0 12.4-6.6 12.4-12.4v-.6c.8-.6 1.6-1.4 2.4-2.3z"/>
                </svg>
              </a>*/}

              {/* Discord 
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link3"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4a19.8 19.8 0 0 0-4.9-1.5l-.2.4a18.2 18.2 0 0 1 4.3 2.2 15.3 15.3 0 0 0-6.1-1.9c-1.7 0-3.3.3-4.9.8A15.3 15.3 0 0 0 2.8 5c1.6-.9 3.4-1.6 5.2-2l-.2-.4A19.8 19.8 0 0 0 2.9 4C.8 7.1-.1 10.2.2 13.2c2.5 1.9 5 3 7.4 3.6.6-.8 1.2-1.6 1.6-2.5-.9-.3-1.7-.7-2.5-1.2.2-.2.3-.3.5-.5 2.3 1.1 4.9 1.1 7.2 0 .2.2.3.3.5.5-.8.5-1.6.9-2.5 1.2.5.9 1 1.7 1.6 2.5 2.4-.6 4.9-1.7 7.4-3.6.3-3-.6-6.1-2.7-9.2z"/>
                </svg>
              </a>*/}





              {/* WhatsApp
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link4"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.7 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.7a8.3 8.3 0 1 1-4.1 15.4l-.3-.2-3 .8.8-2.9-.2-.3A8.3 8.3 0 0 1 12 3.7zm4.6 11.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.7-1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.2-.2.2-.3.1-.1.1-.3 0-.4-.1-.1-.5-1.2-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.9.6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2z"/>
                </svg>
              </a>*/}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} BDE Alkendi — Tous droits réservés
        </div>

      </div>
    </footer>
  );
};

export default Footer;
