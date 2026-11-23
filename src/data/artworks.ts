import artwork1 from '../assets/images/aphrodite.jpg';
import artwork2 from '../assets/images/hercules-lion.png';
import artwork3 from '../assets/images/poseidon.png';
import artwork4 from '../assets/images/prometheus.png';
import artwork5 from '../assets/images/paris.jpg';


import artwork6 from '../assets/images/statue1.png';
import artwork7 from '../assets/images/clarence.png';
/*import artwork8 from '../assets/images/artwork-8.png';
import artwork9 from '../assets/images/artwork-9.png';
import artwork3 from '../assets/images/artwork-3.png';*/   

export type Artwork = {
  id: number;
  title: string;
  description: string;
  subject: string;
  subjectText: string;
  category: string;
  location: string;
  year: number;
  heroImage: string;
  slug: string;
  keywords: string[];
};

export const artworks: Artwork[] = [
  {
  id: 1,
  title: "Allegory of Abundance",
  description:
    "An elegant marble sculpture depicting a seated female figure surrounded by flowing drapery and an abundant arrangement of fruits and flowers. The intricate carving, graceful posture and richly sculpted folds highlight the timeless beauty of classical craftsmanship and the symbolism of abundance and prosperity.",
  subject: "Allegory",
  subjectText: "Abundance and prosperity",
  category: "Figurative Sculpture",
  location: "Studio Collection",
  year: 2022,
  heroImage: artwork1,
  slug: "allegory-of-abundance",
  keywords: [
    "Marble",
    "Classical Sculpture",
    "Female Figure",
    "Allegory",
    "Abundance",
    "Cornucopia",
    "Fruit",
    "Floral Motifs",
    "Drapery",
    "Figurative Art",
    "Neoclassical Sculpture"
  ]
  },
  {
    id: 2,
    title: "Hercules and the Nemean Lion",
    description: "A powerful marble composition capturing Hercules in a fierce struggle with the Nemean Lion. The dynamic arrangement of intertwined figures, finely carved anatomy and dramatic movement reveal the strength, tension and expressive detail of classical sculpture.",
    subject: "Mythology",
    subjectText: "Greek mythology",
    category: "Figurative Sculpture",
    location: "Studio Collection",
    year: 2025,
    heroImage: artwork2,
    slug: "hercules-and-the-nemean-lion",
    keywords: [
      "Hercules",
      "Nemean Lion",
      "Greek Mythology",
      "Marble",
      "Classical Sculpture",
      "Figurative Art",
      "Mythological Sculpture",
      "Human Anatomy",
      "Dynamic Composition"
  ]
  },
  {
     id: 3,
  title: "Poseidon — God of the Sea",
  description:
    "A commanding marble sculpture depicting Poseidon, the ancient Greek god of the sea, holding his iconic trident. The powerful muscular anatomy, flowing beard and intricately carved drapery convey strength, authority and divine presence. A sea creature at the base reinforces the sculpture's mythological character, while the finely sculpted details celebrate the timeless artistry of classical marble craftsmanship.",
  subject: "Mythology",
  subjectText: "Greek mythology",
  category: "Figurative Sculpture",
  location: "Studio Collection",
  year: 2024,
  heroImage: artwork3,
  slug: "poseidon-god-of-the-sea",
  keywords: [
    "Poseidon",
    "Greek Mythology",
    "God of the Sea",
    "Marble",
    "Classical Sculpture",
    "Mythological Sculpture",
    "Male Figure",
    "Trident",
    "Muscular Anatomy",
    "Drapery",
    "Neoclassical Art"
  ]
  },
  {
      id: 4,
  title: "Prometheus — The Bringer of Fire",
  description:
    "A dramatic marble sculpture depicting Prometheus raising a torch toward the heavens, symbolizing the gift of fire, knowledge and enlightenment. The powerful anatomy, expressive upward gaze and flowing drapery create a sense of movement and defiance. Intricately carved muscles and delicate fabric folds highlight the sculptor's mastery of classical marble craftsmanship.",
  subject: "Mythology",
  subjectText: "Greek mythology",
  category: "Figurative Sculpture",
  location: "Studio Collection",
  year: 2026,
  heroImage: artwork4,
  slug: "prometheus-the-bringer-of-fire",
  keywords: [
    "Prometheus",
    "Greek Mythology",
    "Titan",
    "Fire",
    "Knowledge",
    "Enlightenment",
    "Marble",
    "Classical Sculpture",
    "Mythological Sculpture",
    "Male Figure",
    "Human Anatomy",
    "Drapery",
    "Neoclassical Art"
  ]
  },

  {
    id: 5,
    title: 'Green Hospitality Lounge',
    description:
      'A richly layered mural inspired by organic ornamentation, ceremonial symbolism, and handcrafted mosaic compositions. Intricate flowing patterns, fragmented geometric forms, and tactile circular accents spread across the wall like a contemporary tapestry, creating depth and visual rhythm within the intimate interior. Saturated tones of deep crimson, terracotta, muted teal, and dark espresso interact with warm ambient lighting, giving the space a cinematic and immersive atmosphere. The mural blurs the boundary between decorative surface and architectural installation, transforming the lounge into a sensory experience shaped by texture, shadow, and color. Its dense composition evokes the feeling of discovering hidden symbols within a modern urban sanctuary.',
    subject: 'Lounge',
    subjectText: 'Contemporary Hospitality Lounge',
    category: 'Mosaic',
    heroImage: artwork5,
    location: 'London, UK',
    year: 2026,
    slug: 'crimson-hospitality-lounge',
    keywords: ['Muralism', 'Lounge', 'Hospitality'],
  },

  {
    id: 6,
    title: 'Urban Public Sports Space',
    description:
      'A monumental sports court mural inspired by urban movement, aerial cartography, and abstract camouflage patterns. Bold flowing forms in deep blue, forest green, amber, and burnt orange spread across the playing surface while preserving the crisp white court markings as a structural graphic layer. Illuminated by powerful floodlights and surrounded by the warm glow of the city at night, the composition transforms the court into a cinematic public artwork visible from above. The contrast between the dark urban surroundings and the vibrant painted geometry creates a strong sense of rhythm, scale, and energy. The mural reimagines recreational infrastructure as a contemporary cultural landmark embedded within the city fabric.',
    subject: 'Sports Space',
    subjectText: 'Outdoor Basketball Court',
    category: 'Muralism',
    heroImage: artwork6,
    location: 'Almaty, Kazakhstzn',
    year: 2026,
    slug: 'urban-public-sports-space',
    keywords: ['Muralism', 'Sport Space', 'Public'],
  },
  {
    id: 7,
    title: 'Arcadian Passage',
    description:
      'A vibrant decorative mural inspired by Mediterranean ornamentation, Moorish arches, and handcrafted folk motifs. The composition transforms the interior into an immersive architectural scene where painted geometry, floral symbols, and rhythmic lines interact with soft daylight and layered textiles. Bold yet refined color accents create a playful contrast against the calm neutral backdrop, giving the space a sense of escapism and theatrical elegance. The mural balances symmetry and spontaneity, evoking the atmosphere of a boutique retreat hidden somewhere between southern Europe and North Africa. Every detail is designed to blur the boundary between interior design and painted art.',
    subject: 'Fashion Boutique',
    subjectText: 'Luxury Fashion Boutique Interior',
    category: 'Muralism',
    heroImage: artwork7,
    location: 'Istanbul, Turkey',
    year: 2024,
    slug: 'arcadian-passage',
    keywords: ['Muralism', 'Boutique'],
  },
  {
    id: 8,
    title: 'Chromatic Currents',
    description:
      'A bold contemporary mural composition inspired by urban energy, digital culture, and abstract geometric rhythm. Vibrant gradients, oversized graphic forms, and stylized architectural silhouettes transform the reception space into an immersive visual environment filled with movement and color. The juxtaposition of fluid organic shapes with sharp modular patterns creates a dynamic balance between playfulness and structure. Bright daylight, exposed industrial details, and clean minimalist furnishings allow the artwork to become the central identity of the interior. The mural evokes the atmosphere of a forward-thinking creative hub designed for collaboration, innovation, and interaction.',
    subject: 'Office',
    subjectText: 'Creative Office Lobby',
    category: 'Muralism',
    heroImage: artwork4,
    location: 'New-York, USA',
    year: 2024,
    slug: 'chromatic-currents',
    keywords: ['Muralism', 'Lobby'],
  },
  {
    id: 9,
    title: 'Skyline Currents',
    description:
      'A panoramic architectural mural inspired by flowing waterways, migratory birds, and the shifting colors of open skies. Soft layered forms travel seamlessly across the walls and ceiling, visually extending the height and openness of the atrium while interacting with natural daylight from the surrounding glass facade. Warm earth tones, muted blues, and pale sand colors create a calm atmospheric rhythm that changes throughout the day as sunlight moves through the space. The mural combines graphic symbolism with fluid painterly transitions, transforming the interior into an immersive spatial landscape rather than a conventional decorative surface. Its scale and continuity create a strong connection between architecture, movement, and the surrounding urban environment.',
    subject: 'Cultural Space',
    subjectText: 'Public Cultural Hospitality Space',
    category: 'Muralism',
    heroImage: artwork5,
    location: 'Los-Angeles, USA',
    year: 2024,
    slug: 'skyline-currents',
    keywords: ['Muralism', 'Hospitality'],
  },
  {
    id: 10,
    title: 'Silent Canopy',
    description:
      'A large-scale mural inspired by tropical landscapes and delicate ink illustration. The composition combines monochrome botanical forms with softly colored birds, creating a calm rhythm across the architectural space. Natural light enhances the contrast between the expressive black brushwork and the restrained palette of warm neutrals, soft greens, and muted coral tones. The artwork was designed to integrate with the interior rather than dominate it, bringing a sense of quiet immersion and organic movement into the room. The mural transforms the dining area into a spatial experience where art, nature, and hospitality merge into a cohesive atmosphere.',
    subject: 'Hospitality',
    subjectText: 'Hospitality interior',
    category: 'Mixed Media',
    heroImage: artwork6,
    location: 'London, UK',
    year: 2024,
    slug: 'silent-canopy',
    keywords: ['Hospitality'],
  },
  {
    id: 11,
    title: 'Mediterranean Reverie',
    description:
      'A monumental wall mural inspired by Mediterranean mythology, artisanal ornamentation, and contemporary naïve illustration. The interior combines warm wood textures, soft natural light, and earthy materials to create an intimate yet refined atmosphere. Flowing lines and symbolic figures form a cohesive visual narrative where art and architecture merge into a single spatial experience. The palette of ochre, terracotta, olive, and deep burgundy enhances the warmth of the space while giving the mural a timeless character. The composition evokes a sense of calm, storytelling, and understated theatricality.',
    subject: 'Café',
    subjectText: 'Café Interior',
    category: 'Fresco-inspired Acrylics',
    heroImage: artwork2,
    location: 'Paris, France',
    year: 2026,
    slug: 'mediterranean-reverie',
    keywords: ['Fresco', 'Café'],
  },
];
