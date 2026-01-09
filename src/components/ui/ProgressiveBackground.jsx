import { useState, useEffect, useRef } from 'react';

const ProgressiveBackground = ({ 
  videoSrc = null, 
  imageSrc = null, 
  lowQualitySrc = null, 
  className = "",
  overlayClass = ""
}) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);
  const [isLowResLoaded, setIsLowResLoaded] = useState(false);
  const videoRef = useRef(null);

  // Handle video loading
  useEffect(() => {
    if (videoSrc) {
      // Preload video with higher priority for immediate display
      const video = document.createElement('video');
      video.preload = 'auto'; // Preload the full video immediately
      video.src = videoSrc;

      const handleCanPlay = () => {
        setIsLowResLoaded(true);
        setIsHighResLoaded(true); // Show video immediately when ready
      };

      // Try multiple events to ensure quick loading
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleCanPlay);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleCanPlay);
        video.remove(); // Clean up
      };
    }
  }, [videoSrc]);

  // Handle image loading
  useEffect(() => {
    if (imageSrc && !isHighResLoaded) {
      // If we have a low quality version, load that first
      if (lowQualitySrc) {
        const imgLow = new Image();
        imgLow.onload = () => {
          setIsLowResLoaded(true);
        };
        imgLow.src = lowQualitySrc;
      } else {
        // If no low quality version, just show the regular image
        setTimeout(() => setIsLowResLoaded(true), 0);
      }

      // Load high quality image
      const imgHigh = new Image();
      imgHigh.onload = () => {
        setIsHighResLoaded(true);
      };
      imgHigh.src = imageSrc;
    }
  }, [imageSrc, lowQualitySrc, isHighResLoaded]);

  // Determine which background to show
  const getBackgroundElement = () => {
    if (videoSrc) {
      // For video backgrounds
      return (
        <>
          {/* Low-res placeholder - either a static image or blurred video frame */}
          {!isLowResLoaded && (
            <div 
              className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
              style={{ 
                backgroundImage: lowQualitySrc ? `url(${lowQualitySrc})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(20px) brightness(0.7)'
              }}
            />
          )}
          
          {/* High-res video */}
          {(isLowResLoaded || isHighResLoaded) && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={`w-full h-full object-cover object-center ${isHighResLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
              style={{ transitionDelay: '0ms' }}
            >
              <source src={videoSrc} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          )}
        </>
      );
    } else if (imageSrc) {
      // For image backgrounds
      return (
        <>
          {/* Low-res placeholder */}
          {!isLowResLoaded && lowQualitySrc && (
            <div 
              className={`absolute inset-0 ${className}`}
              style={{ 
                backgroundImage: `url(${lowQualitySrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(20px) brightness(0.7)',
                transform: 'scale(1.1)'
              }}
            />
          )}
          
          {/* High-res image */}
          <div
            className={`w-full h-full ${isHighResLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ${className}`}
            style={{ 
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </>
      );
    }
    
    // Fallback
    return (
      <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />
    );
  };

  // Effect to handle video playback when it's in the DOM
  useEffect(() => {
    if (videoSrc && videoRef.current) {
      const video = videoRef.current;
      
      const forcePlay = () => {
        video.play().catch(() => {});
      };

      video.addEventListener('ended', forcePlay);
      video.addEventListener('pause', forcePlay);

      return () => {
        video.removeEventListener('ended', forcePlay);
        video.removeEventListener('pause', forcePlay);
      };
    }
  }, [videoSrc]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {getBackgroundElement()}
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>
  );
};

export default ProgressiveBackground;