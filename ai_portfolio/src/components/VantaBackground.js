import React, { useEffect, useRef, useState } from 'react';

// Helper function to load scripts dynamically (copied from your snippet logic)
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const VantaBackground = ({ effect = 'waves' }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initVanta = async () => {
      try {
        // 1. Load Three.js (Required by Vanta)
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');

        // 2. Load the specific Vanta effect script based on prop
        if (effect === 'waves') {
          await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js');

          if (vantaRef.current && window.VANTA) {
            vantaEffect.current = window.VANTA.WAVES({
              el: vantaRef.current,
              THREE: window.THREE, // Pass the loaded Three.js instance
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200,
              minWidth: 200,
              scale: 1,
              scaleMobile: 1,
              color: 0x10509,    // Converted from decimal 66825
              shininess: 35,
              waveHeight: 15,
              waveSpeed: 0.3,
              zoom: 0.75
            });
          }
        } else if (effect === 'birds') {
          await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js');

          if (vantaRef.current && window.VANTA) {
            vantaEffect.current = window.VANTA.BIRDS({
              el: vantaRef.current,
              THREE: window.THREE,
              quantity: 3,
              speedLimit: 1,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200,
              minWidth: 200,
              scale: 1,
              scaleMobile: 1,
              backgroundColor: 0x10509,
              color1: 0x2022a5, // Converted from decimal 2106149
              color2: 0x989fa4,
              colorMode: 'lerp'
            });
          }
        }
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load Vanta Background:", error);
      }
    };

    initVanta();

    // Cleanup function to destroy the effect when component unmounts
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [effect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,  
        pointerEvents: 'none' // Allows clicking elements underneath
      }}
    />
  );
};

export default VantaBackground;