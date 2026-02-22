import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

function VantaBackground({ effect = "waves", children }) {
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
      });

    (async () => {
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        );

        if (effect === "waves") {
          await loadScript(
            "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
          );

          vantaInstance.current = window.VANTA.WAVES({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            color: 0x0f172a,
            shininess: 30,
            waveHeight: 15,
            waveSpeed: 0.4,
            zoom: 0.85,
          });
        }
      } catch (err) {
        console.error("Vanta load failed", err);
      }
    })();

    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
      }
    };
  }, [effect]);

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* ✅ Background fallback (VERY IMPORTANT) */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-br, #020617, #020617)"
        zIndex={0}
      />

      {/* ✅ Vanta canvas */}
      <Box
        ref={vantaRef}
        position="absolute"
        inset={0}
        zIndex={1}
      />

      {/* ✅ Your content ABOVE Vanta */}
      <Box position="relative" zIndex={2}>
        {children}
      </Box>
    </Box>
  );
}

export default VantaBackground;
