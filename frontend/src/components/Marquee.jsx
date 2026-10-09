import { useLang } from "../context/LanguageContext";

const DOTS = ["bg-brand-blue", "bg-brand-green", "bg-brand-red", "bg-brand-yellow"];

export default function Marquee() {
  const { t } = useLang();
  const items = t.marquee;
  return (
    <div className="relative bg-navy-900 border-y border-white/10 py-5 overflow-hidden" data-testid="marquee-band">
      <div className="marquee-track flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <div key={`${copy}-${i}`} className="flex items-center shrink-0">
                <span className="font-mono text-[12px] md:text-[13px] font-medium tracking-[0.3em] uppercase text-slate-400 px-8">
                  {item}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${DOTS[i % DOTS.length]}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
