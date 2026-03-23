import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800 * 2, // Double for high DPI 
      height: 800 * 2,
      phi: 0,
      theta: 0.2, // Slightly tilted
      dark: 1, // Dark mode globe
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [0.04, 0.06, 0.12],
      markerColor: [0.23, 0.51, 0.96],
      glowColor: [0.1, 0.2, 0.4],
      markers: [
        // Marker for India
        { location: [20.5937, 78.9629], size: 0.05 }
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003; // Slow rotation
      }
    });

    return () => globe.destroy();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center opacity-60">
      <canvas
        ref={canvasRef}
        style={{
          width: 800,
          height: 800,
          maxWidth: "100%",
          aspectRatio: 1
        }}
      />
    </div>
  );
}
