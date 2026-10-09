import { ArrowRight, MonitorPlay, Gauge, Siren, Eye } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { LogoMark } from "./Logo";
import { useLang, useContact } from "../context/LanguageContext";
import { IMAGES } from "../content";

const CHIP_ICONS = [MonitorPlay, Gauge, Siren, Eye];

export default function NocSection() {
  const { t } = useLang();
  const { openContact } = useContact();
  return (
    <section id="noc" data-testid="noc-section" className="bg-navy-900 py-24 lg:py-28 grain">
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={IMAGES.noc}
                alt="Artamedia Network Operations Center"
                className="w-full h-[380px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/20" />
            </div>
            <div className="absolute top-5 left-5 flex items-center gap-2.5 rounded-full bg-navy-950/80 backdrop-blur-xl border border-white/15 px-4 py-2">
              <LogoMark className="w-7 h-6" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-white/80 uppercase">
                {t.noc.eyebrow.split(" ")[0]}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-red-400">{t.noc.live}</span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow tone="sky">{t.noc.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold tracking-tight text-white text-4xl lg:text-5xl leading-[1.08]">
              {t.noc.title1}
              <br />
              <span className="text-brand-green2 drop-shadow-[0_0_28px_rgba(16,185,129,0.35)]">{t.noc.title2}</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-400 max-w-md">{t.noc.body}</p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.noc.chips.map((chip, i) => {
              const Icon = CHIP_ICONS[i];
              return (
                <Reveal key={chip} delay={i * 0.07}>
                  <div
                    data-testid={`noc-chip-${i}`}
                    className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-brand-green/40 hover:bg-brand-green/5 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-brand-green2 shrink-0" strokeWidth={1.7} />
                    <span className="font-display font-semibold text-white text-[14px]">{chip}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <button
              data-testid="noc-explore-btn"
              onClick={openContact}
              className="group mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/30 hover:border-brand-green2 text-white text-sm font-semibold px-7 py-3.5 transition-all duration-300 hover:bg-brand-green/10"
            >
              {t.noc.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
