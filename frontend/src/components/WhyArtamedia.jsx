import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang, useContact } from "../context/LanguageContext";

const WHY_IMAGES = ["/why-01.jpg", "/why-02.jpg", "/why-03.jpg", "/why-04.jpg", "/why-05.jpg", "/why-06.jpg"];

export default function WhyArtamedia() {
  const { t } = useLang();
  const { openContact } = useContact();
  return (
    <section data-testid="why-section" className="bg-white border-t border-slate-300 py-20">
      <div className="max-w-[1600px] mx-auto px-[5%] grid xl:grid-cols-[0.32fr_0.68fr] gap-10 lg:gap-12 items-center">
        <Reveal className="min-w-0">
          <div className="flex items-start gap-2.5">
            <span className="h-px w-7 bg-brand-green mt-[6px] shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-ink uppercase leading-[1.55]">
              {t.why.eyebrow.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </span>
          </div>
          <h2 className="mt-6 font-display font-extrabold tracking-tight text-ink text-[34px] lg:text-[42px] leading-[1.12] uppercase">
            {t.why.title[0]}
            <br />
            <span className="text-[#1B72E8]">{t.why.title[1]}</span>
          </h2>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-slate-500">{t.why.body}</p>
          <button
            data-testid="why-cta-btn"
            onClick={openContact}
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-green hover:bg-brand-green2 text-navy-950 text-sm font-bold px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,166,81,0.4)]"
          >
            {t.nav.cta}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="min-w-0 grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {t.why.cards.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div
                data-testid={`why-card-${String(i + 1).padStart(2, "0")}`}
                className="group rounded-lg overflow-hidden border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.10)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <img
                  src={WHY_IMAGES[i]}
                  alt={title}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
