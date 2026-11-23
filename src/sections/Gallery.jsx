import { Suspense, useRef, useState, useEffect } from 'react';
import { Image as ImageImpl } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useScroll, ScrollControls, Scroll } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { artworks } from '../data/artworks';

import clarenceImg from '../assets/images/clarence.png';
import herculesImg from '../assets/images/hercules-lion.png';
import poseidonImg from '../assets/images/poseidon.png';
import prometheusImg from '../assets/images/prometheus.png';
import parisImg from '../assets/images/paris.jpg';
import statue1 from '../assets/images/statue1.png';

// layout.js
const pagesLayout = [
  {
    cards: [
      { url: clarenceImg, x: 0.1, y: 0.17, h: 0.9, aspect: 0.9, z: -1 },
      { url: herculesImg, x: 0.5, y: -0.07, h: 0.5, aspect: 1, z: 1 },
      { url: poseidonImg, x: 0.8, y: 0.2, h: 0.5, aspect: 0.9, z: 0 },
    ],
  },

  {
    cards: [
      { url: prometheusImg, x: 0.1, y: -0.05, h: 0.6, aspect: 1, z: 0 },
      { url: parisImg, x: 0.45, y: 0.2, h: 0.6, aspect: 1, z: -1 },
      { url: statue1, x: 0.9, y: 0, h: 1.2,  aspect: 0.9, z: -1 },
    ],
  },
];


function useIsMobile(breakpoint = 1200) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return isMobile;
}

const mobileLayout = pagesLayout.flatMap((page) => page.cards.map((card) => ({ cards: [card] })));

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const scrollableDistance =
        rect.height - window.innerHeight;

      const scrolled =
        -rect.top;

      const value = THREE.MathUtils.clamp(
        scrolled / scrollableDistance,
        0,
        1
      );

      setProgress(value);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return progress;
}



function Image({ imgIndex, pageIndex, hoveredCard, setHoveredCard, position, scale, url, ...props }) {
  const groupRef = useRef();
  const imgRef = useRef();
 

  const idCard = `${pageIndex}-${imgIndex}`;
  const activeCard = hoveredCard !== null;
  const isHovered = hoveredCard === idCard;

  useFrame((state, delta) => {
    if (!groupRef.current || !imgRef.current) return;

    const targetZ = position[2] 
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetZ,
      4,
      delta,
    );

    const targetGrayscale = activeCard && !isHovered ? 1 : 0;
    const targetOpacity = activeCard && !isHovered ? 0.3 : 1;

    imgRef.current.material.grayscale = THREE.MathUtils.damp(
      imgRef.current.material.grayscale,
      targetGrayscale,
      4,
      delta,
    );
    imgRef.current.material.opacity = THREE.MathUtils.damp(
      imgRef.current.material.opacity,
      targetOpacity,
      4,
      delta,
    );

    // hover-пульсация — уравномерный множитель на group, аспект не ломает
    const targetHover = isHovered ? 1.04 : 1;
    const hover = THREE.MathUtils.damp(
      groupRef.current.scale.x,
      targetHover,
      4,
      delta,
    );
    groupRef.current.scale.setScalar(hover);
  });

  return (
    <group ref={groupRef} position={position}>
      {/* scale — реактивный проп, drei сам пересчитает cover-crop при ресайзе */}
      <ImageImpl
        ref={imgRef}
        url={url}
        scale={scale}
        {...props}
        onPointerEnter={(event) => {
          event.stopPropagation();
          setHoveredCard(idCard);
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={(event) => {
          event.stopPropagation();
          setHoveredCard(null);
          document.body.style.cursor = 'default';
        }}
      />
    </group>
  );
}


function Page({ cards, pageIndex, hoveredCard, setHoveredCard, isMobile, ...props }) {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <group {...props}>
      {cards.map((card, i) => {
         let w, h;

        if (isMobile) {
          const maxW = width * 0.9; // отступы по бокам, подбери сам
          const maxH = height * 0.6;

          // сначала пробуем по высоте
          h = maxH;
          w = h * card.aspect;

          // если по ширине не влезает — пересчитываем от ширины
          if (w > maxW) {
            w = maxW;
            h = w / card.aspect;
          }
        } else {
          h = card.h * height;
          w = h * card.aspect;
        }

        return (
          <Image
            key={i}
            imgIndex={i}
            pageIndex={pageIndex}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
            url={card.url}
            position={
  isMobile
    ? [0, 0, card.z ?? 0]
    : [(card.x - 0.5)* width, card.y * height, card.z ?? 0]
}
            scale={
              isMobile
    ? (() => {
        const targetH = height * 0.6;
        const targetW = targetH * card.aspect;
        // если посчитанная ширина больше доступной ширины экрана — ограничиваем по ширине
        const maxW = width; // отступы по бокам
        if (targetW > maxW) {
          return [maxW, maxW / card.aspect, 1];
        }
        return [targetW, targetH, 1];
      })()
    : [w, h, 1]

            }
          />
        );
      })}
    </group>
  );
}

function Pages({progress}) {
  const { width } = useThree((state) => state.viewport);
  const groupRef = useRef()
  const [hoveredCard, setHoveredCard] = useState(null);
  const isMobile = useIsMobile()

  const layout = isMobile ? mobileLayout : pagesLayout;
  const maxOffset = (layout.length - 1) * width;

  useFrame((_, delta) => {
    const targetX = -progress * maxOffset;

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.damp(
        groupRef.current.position.x,
        targetX,
        4,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} position={[-progress * width, 0, 0]}>
      {layout.map((page, i) => (
        <Page
          key={i}
          pageIndex={i}
          cards={page.cards}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          isMobile={isMobile}
          position={[width * i, 0, 0]}
        />
      ))}
    </group>
  );
}


export default function Gallery() {
  const sectionRef = useRef();

  const progress = useScrollProgress(sectionRef);

  const isMobile = useIsMobile()

  const pageCount = isMobile
  ? mobileLayout.length
  : pagesLayout.length;

  return (
    <section
      ref={sectionRef}
      className='relative' style={{ height: `${pageCount * 100}svh` }}>
        <div className='sticky top-0 overflow-hidden h-[90svh] w-full'>
   

        <Canvas dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <Pages progress={progress} />
          </Suspense>
        </Canvas>

      </div>
    </section>
  );
}