import { ChevronRight, Gauge, ShieldCheck, Globe2, Headset } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang, scrollToSection } from "../../context/LanguageContext";
import { WRAP, BbEyebrow, QuoteButton } from "./ui";

const ICONS = [Gauge, ShieldCheck, Globe2, Headset];

function Breadcrumb({ items }) {
  return (
    <nav data-testid="bb-breadcrumb" className="flex items-center gap-2 text-[12.5px] font-medium text-slate-500">
      <Link to="/" data-testid="bb-breadcrumb-home" className="hover:text-bb-blue transition-colors">{items[0]}</Link>
      <ChevronRight className="w-3.5 h-3.5" />
      <button data-testid="bb-breadcrumb-services" onClick={() => scrollToSection("#services")} className="hover:text-bb-blue transition-colors">
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
      <img src="/broadband/hero.png" alt="Business professional working on a laptop" className="w-full h-full object-cover object-[62%_center]" />
      <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.92)_12%,rgba(255,255,255,0.45)_30%,rgba(255,255,255,0)_50%)]" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

export function BbHero() {
  const { t } = useLang();
  const h = t.broadband.hero;
  return (
    <section data-testid="bb-hero" className="relative bg-white pt-[76px] overflow-hidden">
      <HeroImage className="hidden lg:block absolute top-[76px] bottom-0 right-0 w-[63%]" />
      <div className={`${WRAP} relative lg:min-h-[530px] pt-8 pb-12 lg:pb-16`}>
        <Breadcrumb items={t.broadband.breadcrumb} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-12 lg:mt-14 max-w-[660px]">
          <BbEyebrow>{h.eyebrow}</BbEyebrow>
          <h1 data-testid="bb-hero-title" className="mt-4 font-extrabold tracking-[-0.02em] leading-[1.08] text-[38px] sm:text-[46px] lg:text-[54px]">
            <span className="block text-bb-navy lg:whitespace-nowrap">{h.title1}</span>
            <span className="block text-bb-blue">{h.title2}</span>
          </h1>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-bb-text max-w-[470px]">{h.body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <QuoteButton label={h.quote} testId="bb-hero-quote-btn" />
            <QuoteButton label={h.brochure} testId="bb-hero-brochure-btn" variant="outline" />
          </div>
        </motion.div>
      </div>
      <HeroImage className="lg:hidden relative aspect-[16/10]" />
    </section>
  );
}

export function BbHighlights() {
  const { t } = useLang();
  return (
    <section data-testid="bb-highlights" className="bg-white border-b border-slate-100 shadow-[0_18px_40px_-30px_rgba(11,29,69,0.25)] relative z-10">
      <div className={`${WRAP} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}>
        {t.broadband.highlights.map(([title, body], i) => {
          const Icon = ICONS[i];
          const green = i % 2 === 1;
          return (
            <div key={title} data-testid={`bb-highlight-${i}`} className={`flex items-start gap-4 py-7 lg:px-7 ${i ? "lg:border-l border-slate-200/70" : "lg:pl-0"}`}>
              <span className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${green ? "bg-bb-mint text-bb-green" : "bg-bb-sky text-bb-blue"}`}>
                <Icon className="w-6 h-6" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-[15.5px] font-bold text-bb-navy">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-bb-text">{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
