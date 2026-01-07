import "./social-holographic.css";

const SocialHolographic = () => {
  return (
    <div className="holographic-stack">

      {/* ================= INSTAGRAM (VRAI LOGO) ================= */}
      <a
        href="https://www.instagram.com/bde_alkendi/"
        target="_blank"
        rel="noopener noreferrer"
        className="holographic-icon instagram"
        aria-label="Instagram"
      >
        <div className="holographic-ring"></div>
        <div className="holographic-particles"></div>

        {/* ✅ LOGO INSTAGRAM OFFICIEL (CAMÉRA) */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5
            C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5
            C5.27 3.5 3.5 5.27 3.5 7.75v8.5c0 2.48 1.77 4.25 4.25 4.25h8.5
            c2.48 0 4.25-1.77 4.25-4.25v-8.5c0-2.48-1.77-4.25-4.25-4.25h-8.5zm4.25
            3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75
            3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.38-.88a1.12
            1.12 0 1 1 0 2.24a1.12 1.12 0 0 1 0-2.24z"
          />
        </svg>

        <div className="holographic-pulse"></div>
      </a>
    </div>
  );
};


export default SocialHolographic;
