import { Network, TrendingUp, LockKeyhole } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { BbEyebrow } from "./ui";

const ICONS = [Network, TrendingUp, LockKeyhole];

export default function BbAbout() {
  const { t } = useLang();
  const a = t.broadband.about;
  return (
    <section data-testid="bb-about" className="bg-[linear-gradient(180deg,#F4F7FC_0%,#FFFFFF_100%)] py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Reveal className="px-6 lg:px-0">
          <div className="overflow-hidden rounded-2xl lg:rounded-l-none lg:rounded-r-2xl shadow-[0_30px_60px_-30px_rgba(11,29,69,0.45)]">
            <img data-testid="bb-about-image" src="/broadband/hospitality.png" alt="Hospitality building connected by Artamedia" className="w-full aspect-[16/10] lg:aspect-auto lg:h-[470px] object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="px-6 lg:pl-0 lg:pr-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]">
          <BbEyebrow>{a.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-bb-navy text-[32px] lg:text-[40px] leading-[1.12]">
            {a.title[0]}
            <br />
            {a.title[1]}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-bb-text">{a.body}</p>
          <div className="mt-9 grid sm:grid-cols-3 gap-7">
            {a.features.map(([title, body], i) => {
              const Icon = ICONS[i];
              return (
                <div key={title} data-testid={`bb-about-feature-${i}`}>
                  <Icon className="w-9 h-9 text-bb-blue" strokeWidth={1.7} />
                  <h3 className="mt-3 text-[14.5px] font-bold text-bb-navy">{title}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-bb-text">{body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
