import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DURATION = 6500;

export const HERO_SLIDES = [
  { src: "/hero/slide-1.webp", alt: "Coastal city skyline at sunset with expressway", pos: "object-[68%_center] lg:object-center" },
  { src: "/hero/slide-2.webp", alt: "Telecom tower overlooking a harbour city at sunset", pos: "object-[86%_center] lg:object-[60%_center]" },
  { src: "/hero/slide-3.webp", alt: "Artamedia crew laying fiber cable in a mountain village", pos: "object-[74%_center] lg:object-[60%_center]" },
  { src: "/hero/slide-4.webp", alt: "Submarine cable landing operation at sunset", pos: "object-[40%_center] lg:object-center" },
  { src: "/hero/slide-5.webp", alt: "Fiber-connected data center aisle", pos: "object-[62%_center] lg:object-center" },
];

const ENTER = [
  { initial: { opacity: 0, scale: 1.15, filter: "blur(10px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" } },
  { initial: { clipPath: "inset(0% 0% 0% 100%)" }, animate: { clipPath: "inset(0% 0% 0% 0%)" } },
  { initial: { opacity: 0, scale: 1.22, x: "4%" }, animate: { opacity: 1, scale: 1, x: "0%" } },
  { initial: { clipPath: "circle(0% at 78% 50%)" }, animate: { clipPath: "circle(150% at 78% 50%)" } },
  { initial: { opacity: 0, y: "5%", scale: 1.1 }, animate: { opacity: 1, y: "0%", scale: 1 } },
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
  const fx = ENTER[index % ENTER.length];
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={index}
        data-testid={`hero-slide-${index}`}
        className="absolute inset-0"
        initial={{ ...fx.initial, zIndex: 2 }}
        animate={{ ...fx.animate, zIndex: 2, transition: { duration: 1.4, ease: [0.65, 0, 0.35, 1] } }}
        exit={{ opacity: 0, zIndex: 1, transition: { duration: 0.6, delay: 1.2 } }}
      >
        <motion.img
          src={slide.src}
          alt={slide.alt}
          className={`w-full h-full object-cover ${slide.pos}`}
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: DURATION / 1000 + 2, ease: "linear" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export function HeroSlideNav({ index, setIndex, paused }) {
  return (
    <div data-testid="hero-slider-nav" className="flex items-center gap-4">
      <span data-testid="hero-slide-counter" className="font-display text-[13px] font-bold tracking-[0.2em] text-white tabular-nums">
        {String(index + 1).padStart(2, "0")}
        <span className="text-white/45"> / {String(HERO_SLIDES.length).padStart(2, "0")}</span>
      </span>
      <div className="flex items-center gap-2">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.src}
            data-testid={`hero-slide-dot-${i}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`relative h-[3px] rounded-full overflow-hidden bg-white/25 transition-[width] duration-500 ${i === index ? "w-14" : "w-7 hover:bg-white/50"}`}
          >
            {i === index && (
              <motion.span
                key={`${index}-${paused}`}
                className="absolute inset-y-0 left-0 bg-brand-green2"
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
