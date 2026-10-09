import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { useLang, useContact } from "../context/LanguageContext";
import { IMAGES } from "../content";

const CAT_STYLES = {
  STRATEGY: "bg-brand-green text-navy-950",
  "COMPANY NEWS": "bg-sky-500 text-white",
  "BERITA PERUSAHAAN": "bg-sky-500 text-white",
  TECHNOLOGY: "bg-purple-500 text-white",
  TEKNOLOGI: "bg-purple-500 text-white",
  STRATEGI: "bg-brand-green text-navy-950",
};

export default function Insights() {
  const { t } = useLang();
  const { openContact } = useContact();
  const f = t.insights.featured;
  return (
    <section id="insights" data-testid="insights-section" className="bg-white py-24 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <Reveal>
            <Eyebrow tone="green">{t.insights.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-[44px] leading-[1.1]">
              {t.insights.title1}
              <br />
              <span className="text-brand-green">{t.insights.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:max-w-sm">
            <p className="text-[15px] leading-relaxed text-slate-600">{t.insights.body}</p>
            <button
              data-testid="insights-view-all-btn"
              onClick={openContact}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-navy-950 text-white text-sm font-semibold px-7 py-3.5 transition-all duration-300 hover:bg-navy-800 hover:shadow-xl"
            >
              {t.insights.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-7">
            <button
              data-testid="insight-featured-card"
              onClick={openContact}
              className="group relative block w-full text-left rounded-3xl overflow-hidden h-[380px] lg:h-[440px] border border-slate-200"
            >
              <img
                src={IMAGES.insights[0]}
                alt={f.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-7 lg:p-9">
                <span className={`inline-block rounded-full px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.18em] ${CAT_STYLES[f.cat] || "bg-brand-green text-navy-950"}`}>
                  {f.cat}
                </span>
                <h3 className="mt-4 font-display font-bold text-white text-2xl lg:text-[28px] leading-snug max-w-lg">
                  {f.title}
                </h3>
                <div className="mt-3 font-mono text-[11px] tracking-[0.15em] text-slate-300 uppercase">
                  {f.date} · {f.read}
                </div>
              </div>
            </button>
          </Reveal>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {t.insights.articles.map((a, i) => (
              <Reveal key={a.title} delay={0.1 + i * 0.08} className="flex-1">
                <button
                  data-testid={`insight-card-${i}`}
                  onClick={openContact}
                  className="group flex gap-5 w-full text-left rounded-3xl border border-slate-200 bg-white p-4 hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all duration-500 h-full"
                >
                  <img
                    src={IMAGES.insights[i + 1]}
                    alt={a.title}
                    className="w-32 h-28 sm:w-40 sm:h-32 rounded-2xl object-cover shrink-0"
                  />
                  <div className="flex flex-col justify-center min-w-0 py-1">
                    <span className={`self-start rounded-full px-3 py-1 font-mono text-[9px] font-bold tracking-[0.18em] ${CAT_STYLES[a.cat] || "bg-sky-500 text-white"}`}>
                      {a.cat}
                    </span>
                    <h3 className="mt-2.5 font-display font-bold text-ink text-[16px] leading-snug group-hover:text-brand-green transition-colors duration-300">
                      {a.title}
                    </h3>
                    <div className="mt-2 font-mono text-[10.5px] tracking-[0.12em] text-slate-500 uppercase">
                      {a.date} · {a.read}
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
