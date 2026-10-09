import { ChevronRight, Zap, Shield, Waypoints, Headset } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang, scrollToSection } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnButton, DnImage } from "./ui";
import { DN_ASSETS } from "./assets";

const ICONS = [Zap, Shield, Waypoints, Headset];

function Breadcrumb({ items }) {
  return (
    <nav data-testid="dn-breadcrumb" className="flex items-center gap-2 text-[12.5px] font-medium text-slate-500">
      <Link to="/" data-testid="dn-breadcrumb-home" className="hover:text-bb-blue transition-colors">{items[0]}</Link>
      <ChevronRight className="w-3.5 h-3.5" />
      <button data-testid="dn-breadcrumb-services" onClick={() => scrollToSection("#services")} className="hover:text-bb-blue transition-colors">
        {items[1]}
      </button>
      <ChevronRight className="w-3.5 h-3.5" />
      <span className="text-bb-blue font-semibold">{items[2]}</span>
    </nav>
  );
}

function HeroImage({ className }) {
  return (
    <div className={className}>
      <DnImage asset={DN_ASSETS.hero} className="w-full h-full" imgClass="object-[center_60%]" />
      <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.9)_14%,rgba(255,255,255,0.4)_32%,rgba(255,255,255,0)_52%)]" />
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/70 to-transparent" />
    </div>
  );
}

export function DnHero() {
  const { t } = useLang();
  const h = t.dedicated.hero;
  return (
    <section data-testid="dn-hero" className="relative bg-white pt-[76px] overflow-hidden">
      <HeroImage className="hidden lg:block absolute top-[76px] bottom-0 right-0 w-[66%]" />
      <div className={`${WRAP} relative lg:min-h-[530px] pt-8 pb-12 lg:pb-16`}>
        <Breadcrumb items={t.dedicated.breadcrumb} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-12 lg:mt-14 max-w-[640px]">
          <BbEyebrow>{h.eyebrow}</BbEyebrow>
          <h1 data-testid="dn-hero-title" className="mt-4 font-extrabold tracking-[-0.02em] leading-[1.1] text-[36px] sm:text-[44px] lg:text-[52px] text-bb-navy">
            <span className="block">{h.title1}</span>
            <span className="block">
              {h.title2a}
              <span className="text-bb-blue">{h.title2b}</span>
            </span>
          </h1>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-bb-text max-w-[470px]">{h.body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <DnButton label={h.quote} testId="dn-hero-quote-btn" />
            <DnButton label={h.team} testId="dn-hero-team-btn" variant="outline" />
          </div>
        </motion.div>
      </div>
      <HeroImage className="lg:hidden relative aspect-[16/10]" />
    </section>
  );
}

export function DnHighlights() {
  const { t } = useLang();
  return (
    <section data-testid="dn-highlights" className="bg-white border-b border-slate-100 relative z-10">
      <div className={`${WRAP} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}>
        {t.dedicated.highlights.map(([title, body], i) => {
          const Icon = ICONS[i];
          const green = i % 2 === 1;
          return (
            <div key={title} data-testid={`dn-highlight-${i}`} className={`flex items-start gap-4 py-8 lg:px-7 ${i ? "lg:border-l border-slate-200/70" : "lg:pl-0"}`}>
              <span className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${green ? "bg-bb-mint text-bb-green" : "bg-bb-sky text-bb-blue"}`}>
                <Icon className="w-6 h-6" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-[15.5px] font-bold text-bb-navy">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-bb-text">{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
