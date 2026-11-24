import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
     lerp: 0.07,        
     smoothWheel: true,
     wheelMultiplier: 1,
    });


    let frameId: number;

    const raf = (time: number): void => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  

  return null;
};

export default SmoothScroll;
