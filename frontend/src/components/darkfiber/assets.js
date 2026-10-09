// Asset map: set a path to fill an empty slot (null = labeled empty slot).
export const DF_ASSETS = {
  hero: { id: "DF-HERO", src: "/darkfiber/hero.png", alt: "Artamedia field engineer beside a fiber cable drum", label: "Fiber cable drum & engineer" },
  about: { id: "DF-ABOUT", src: "/darkfiber/about.png", alt: "City skyline with expressway at sunset", label: "City skyline" },
  benefits: { id: "DF-BENEFITS", src: "/darkfiber/trench.png", alt: "Underground fiber duct installation", label: "Underground fiber installation" },
  map: { id: "DF-MAP", src: null, alt: "Dark fiber network map of Indonesia", label: "Indonesia network map" },
  useCasesSprite: "/darkfiber/usecases.webp",
  specs: { id: "DF-PANEL", src: null, alt: "Fiber patch panel", label: "Fiber patch panel" },
  cta: { id: "DF-CTA", src: null, alt: "Panoramic city skyline", label: "Panoramic city skyline" },
};

// Photo regions inside the user's use-case composite image (2000x668).
export const USECASE_SPRITE = { width: 2000, height: 668, w: 372, h: 232, y: 146, x: [15, 416, 816, 1217, 1616] };
