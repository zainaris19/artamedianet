import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, Plus } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { ImageSlot } from "../dedicated/ui";
import { ME_ASSETS } from "./assets";
import { MeButton } from "./MeHero";

export function MeCta() {
  const { t } = useLang();
  const c = t.metro.cta;
  const bg = ME_ASSETS.cta;
  return (
    <section data-testid="me-cta" className="relative overflow-hidden bg-bb-navy">
      {bg.src ? (
        <>
          <img src={bg.src} alt={bg.alt} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,29,69,0.95)_0%,rgba(11,29,69,0.75)_40%,rgba(11,29,69,0.2)_100%)]" />
        </>
      ) : (
        <ImageSlot asset={bg} dark className="absolute inset-y-4 right-4 w-[45%] hidden lg:flex rounded-xl" />
      )}
      <div className={`${WRAP} relative py-14 lg:py-16`}>
        <h2 className="font-extrabold tracking-[-0.02em] text-white text-[28px] lg:text-[34px] leading-tight">{c.title}</h2>
        <p className="mt-3 text-[15px] leading-[1.7] text-slate-200 max-w-[460px]">{c.body}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <MeButton label={c.quote} testId="me-cta-quote-btn" />
          <MeButton label={c.sales} testId="me-cta-sales-btn" variant="white" />
        </div>
      </div>
      {!bg.src && <ImageSlot asset={bg} dark className="lg:hidden mx-6 mb-8 rounded-xl" />}
    </section>
  );
}

export function MeFaq() {
  const { t } = useLang();
  const f = t.metro.faq;
  return (
    <section data-testid="me-faq" className="bg-white py-16 lg:py-20">
      <div className={`${WRAP} grid lg:grid-cols-12 gap-10`}>
        <div className="lg:col-span-5">
          <BbEyebrow>{f.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-bb-navy text-[30px] lg:text-[38px] leading-tight">{f.title}</h2>
        </div>
        <Accordion.Root type="single" collapsible className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200" data-testid="me-faq-accordion">
          {f.items.map(([q, a], i) => (
            <Accordion.Item key={i} value={`q${i}`}>
              <Accordion.Header>
                <Accordion.Trigger data-testid={`me-faq-trigger-${i}`} className="group w-full flex items-center gap-3 px-2 py-4 text-left text-[14.5px] font-semibold text-bb-navy hover:text-bb-blue transition-colors">
                  <ChevronRight className="w-4 h-4 text-bb-blue shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90" />
                  <span className="flex-1">{q}</span>
                  <Plus className="w-4 h-4 text-bb-blue shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content data-testid={`me-faq-content-${i}`} className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="px-2 pl-9 pb-5 text-[14px] leading-relaxed text-bb-text">{a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
