import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// Liste dynamique des noms d'images et personnes
const imageData = [
  { name: 'aamir', person: 'Aamir' },
  { name: 'rayan', person: 'skz_rayan23' },
  { name: 'adnane', person: 'Adnane' },
  { name: 'aymen', person: 'Aymen' },
  { name: 'ahmed', person: 'Ahmed' },
  { name: 'boutaina', person: 'Boutaina' },
  { name: 'hafsa', person: 'Hafsa' },
  { name: 'adam', person: 'adam' },
  { name: 'hiba', person: 'Hiba' },
  { name: 'kenza', person: 'Kenza' },
  { name: 'lina', person: 'Lina' },
  
  { name: 'salma', person: 'Salma' },
  { name: 'wadii', person: 'Wadii' }
];

// Générer dynamiquement le tableau demo
const demo = imageData.map((item, index) => {
  const colors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#EC4899', '#14B8A6', '#F97316', '#A855F7', '#3B82F6'];
  const borderColor = colors[index % colors.length];
  
  return {
    image: `/${item.name}.jpg`,
    title: item.person,
    subtitle: 'Membre BDE',
    handle: `@${item.name.toLowerCase()}`,
    borderColor: borderColor,
    gradient: `linear-gradient(145deg,${borderColor},#000)`,
    url: 'https://www.instagram.com/bde_alkendi/'  // Lien vers Instagram pour tous les membres
  };
});



const ChromaGrid = ({ items, className = '', radius = 300, damping = 0.45, ease = 'power3.out' }) => {
  const rootRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });


  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
  };

  const handleLeave = () => {
    // Animation de fade au survol - désactivée pour l'instant
  };

  const handleCardClick = url => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove = e => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full min-h-[420px] flex flex-wrap justify-center items-center gap-3 ${className}`}
      style={{
        '--r': `${radius}px`,
        '--x': '50%',
        '--y': '50%'
      }}
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-[300px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
          style={{
            '--card-border': c.borderColor || 'transparent',
            background: c.gradient,
            '--spotlight-color': 'rgba(255, 255, 255, 0.3)'
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />
          <div className="relative z-10 flex-1 p-[10px] box-border h-[220px]">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-[10px]"
              onError={(e) => {
                console.error(`Failed to load image: ${c.image}`);
                e.target.style.display = 'none'; // Hide the image
                // Show a fallback image or message
                e.target.parentElement.innerHTML = `
                  <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#f0f0f0;color:#666;font-family:sans-serif;">
                    <img src="/bde_balck_pic.jpg" alt="Fallback Image" style="max-width:80%; max-height:80%;" />
                  </div>
                `;
              }}
              onLoad={(e) => {
                console.log(`Successfully loaded image: ${c.image}`);
                e.target.style.display = 'block'; // Make sure the image is visible
              }}
            />
          </div>
          <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
            <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
            {c.handle && <span className="text-[0.95rem] opacity-80 text-right">{c.handle}</span>}
            <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
            {c.location && <span className="text-[0.85rem] opacity-85 text-right">{c.location}</span>}
          </footer>
        </article>
      ))}
      {/* Overlays gris supprimés pour garder les photos en couleur */}
    </div>
  );
};

export default ChromaGrid;
