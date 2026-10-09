import { ChevronRight, ArrowRight, Zap, Shield, Layers, Settings, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { useLang, useContact, scrollToSection } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnImage } from "../dedicated/ui";
import { DF_ASSETS } from "./assets";

export const SERVICE = "Dark Fiber";

export function DfButton({ label, testId, className = "", variant = "solid" }) {
  const { openContact } = useContact();
  const styles = {
    solid: "bg-bb-blue hover:bg-[#0F55D6] text-white shadow-[0_10px_24px_-10px_rgba(20,99,243,0.7)]",
    outline: "border-[1.5px] border-bb-blue/70 text-bb-navy bg-white hover:bg-bb-sky",
    white: "bg-white text-bb-navy hover:bg-bb-sky",
  };
  return (
    <button
      data-testid={testId}
      onClick={() => openContact(SERVICE)}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md px-6 py-3.5 text-[14px] font-bold transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {label}
      {variant === "solid" && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
}

export function DfTitle({ children, dark = false, className = "" }) {
  return (
    <h2 className={`mt-4 font-extrabold tracking-[-0.02em] text-[30px] lg:text-[38px] leading-[1.15] ${dark ? "text-white" : "text-bb-navy"} ${className}`}>
      {children}
    </h2>
  );
}

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" data-testid="df-breadcrumb" className="flex items-center gap-2 text-[12.5px] font-medium text-slate-500">
      <Link to="/" data-testid="df-breadcrumb-home" className="hover:text-bb-blue transition-colors">{items[0]}</Link>
      <ChevronRight className="w-3.5 h-3.5" />
      <button data-testid="df-breadcrumb-services" onClick={() => scrollToSection("#services")} className="hover:text-bb-blue transition-colors">
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
      <DnImage asset={DF_ASSETS.hero} className="w-full h-full" imgClass="object-[70%_center]" />
      <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.9)_12%,rgba(255,255,255,0.4)_30%,rgba(255,255,255,0)_50%)]" />
    </div>
  );
}

export function DfHero() {
  const { t } = useLang();
  const h = t.darkFiber.hero;
  return (
    <section data-testid="df-hero" className="relative bg-white pt-[76px] overflow-hidden">
      <HeroImage className="hidden lg:block absolute top-[76px] bottom-0 right-0 w-[60%]" />
      <div className={`${WRAP} relative lg:min-h-[530px] pt-8 pb-12 lg:pb-16`}>
        <Breadcrumb items={t.darkFiber.breadcrumb} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-12 lg:mt-14 max-w-[680px]">
          <BbEyebrow>{h.eyebrow}</BbEyebrow>
          <h1 data-testid="df-hero-title" className="mt-4 font-extrabold tracking-[-0.02em] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[52px] text-bb-navy">
            <span className="block">{h.title1}</span>
            <span className="block text-bb-blue">{h.title2}</span>
          </h1>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-bb-text max-w-[460px]">{h.body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <DfButton label={h.quote} testId="df-hero-quote-btn" />
            <DfButton label={h.team} testId="df-hero-team-btn" variant="outline" />
          </div>
        </motion.div>
      </div>
      <HeroImage className="lg:hidden relative aspect-[16/10]" />
    </section>
  );
}

const HIGHLIGHT_ICONS = [Zap, Shield, Layers, Settings];

export function DfHighlights() {
  const { t } = useLang();
  return (
    <section data-testid="df-highlights" className="bg-white relative z-10">
      <div className={`${WRAP} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8`}>
        {t.darkFiber.highlights.map(([title, body], i) => {
          const Icon = HIGHLIGHT_ICONS[i];
          const green = i % 2 === 1;
          return (
            <div key={title} data-testid={`df-highlight-${i}`} className="flex items-start gap-4 py-8">
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

const ABOUT_ICONS = [Building2, Layers, Settings];

export function DfAbout() {
  const { t } = useLang();
  const a = t.darkFiber.about;
  return (
    <section data-testid="df-about" className="bg-[#F4F7FC] grid lg:grid-cols-2 items-stretch">
      <Reveal className="lg:pr-6">
        <DnImage asset={DF_ASSETS.about} className="h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px] lg:rounded-r-[18px] overflow-hidden" />
      </Reveal>
      <Reveal delay={0.1} className="px-6 sm:px-10 lg:pl-10 lg:pr-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] py-14 lg:py-16 flex flex-col justify-center">
        <BbEyebrow>{a.eyebrow}</BbEyebrow>
        <DfTitle>
          {a.title1}
          <br />
          {a.title2}
        </DfTitle>
        <p className="mt-5 text-[15px] leading-[1.75] text-bb-text">{a.body}</p>
        <div className="mt-9 grid sm:grid-cols-3 gap-7">
          {a.items.map(([title, body], i) => {
            const Icon = ABOUT_ICONS[i];
            return (
              <div key={title} data-testid={`df-about-item-${i}`}>
                <Icon className="w-9 h-9 text-bb-blue" strokeWidth={1.6} />
                <h3 className="mt-4 text-[14.5px] font-bold text-bb-navy">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-bb-text">{body}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
