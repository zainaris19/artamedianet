import { Building, UsersRound, Settings2, ShieldCheck, Quote, ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { DnImage } from "../dedicated/ui";
import { ME_ASSETS } from "./assets";

const WHY_ICONS = [Building, UsersRound, Settings2, ShieldCheck];

export function MeWhy() {
  const { t } = useLang();
  const w = t.metro.why;
  return (
    <section data-testid="me-why" className="grid lg:grid-cols-2 bg-bb-navy">
      <DnImage asset={ME_ASSETS.why} dark className="h-[280px] sm:h-[360px] lg:h-full lg:min-h-[440px] overflow-hidden" />
      <Reveal className="px-6 sm:px-10 lg:pl-14 lg:pr-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] py-14 lg:py-16 flex flex-col justify-center">
        <BbEyebrow dark>{w.eyebrow}</BbEyebrow>
        <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-white text-[30px] lg:text-[36px] leading-[1.15]">
          {w.title1}
          <br />
          {w.title2}
        </h2>
        <p className="mt-5 text-[15px] leading-[1.75] text-slate-300">{w.body}</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {w.items.map((label, i) => {
            const Icon = WHY_ICONS[i];
            return (
              <div key={label} data-testid={`me-why-item-${i}`} className="flex flex-col items-center text-center">
                <Icon className="w-9 h-9 text-white" strokeWidth={1.4} />
                <span className="mt-3 text-[13px] font-semibold leading-snug text-white">{label}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function Avatar() {
  const a = ME_ASSETS.story;
  if (a.src) return <img src={a.src} alt={a.alt} className="w-24 h-24 rounded-full object-cover shrink-0" />;
  return (
    <div data-testid="image-slot-me-story" className="w-24 h-24 rounded-full shrink-0 border-2 border-dashed border-slate-300 bg-slate-100 flex flex-col items-center justify-center text-slate-500">
      <ImageIcon className="w-5 h-5" />
      <span className="mt-1 text-[9px] font-extrabold tracking-[0.12em]">{a.id}</span>
    </div>
  );
}

export function MeStories() {
  const { t } = useLang();
  const s = t.metro.stories;
  return (
    <section data-testid="me-stories" className="bg-white py-16 lg:py-20">
      <div className={`${WRAP} grid lg:grid-cols-2 gap-10 items-center`}>
        <Reveal>
          <BbEyebrow>{s.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-bb-navy text-[30px] lg:text-[38px] leading-[1.15]">{s.title}</h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-bb-text max-w-[480px]">{s.body}</p>
          <div className="mt-7 flex gap-5">
            <button data-testid="me-stories-prev" disabled aria-label={s.prev} className="text-bb-blue disabled:opacity-40">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button data-testid="me-stories-next" disabled aria-label={s.next} className="text-bb-blue disabled:opacity-40">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <figure data-testid="me-testimonial-card" className="rounded-xl border border-bb-blue/30 bg-white p-6 lg:p-8 flex items-center gap-6 shadow-[0_18px_40px_-28px_rgba(11,29,69,0.35)]">
            <Avatar />
            <div className="flex-1">
              <Quote className="w-7 h-7 text-bb-blue fill-bb-blue" />
              <blockquote data-testid="me-testimonial-pending" className="mt-3 text-[14px] italic leading-relaxed text-bb-text">{s.pending}</blockquote>
              <figcaption className="mt-4 text-[12.5px] font-semibold text-slate-500">{s.role}</figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
