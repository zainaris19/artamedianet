import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { HeroSlides, HeroSlideNav, useHeroSlider, HERO_SLIDES } from "./HeroSlider";

const line = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.14 },
  }),
};

function HeroCopy({ slider }) {
  const { t } = useLang();
  return (
    <div className="max-w-[640px]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex items-center gap-3"
      >
        <span className="h-[2px] w-7 bg-bb-green" />
        <span className="text-[11.5px] lg:text-[12px] font-bold tracking-[0.22em] text-bb-navy">{t.hero.eyebrow}</span>
      </motion.div>
      <h1
        data-testid="hero-title"
        className="mt-4 font-jakarta font-extrabold tracking-[-0.02em] text-bb-navy text-[36px] leading-[1.08] sm:text-[48px] lg:text-[58px] 2xl:text-[clamp(52px,3.6vw,72px)]"
      >
        <span className="block overflow-hidden pb-1">
          <motion.span className="block" variants={line} custom={0} initial="hidden" animate="show">
            {t.hero.title1}
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-2">
          <motion.span className="block text-bb-blue" variants={line} custom={1} initial="hidden" animate="show">
            {t.hero.title2}
          </motion.span>
        </span>
      </h1>
      <motion.p
        data-testid="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.75 }}
        className="mt-4 max-w-[540px] font-jakarta text-[16px] 2xl:text-[17px] leading-[1.7] text-bb-text"
      >
        {t.hero.sub}
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1.1 }} className="mt-8 2xl:mt-10">
        <HeroSlideNav {...slider} />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const slider = useHeroSlider(HERO_SLIDES.length);
  return (
    <section id="home" data-testid="hero-section" className="relative bg-[#F7FAFE] pt-[72px]">
      <div data-testid="hero-media" className="relative w-full aspect-[2000/646] overflow-hidden">
        <HeroSlides index={slider.index} />
        <div className="absolute inset-0 hidden 2xl:block bg-[linear-gradient(90deg,#F7FAFE_0%,rgba(247,250,254,0.92)_22%,rgba(247,250,254,0.55)_40%,rgba(247,250,254,0)_58%)]" />
        <div className="absolute inset-0 hidden 2xl:flex">
          <div className="max-w-[1320px] w-full mx-auto px-8 flex flex-col justify-center">
            <HeroCopy slider={slider} />
          </div>
        </div>
      </div>
      <div className="2xl:hidden max-w-[1320px] w-full mx-auto px-5 lg:px-8 pt-10 pb-14">
        <HeroCopy slider={slider} />
      </div>
    </section>
  );
}
