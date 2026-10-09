import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, Cog, ShieldCheck, Globe2, Compass } from "lucide-react";
import { useLang, useContact, scrollToSection } from "../context/LanguageContext";
import { IMAGES } from "../content";

const STATS_ICONS = [Cog, ShieldCheck, Globe2, Compass];

const line = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.14 },
  }),
};

export default function Hero() {
  const { t } = useLang();
  const { openContact } = useContact();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);

  return (
    <section ref={ref} id="home" data-testid="hero-section" className="relative min-h-screen flex flex-col overflow-hidden bg-navy-950 grain">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Artamedia skyline at blue hour with highway light trails"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/35 to-transparent" />
      <div className="absolute inset-0 bg-navy-950/45 lg:hidden" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-navy-950/15" />

      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 lg:px-8 flex-1 flex flex-col justify-center pt-40 pb-14">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[12px] lg:text-[13px] font-semibold tracking-[0.22em] text-white/90"
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1
          data-testid="hero-title"
          className="mt-4 font-display font-extrabold tracking-tight text-white text-[40px] leading-[1.03] sm:text-[56px] lg:text-[68px] xl:text-[80px] [filter:drop-shadow(0_6px_30px_rgba(6,11,24,0.6))]"
        >
          <span className="block overflow-hidden pb-1">
            <motion.span className="block" variants={line} custom={0} initial="hidden" animate="show">
              {t.hero.title1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span className="block text-brand-green2" variants={line} custom={1} initial="hidden" animate="show">
              {t.hero.title2}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-6 max-w-[560px] text-base lg:text-lg leading-relaxed text-slate-200/90"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-explore-btn"
            onClick={() => scrollToSection("#network")}
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand-green hover:bg-brand-green2 text-navy-950 text-[15px] font-semibold px-8 py-4 transition-all duration-300 hover:shadow-[0_0_36px_rgba(0,166,81,0.5)]"
          >
            {t.hero.cta1}
            <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            data-testid="hero-consult-btn"
            onClick={openContact}
            className="inline-flex items-center rounded-full border border-white/70 hover:border-white text-white text-[15px] font-semibold px-9 py-4 transition-all duration-300 hover:bg-white/10"
          >
            {t.hero.cta2}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0 }}
        className="relative z-10 border-t border-white/10 bg-navy-950/55 backdrop-blur-md"
        data-testid="hero-feature-bar"
      >
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-5">
          {t.hero.stats.map(([a, b], i) => {
            const Icon = STATS_ICONS[i];
            return (
              <div
                key={b}
                data-testid={`hero-stat-${i}`}
                className={`flex items-center gap-4 py-5 lg:py-6 px-4 lg:px-0 lg:pl-6 lg:first:pl-0 lg:pr-6 ${
                  i % 2 !== 0 ? "border-l border-white/10" : ""
                } ${i > 1 ? "max-lg:border-t max-lg:border-white/10" : ""} lg:border-l lg:border-white/10 lg:first:border-l-0`}
              >
                <Icon className="w-10 h-10 text-brand-green2 shrink-0" strokeWidth={1.3} />
                <div className="font-display text-[15px] leading-snug text-white">
                  <span className="block font-bold">{a}</span>
                  <span className="block text-slate-300 font-medium">{b}</span>
                </div>
              </div>
            );
          })}
          <div className="hidden lg:flex items-center gap-3 pl-10 border-l border-white/10">
            <span className="font-display font-bold text-[13px] tracking-[0.28em] text-white">{t.hero.scroll}</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-white" strokeWidth={2} />
            </motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
