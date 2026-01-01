import "./social-holographic.css";

const SocialHolographic = () => {
  return (
    <div className="holographic-stack">

      {/* ================= GITHUB ================= */}
      <a
        href="https://github.com/rayanelhabib/"
        target="_blank"
        rel="noopener noreferrer"
        className="holographic-icon github"
        aria-label="GitHub"
      >
        <div className="holographic-ring"></div>
        <div className="holographic-particles"></div>

        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
            0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
            -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032
            .892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339
            -2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
            -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026
            A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337
            c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65
            .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944
            .359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
            0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>

        <div className="holographic-pulse"></div>
      </a>

      {/* ================= INSTAGRAM (VRAI LOGO) ================= */}
      <a
        href="https://instagram.com/skz_rayan23"
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
