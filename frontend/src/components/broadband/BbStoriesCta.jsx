import { ImageIcon, Quote, UserRound } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow, QuoteButton } from "./ui";

export function BbStories() {
  const { t } = useLang();
  const s = t.broadband.stories;
  return (
    <section data-testid="bb-stories" className="grid lg:grid-cols-2">
      <div data-testid="bb-stories-image-slot" className="min-h-[260px] lg:min-h-[300px] bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 text-slate-400">
        <ImageIcon className="w-8 h-8" />
        <span className="text-[12.5px] font-semibold tracking-wide">{s.imageSlot}</span>
      </div>
      <div className="bg-bb-navy px-6 lg:px-12 py-12 flex flex-col justify-center">
        <BbEyebrow dark>{s.eyebrow}</BbEyebrow>
        <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-white text-[26px] lg:text-[30px] leading-tight max-w-md">{s.title}</h2>
        <div className="mt-6 flex gap-3">
          <Quote className="w-6 h-6 text-bb-blue shrink-0" />
          <p data-testid="bb-stories-pending" className="text-[15px] italic leading-relaxed text-slate-300">{s.pending}</p>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-300">
            <UserRound className="w-5 h-5" />
          </span>
          <span className="text-[13px] text-slate-400">{s.pendingRole}</span>
        </div>
      </div>
    </section>
  );
}

export function BbCta() {
  const { t } = useLang();
  const c = t.broadband.cta;
  return (
    <section data-testid="bb-cta" className="relative overflow-hidden">
      <img src="/broadband/skyline.webp" alt="City skyline at twilight" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-bb-navy/95 via-bb-navy/75 to-bb-navy/30" />
      <div className={`${WRAP} relative py-14 lg:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8`}>
        <div>
          <h2 className="font-extrabold tracking-[-0.02em] text-white text-[30px] lg:text-[36px] leading-tight">{c.title}</h2>
          <p className="mt-2 text-[15px] text-slate-200 max-w-xl">{c.body}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <QuoteButton label={c.quote} testId="bb-cta-quote-btn" />
          <QuoteButton label={c.sales} testId="bb-cta-sales-btn" variant="white" className="min-w-[170px]" />
        </div>
      </div>
    </section>
  );
}
