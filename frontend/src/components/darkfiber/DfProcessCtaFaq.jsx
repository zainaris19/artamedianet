import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, Plus, ArrowRight, MessagesSquare, ClipboardList, HardHat, BadgeCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "../broadband/ui";
import { ImageSlot } from "../dedicated/ui";
import { DF_ASSETS } from "./assets";
import { DfButton, DfTitle } from "./DfHero";

const STEP_ICONS = [MessagesSquare, ClipboardList, HardHat, BadgeCheck];

export function DfProcess() {
  const { t } = useLang();
  const p = t.darkFiber.process;
  return (
    <section data-testid="df-process" className="bg-white py-16 lg:py-20">
      <div className={WRAP}>
        <Reveal>
          <BbEyebrow>{p.eyebrow}</BbEyebrow>
          <DfTitle>{p.title}</DfTitle>
          <p className="mt-3 text-[15px] leading-[1.7] text-bb-text">{p.body}</p>
        </Reveal>
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {p.steps.map(([title, body], i) => {
            const Icon = STEP_ICONS[i];
            return (
              <Reveal key={title} delay={i * 0.08}>
                <li data-testid={`df-process-step-${i}`} className="flex items-start gap-4">
                  <span className="w-14 h-14 shrink-0 rounded-full border-2 border-bb-blue text-bb-blue flex items-center justify-center bg-white">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-[13px] font-semibold text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                      {i < p.steps.length - 1 && (
                        <span aria-hidden className="hidden lg:flex flex-1 items-center text-bb-blue">
                          <span className="flex-1 h-[1.5px] bg-bb-blue/60" />
                          <ArrowRight className="w-4 h-4 -ml-1" />
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 text-[15px] font-bold text-bb-navy">{title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-bb-text">{body}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function DfCta() {
  const { t } = useLang();
  const c = t.darkFiber.cta;
  const bg = DF_ASSETS.cta;
  return (
    <section data-testid="df-cta" className="relative overflow-hidden bg-bb-navy">
      {bg.src ? (
        <>
          <img src={bg.src} alt={bg.alt} className="absolute inset-0 w-full h-full object-cover object-[75%_40%] lg:object-[center_40%]" />
          <div className="absolute inset-0 bg-[#0B1D45]/80 lg:bg-transparent lg:bg-[linear-gradient(90deg,rgba(11,29,69,0.95)_0%,rgba(11,29,69,0.7)_38%,rgba(11,29,69,0.1)_70%,rgba(11,29,69,0)_100%)]" />
        </>
      ) : (
        <ImageSlot asset={bg} dark className="absolute inset-y-4 right-4 w-[42%] hidden lg:flex rounded-xl" />
      )}
      <div className={`${WRAP} relative py-14 lg:py-16`}>
        <h2 className="font-extrabold tracking-[-0.02em] text-white text-[28px] lg:text-[34px] leading-tight">{c.title}</h2>
        <p className="mt-3 text-[15px] leading-[1.7] text-slate-200 max-w-[480px]">{c.body}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <DfButton label={c.quote} testId="df-cta-quote-btn" />
          <DfButton label={c.sales} testId="df-cta-sales-btn" variant="white" />
        </div>
      </div>
      {!bg.src && <ImageSlot asset={bg} dark className="lg:hidden mx-6 mb-8 rounded-xl" />}
    </section>
  );
}

export function DfFaq() {
  const { t } = useLang();
  const f = t.darkFiber.faq;
  return (
    <section data-testid="df-faq" className="bg-white py-16 lg:py-20">
      <div className={`${WRAP} grid lg:grid-cols-12 gap-10`}>
        <div className="lg:col-span-5">
          <BbEyebrow>{f.eyebrow}</BbEyebrow>
          <DfTitle>{f.title}</DfTitle>
        </div>
        <Accordion.Root type="single" collapsible className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200" data-testid="df-faq-accordion">
          {f.items.map(([q, a], i) => (
            <Accordion.Item key={i} value={`q${i}`}>
              <Accordion.Header>
                <Accordion.Trigger data-testid={`df-faq-trigger-${i}`} className="group w-full flex items-center gap-3 px-2 py-4 text-left text-[14.5px] font-semibold text-bb-navy hover:text-bb-blue transition-colors">
                  <ChevronRight className="w-4 h-4 text-bb-blue shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90" />
                  <span className="flex-1">{q}</span>
                  <Plus className="w-4 h-4 text-bb-blue shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content data-testid={`df-faq-content-${i}`} className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="px-2 pl-9 pb-5 text-[14px] leading-relaxed text-bb-text">{a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
