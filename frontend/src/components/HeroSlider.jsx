import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DURATION = 6000;

export const HERO_SLIDES = [
  { src: "/hero/slide-1.webp", alt: "Coastal city skyline at sunset with expressway" },
  { src: "/hero/slide-2.webp", alt: "Telecom tower overlooking a harbour city at sunset" },
  { src: "/hero/slide-3.webp", alt: "Artamedia crew laying fiber cable in a mountain village" },
  { src: "/hero/slide-4.webp", alt: "Submarine cable landing operation at sunset" },
  { src: "/hero/slide-5.webp", alt: "Fiber-connected data center aisle" },
];

export function useHeroSlider(count) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), DURATION);
    return () => clearTimeout(id);
  }, [index, paused, count]);

  useEffect(() => {
    HERO_SLIDES.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return { index, setIndex, paused };
}

export function HeroSlides({ index }) {
  const slide = HERO_SLIDES[index];
  return (
    <AnimatePresence initial={false}>
      <motion.img
        key={index}
        data-testid={`hero-slide-${index}`}
        src={slide.src}
        alt={slide.alt}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
}

export function HeroSlideNav({ index, setIndex, paused }) {
  return (
    <div data-testid="hero-slider-nav" className="flex items-center gap-4">
      <span data-testid="hero-slide-counter" className="font-jakarta text-[13px] font-bold tracking-[0.2em] text-bb-navy tabular-nums">
        {String(index + 1).padStart(2, "0")}
        <span className="text-slate-400"> / {String(HERO_SLIDES.length).padStart(2, "0")}</span>
      </span>
      <div className="flex items-center gap-2">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.src}
            data-testid={`hero-slide-dot-${i}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`relative h-[3px] rounded-full overflow-hidden bg-slate-300 transition-[width] duration-500 ${i === index ? "w-14" : "w-7 hover:bg-slate-400"}`}
          >
            {i === index && (
              <motion.span
                key={`${index}-${paused}`}
                className="absolute inset-y-0 left-0 bg-bb-blue"
                initial={{ width: "0%" }}
                animate={{ width: paused ? "0%" : "100%" }}
                transition={{ duration: DURATION / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
