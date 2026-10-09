import { ArrowUpDown, Zap, MonitorCheck, Wrench } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "./ui";

const ICONS = [ArrowUpDown, Zap, MonitorCheck, Wrench];

export default function BbWhy() {
  const { t } = useLang();
  const w = t.broadband.why;
  return (
    <section data-testid="bb-why" className="relative bg-bb-navy overflow-hidden">
      <div className="lg:absolute inset-y-0 right-0 lg:w-[46%] relative aspect-[16/10] lg:aspect-auto">
        <img data-testid="bb-why-image" src="/broadband/technician.png" alt="Artamedia technician maintaining a data center rack" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-bb-navy via-bb-navy/30 to-transparent" />
      </div>
      <div className={`${WRAP} relative py-14 lg:py-20`}>
        <Reveal className="lg:max-w-[58%]">
          <BbEyebrow dark>{w.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-white text-[32px] lg:text-[40px] leading-tight">{w.title}</h2>
          <p className="mt-3 text-[15px] text-slate-300 max-w-lg">{w.body}</p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-7">
            {w.items.map(([title, body], i) => {
              const Icon = ICONS[i];
              return (
                <div key={title} data-testid={`bb-why-card-${i}`} className="group">
                  <span className="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-bb-blue group-hover:border-bb-blue">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-[14.5px] font-bold text-white">{title}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-slate-400">{body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
