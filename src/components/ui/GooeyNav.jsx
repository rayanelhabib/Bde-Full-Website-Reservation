import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './GooeyNav.css';

// Helper function moved outside component to avoid linter errors
const noise = (n = 1) => n / 2 - Math.random() * n;

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 10,
  particleDistances = [100, 20],
  particleR = 80,
  timeVariance = 200,
  colors = [1, 2, 3, 4, 1, 2],
  initialActiveIndex = 0
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Calculate active index based on current route
  const calculatedActiveIndex = useMemo(() => {
    const currentPath = location.pathname;
    const index = items.findIndex(item => item.href === currentPath);
    return index >= 0 ? index : initialActiveIndex;
  }, [location.pathname, items, initialActiveIndex]);
  
  const [activeIndex, setActiveIndex] = useState(calculatedActiveIndex);
  
  // Navbar transparente sur toutes les pages
  const isReservationPage = location.pathname === '/reservation';
  const isHomePage = location.pathname === '/';
  
  // Sur Home et Reservation, utiliser texte blanc (fond sombre)
  const needsWhiteText = isHomePage || isReservationPage;

  // Animation optimisée : particules seulement vers le haut
  const getXY = useCallback((distance) => {
    // Angle limité au quadrant supérieur (0° à 180°) pour que les bulles montent
    const baseAngle = 90; // Commence en haut (90°)
    const angleRange = 90; // De -45° à +45° autour du haut
    const angle = (baseAngle + (noise(angleRange) - angleRange/2)) * (Math.PI / 180);
    return [distance * Math.cos(angle), -Math.abs(distance * Math.sin(angle))]; // Toujours vers le haut (y négatif)
  }, []);

  const createParticle = useCallback((i, t, d, r) => {
    let rotate = noise(r / 10);
    // Position de départ au centre, fin vers le haut - smooth et subtil
    const startDist = d[0] * 0.1; // Très proche du centre
    const endDist = d[1] * 1.2; // Distance modérée
    return {
      start: getXY(startDist),
      end: getXY(endDist),
      time: t,
      scale: 0.6 + noise(0.2), // Taille subtile
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  }, [particleCount, colors, getXY]);

  const makeParticles = element => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = element => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    const liEl = e.currentTarget;
    if (activeIndex === index) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);
    
    // Navigate to the route
    if (items[index]?.href) {
      navigate(items[index].href);
    }

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');

      void textRef.current.offsetWidth;
      // Afficher le texte dupliqué uniquement pendant l'animation
      textRef.current.classList.add('active');
      // Masquer après l'animation
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.classList.remove('active');
        }
      }, animationTime);
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index);
      }
    }
  };

  // Update active index when route changes
  // Note: We need to sync state here for animation effects to work correctly
  useEffect(() => {
    if (calculatedActiveIndex !== activeIndex) {
      setActiveIndex(calculatedActiveIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatedActiveIndex]);

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      // Ne pas afficher le texte dupliqué de manière permanente
      // Il sera visible uniquement pendant les animations de clic
      if (textRef.current) {
        textRef.current.classList.remove('active');
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className={`gooey-nav-container ${
      needsWhiteText ? 'transparent-nav' 
      : 'transparent-nav-home'
    }`} ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a 
                href={item.href} 
                onClick={e => handleClick(e, index)} 
                onKeyDown={e => handleKeyDown(e, index)}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
