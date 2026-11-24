import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Image as ImageImpl } from '@react-three/drei';
import { useFrame, useThree, Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import clarenceImg from '../assets/images/clarence.png';
import herculesImg from '../assets/images/hercules-lion.png';
import poseidonImg from '../assets/images/poseidon.png';
import prometheusImg from '../assets/images/prometheus.png';
import parisImg from '../assets/images/paris.jpg';
import statue1 from '../assets/images/statue1.png';

type Vec3 = [number, number, number];

type CardData = {
  url: string;
  x: number;
  y: number;
  h: number;
  aspect: number;
  z: number;
};

type PageLayout = {
  cards: CardData[];
};

// layout.js
const pagesLayout: PageLayout[] = [
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
      { url: statue1, x: 0.9, y: 0, h: 1.2, aspect: 0.9, z: -1 },
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

const mobileLayout: PageLayout[] = pagesLayout.flatMap((page) =>
  page.cards.map((card) => ({ cards: [card] }))
);


// у материала drei-Image есть кастомное поле grayscale, в типах three его нет
type ImageMaterial = THREE.Material & { grayscale: number };

type ImageProps = {
  imgIndex: number;
  pageIndex: number;
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
  position: Vec3;
  scale: Vec3;
  url: string;
};

function Image({
  imgIndex,
  pageIndex,
  hoveredCard,
  setHoveredCard,
  position,
  scale,
  url,
}: ImageProps) {
  const groupRef = useRef<THREE.Group>(null);
  const imgRef = useRef<THREE.Mesh>(null);

  const idCard = `${pageIndex}-${imgIndex}`;
  const activeCard = hoveredCard !== null;
  const isHovered = hoveredCard === idCard;

  useFrame((_, delta) => {
    if (!groupRef.current || !imgRef.current) return;

    const material = imgRef.current.material as ImageMaterial;

    const targetZ = position[2];
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetZ,
      4,
      delta
    );

    const targetGrayscale = activeCard && !isHovered ? 1 : 0;
    const targetOpacity = activeCard && !isHovered ? 0.3 : 1;

    material.grayscale = THREE.MathUtils.damp(material.grayscale, targetGrayscale, 4, delta);
    material.opacity = THREE.MathUtils.damp(material.opacity, targetOpacity, 4, delta);

    // hover-пульсация — уравномерный множитель на group, аспект не ломает
    const targetHover = isHovered ? 1.04 : 1;
    const hover = THREE.MathUtils.damp(groupRef.current.scale.x, targetHover, 4, delta);
    groupRef.current.scale.setScalar(hover);
  });

  return (
    <group ref={groupRef} position={position}>
      {/* scale — реактивный проп, drei сам пересчитает cover-crop при ресайзе */}
      <ImageImpl
        ref={imgRef}
        url={url}
        scale={[scale[0], scale[1]]}
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

type PageProps = {
  cards: CardData[];
  pageIndex: number;
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
  isMobile: boolean;
  position: Vec3;
};

function Page({
  cards,
  pageIndex,
  hoveredCard,
  setHoveredCard,
  isMobile,
  position,
}: PageProps) {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <group position={position}>
      {cards.map((card, i) => {
        let cardPosition: Vec3;
        let cardScale: Vec3;

        if (isMobile) {
          const targetH = height * 0.6;
          const targetW = targetH * card.aspect;

          // если посчитанная ширина больше ширины экрана — ограничиваем по ширине
          cardScale =
            targetW > width
              ? [width, width / card.aspect, 1]
              : [targetW, targetH, 1];
          cardPosition = [0, 0, card.z];
        } else {
          const h = card.h * height;
          const w = h * card.aspect;

          cardScale = [w, h, 1];
          cardPosition = [(card.x - 0.5) * width, card.y * height, card.z];
        }

        return (
          <Image
            key={i}
            imgIndex={i}
            pageIndex={pageIndex}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
            url={card.url}
            position={cardPosition}
            scale={cardScale}
          />
        );
      })}
    </group>
  );
}

const SPEED_DESKTOP = 0.08;
const SPEED_MOBILE = 0.15;

const GAP = 0.3;      // пустой промежуток между концом и началом круга, в ширинах экрана (только десктоп)

type Item = { page: PageLayout; rep: number; j: number };

function Pages() {
  const { width } = useThree((state) => state.viewport);
  const pageRefs = useRef<(THREE.Group | null)[]>([]);
  const offset = useRef(0);
  const speed = useRef(1);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const speedFactor = isMobile ? SPEED_MOBILE : SPEED_DESKTOP;

  const base = isMobile ? mobileLayout : pagesLayout;

  // круг повторяется, чтобы в сумме было больше 3 ширин экрана
  const { items, reps } = useMemo(() => {
    const reps = Math.max(1, Math.ceil(3 / base.length));
    const items: Item[] = [];
    for (let rep = 0; rep < reps; rep++) {
      base.forEach((page, j) => items.push({ page, rep, j }));
    }
    return { items, reps };
  }, [base]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);

    const gap = isMobile ? 0 : width * GAP;
    const cycle = base.length * width + gap;
    const total = cycle * reps;
    const margin = width * 1.5;

    // при наведении на работу движение плавно останавливается
    speed.current = THREE.MathUtils.damp(speed.current, hoveredCard ? 0 : 1, 4, dt);

    offset.current = (offset.current + width * speedFactor * speed.current * dt) % total;

    items.forEach((item, i) => {
      const group = pageRefs.current[i];
      if (!group) return;

      const pos = item.rep * cycle + item.j * width;
      const raw = pos - offset.current + margin;
      group.position.x = (((raw % total) + total) % total) - margin;
    });
  });

  return (
    <>
      {items.map((item, i) => (
        <group
          key={i}
          ref={(el) => {
            pageRefs.current[i] = el;
          }}
        >
          <Page
            pageIndex={i}
            cards={item.page.cards}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
            isMobile={isMobile}
            position={[0, 0, 0]}
          />
        </group>
      ))}
    </>
  );
}

export default function Gallery() {
  return (
    <section className="relative h-[90svh] w-full overflow-hidden">
      <Canvas dpr={[1, 1.5]} style={{ touchAction: 'pan-y' }}>
        <Suspense fallback={null}>
          <Pages />
        </Suspense>
      </Canvas>
    </section>
  );
}