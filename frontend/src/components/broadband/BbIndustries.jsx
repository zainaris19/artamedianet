import { Hotel, ShoppingCart, Building2, GraduationCap, CirclePlus, Factory, ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang, useContact } from "../../context/LanguageContext";
import { WRAP, BbEyebrow, SERVICE } from "./ui";

const ICONS = [Hotel, ShoppingCart, Building2, GraduationCap, CirclePlus, Factory];
// Photo regions inside the uploaded composite (2000x667); displayed via CSS, file untouched
const X0 = [19, 349, 680, 1009, 1339, 1669];
const CW = 314, CH = 234, IW = 2000, IH = 667, Y0 = 80;

const spriteStyle = (i) => ({
  backgroundImage: "url(/broadband/industries.webp)",
  backgroundSize: `${(IW / CW) * 100}% auto`,
  backgroundPosition: `${(X0[i] / (IW - CW)) * 100}% ${(Y0 / (IH - CH)) * 100}%`,
  aspectRatio: `${CW} / ${CH}`,
});

export default function BbIndustries() {
  const { t } = useLang();
  const { openContact } = useContact();
  const d = t.broadband.industries;
  return (
    <section data-testid="bb-industries" className="bg-white py-16 lg:py-20">
      <div className={WRAP}>
        <Reveal>
          <BbEyebrow>{d.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-bb-navy text-[32px] lg:text-[40px] leading-tight">{d.title}</h2>
          <p className="mt-3 text-[15px] text-bb-text">{d.body}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {d.cards.map(([title, body], i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div data-testid={`bb-industry-card-${i}`} className="group h-full flex flex-col rounded-xl bg-white border border-slate-200/70 overflow-hidden shadow-[0_14px_30px_-22px_rgba(11,29,69,0.35)] transition-transform duration-300 hover:-translate-y-1">
                  <div role="img" aria-label={title} className="w-full bg-slate-100" style={spriteStyle(i)} />
                  <div className="flex flex-col flex-1 px-4 pb-5">
                    <span className="-mt-7 w-14 h-14 rounded-full bg-[#EEF3FE] border-4 border-white text-bb-blue flex items-center justify-center relative">
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-3 text-[16.5px] font-extrabold text-bb-navy leading-snug">{title}</h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-bb-text flex-1">{body}</p>
                    <button
                      data-testid={`bb-industry-cta-${i}`}
                      aria-label={title}
                      onClick={() => openContact(SERVICE)}
                      className="mt-4 w-9 h-9 rounded-full bg-bb-sky text-bb-blue flex items-center justify-center transition-colors duration-300 group-hover:bg-bb-blue group-hover:text-white"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
