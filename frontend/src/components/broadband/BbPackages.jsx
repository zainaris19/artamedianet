import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MessagesSquare } from "lucide-react";
import { Reveal } from "../Reveal";
import { useLang } from "../../context/LanguageContext";
import { WRAP, BbEyebrow, QuoteButton } from "./ui";

function PackageCard({ pkg, p, i }) {
  const [name, speed, price] = pkg;
  return (
    <div data-testid={`bb-package-card-${name}`} className="group flex flex-col rounded-xl bg-white border border-slate-200/80 overflow-hidden shadow-[0_14px_34px_-22px_rgba(11,29,69,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-24px_rgba(20,99,243,0.45)]">
      <div className="bg-[linear-gradient(135deg,#1463F3_0%,#0B47C4_100%)] px-5 py-5">
        <div className="text-[12px] font-bold tracking-[0.16em] text-white/80">{name}</div>
        <div className="mt-1 text-[28px] font-extrabold leading-none text-white">{speed}</div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="text-[11.5px] font-semibold text-bb-text">{p.monthly}</div>
        <div className="mt-1 flex items-baseline gap-1.5 flex-wrap">
          <span data-testid={`bb-package-price-${name}`} className="text-[21px] font-extrabold text-bb-navy tracking-tight">{price}</span>
          <span className="text-[12px] text-bb-text">{p.perMonth}</span>
        </div>
        <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 flex-1">
          {p.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[13px] text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-bb-blue shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <QuoteButton label={p.cta} testId={`bb-package-quote-${name}`} className="mt-6 w-full !py-3 !text-[13.5px]" />
      </div>
    </div>
  );
}

function ConsultPanel({ data, cta, tab }) {
  return (
    <div data-testid={`bb-consult-${tab}`} className="rounded-2xl border border-slate-200 bg-[linear-gradient(120deg,#F4F8FF_0%,#FFFFFF_70%)] p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
      <span className="w-16 h-16 shrink-0 rounded-full bg-bb-sky text-bb-blue flex items-center justify-center">
        <MessagesSquare className="w-7 h-7" />
      </span>
      <div className="flex-1">
        <h3 className="text-[20px] font-extrabold text-bb-navy">{data.title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-bb-text max-w-2xl">{data.body}</p>
      </div>
      <QuoteButton label={cta} testId={`bb-consult-${tab}-btn`} />
    </div>
  );
}

export default function BbPackages() {
  const { t } = useLang();
  const p = t.broadband.packages;
  const [tab, setTab] = useState("hospitality");
  return (
    <section id="packages" data-testid="bb-packages" className="bg-white py-16 lg:py-20">
      <div className={WRAP}>
        <Reveal>
          <BbEyebrow>{p.eyebrow}</BbEyebrow>
          <h2 className="mt-4 font-extrabold tracking-[-0.02em] text-bb-navy text-[32px] lg:text-[40px] leading-tight">{p.title}</h2>
          <p className="mt-3 text-[15px] text-bb-text">{p.body}</p>
          <div role="tablist" data-testid="bb-package-tabs" className="mt-8 inline-flex flex-wrap rounded-lg border border-slate-200 bg-slate-50 p-1">
            {p.tabs.map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                data-testid={`bb-package-tab-${id}`}
                onClick={() => setTab(id)}
                className={`rounded-md px-6 py-2.5 text-[13.5px] font-bold transition-colors duration-300 ${tab === id ? "bg-bb-blue text-white shadow" : "text-slate-600 hover:text-bb-navy"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="mt-8">
            {tab === "hospitality" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {p.list.map((pkg, i) => <PackageCard key={pkg[0]} pkg={pkg} p={p} i={i} />)}
              </div>
            ) : (
              <ConsultPanel data={p.consult[tab]} cta={p.consult.cta} tab={tab} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
