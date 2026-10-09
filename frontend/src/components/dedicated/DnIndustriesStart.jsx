import { Hotel, Building2, Landmark, GraduationCap, Cross, Building, Settings, ShoppingCart } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnButton, DnImage } from "./ui";
import { DN_ASSETS } from "./assets";

const ICONS = [Hotel, Building2, Landmark, GraduationCap, Cross, Building, Settings, ShoppingCart];

export function DnIndustries() {
  const { t } = useLang();
  const d = t.dedicated.industries;
  return (
    <section data-testid="dn-industries" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-1.5">
        <DnImage asset={DN_ASSETS.industries} className="h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[520px] overflow-hidden lg:rounded-tr-[18px] lg:rounded-br-[18px]" imgClass="object-[55%_center]" />
        <div className="bg-bb-navy lg:rounded-tl-[18px] lg:rounded-bl-[18px] px-6 py-14 lg:py-16 lg:pl-14 lg:pr-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]">
          <Reveal>
            <BbEyebrow dark>{d.eyebrow}</BbEyebrow>
            <h2 className="mt-4 text-[30px] lg:text-[36px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">{d.title}</h2>
            <p className="mt-4 text-[14px] leading-[1.75] text-slate-300 max-w-[520px]">{d.body}</p>
          </Reveal>
          <div className="mt-11 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-4">
            {d.items.map((label, i) => {
              const Icon = ICONS[i];
              return (
                <div key={label} data-testid={`dn-industry-${i}`} className="group flex flex-col items-center text-center">
                  <Icon className="w-9 h-9 text-white transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.3} />
                  <span className="mt-3 text-[13px] font-semibold text-white/90">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DnStart() {
  const { t } = useLang();
  const s = t.dedicated.start;
  return (
    <section data-testid="dn-start" className="relative bg-white overflow-hidden mt-1.5">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[56%]">
        <DnImage
          asset={DN_ASSETS.noc}
          className="h-[260px] lg:h-full lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)] lg:rounded-tl-[18px] overflow-hidden"
        />
      </div>
      <div className={`${WRAP} relative py-16 lg:py-20 lg:min-h-[400px] flex items-center`}>
        <Reveal className="max-w-[480px]">
          <BbEyebrow>{s.eyebrow}</BbEyebrow>
          <h2 className="mt-4 text-[32px] lg:text-[40px] font-extrabold leading-[1.12] tracking-[-0.02em] text-bb-navy">
            {s.title1}
            <br />
            {s.title2}
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.75] text-bb-text max-w-[420px]">{s.body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <DnButton label={s.quote} testId="dn-start-quote-btn" />
            <DnButton label={s.sales} testId="dn-start-sales-btn" variant="outline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
