// Asset map: set a path to fill an empty slot (null = labeled empty slot).
export const ME_ASSETS = {
  hero: { id: "ME-HERO", src: "/metro/hero.png", alt: "City skyline with an elevated highway at twilight", label: "Hero city skyline" },
  overview: { id: "ME-OVERVIEW", src: "/metro/overview.png", alt: "Modern office district with walkway at golden hour", label: "Office district" },
  diagram: { id: "ME-DIAGRAM", src: "/metro/diagram.webp", label: "Network diagram" },
  map: { id: "ME-MAP", src: null, alt: "Metro Ethernet network map of Indonesia", label: "Indonesia network map" },
  topology: { id: "ME-TOPOLOGY", src: "/metro/topology.webp", label: "Topology diagrams" },
  industries: [
    { id: "ME-IND-1", src: null, alt: "Enterprise", label: "Enterprise" },
    { id: "ME-IND-2", src: null, alt: "Data Center", label: "Data Center" },
    { id: "ME-IND-3", src: null, alt: "Financial Services", label: "Financial Services" },
    { id: "ME-IND-4", src: null, alt: "Education", label: "Education" },
    { id: "ME-IND-5", src: null, alt: "Healthcare", label: "Healthcare" },
    { id: "ME-IND-6", src: null, alt: "Retail", label: "Retail" },
  ],
  why: { id: "ME-WHY", src: null, alt: "Data center corridor", label: "Data center corridor" },
  story: { id: "ME-STORY", src: null, alt: "Customer", label: "Customer photo" },
  cta: { id: "ME-CTA", src: null, alt: "Panoramic city skyline", label: "Panoramic city skyline" },
};

// Diagram regions inside the user's topology composite image (2000x667).
export const TOPOLOGY_SPRITE = { width: 2000, height: 667, w: 626, h: 314, y: 112, x: [26, 688, 1351] };
