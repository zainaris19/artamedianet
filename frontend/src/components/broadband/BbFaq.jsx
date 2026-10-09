import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, Plus } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow } from "./ui";

export default function BbFaq() {
  const { t } = useLang();
  const f = t.broadband.faq;
  return (
    <section data-testid="bb-faq" className="bg-white py-16 lg:py-20">
      <div className={`${WRAP} grid lg:grid-cols-12 gap-10`}>
        <div className="lg:col-span-5">
          <BbEyebrow>{f.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-bb-navy text-[32px] lg:text-[40px] leading-tight">{f.title}</h2>
        </div>
        <Accordion.Root type="single" collapsible className="lg:col-span-7 space-y-3" data-testid="bb-faq-accordion">
          {f.items.map(([q, a], i) => (
            <Accordion.Item key={i} value={`q${i}`} className="rounded-lg border border-slate-200 bg-white shadow-[0_6px_18px_-14px_rgba(11,29,69,0.3)] overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger data-testid={`bb-faq-trigger-${i}`} className="group w-full flex items-center gap-3 px-5 py-4 text-left text-[14.5px] font-semibold text-bb-navy hover:text-bb-blue transition-colors">
                  <ChevronRight className="w-4 h-4 text-bb-blue shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90" />
                  <span className="flex-1">{q}</span>
                  <Plus className="w-4 h-4 text-bb-blue shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content data-testid={`bb-faq-content-${i}`} className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="px-5 pl-12 pb-5 text-[14px] leading-relaxed text-bb-text">{a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
