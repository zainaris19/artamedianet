// Asset map: set a path to fill an empty slot (null = labeled empty slot).
export const DN_ASSETS = {
  hero: { id: "DN-HERO", src: "/dedicated/hero.png", alt: "City skyline with the Artamedia building at twilight" },
  overview: { id: "DN-OVERVIEW", src: "/dedicated/technician.png", alt: "Artamedia technician wiring a server rack" },
  solutions: { id: "DN-SOLUTIONS", src: "/dedicated/solutions.webp" },
  map: { id: "DN-MAP", src: "/dedicated/map.png", alt: "Artamedia network map across Indonesia", label: "Indonesia network map" },
  industries: { id: "DN-INDUSTRIES", src: "/dedicated/meeting.png", alt: "Executives meeting in front of a city skyline" },
  noc: { id: "DN-NOC", src: "/dedicated/noc.png", alt: "Artamedia Network Operations Centre", label: "Artamedia NOC" },
};

// Photo regions inside the user's composite solution-cards image (2000x667).
export const SOLUTION_SPRITE = { width: 2000, height: 667, w: 472, h: 320, y: 80, x: [21, 517, 1009, 1512] };
