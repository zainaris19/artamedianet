import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Server, Building2, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import Logo from "./Logo";
import { useLang, useContact, scrollToSection } from "../context/LanguageContext";

const px = (id, w) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
const PHOTO = "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function Continuity() {
  const { t } = useLang();
  const { openContact } = useContact();
  const [failover, setFailover] = useState(false);
  const d = t.continuity.diagram;

  const cardBase = "absolute rounded-2xl bg-white shadow-xl shadow-slate-900/15 border border-slate-100 px-3 py-3 sm:px-5 sm:py-4 flex items-center gap-2.5 sm:gap-4 transition-opacity duration-500";

  return (
    <section data-testid="continuity-section" className="bg-white py-24 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <Reveal className="lg:col-span-4 min-w-0">
          <div className="flex items-start gap-2.5">
            <span className="h-px w-7 bg-brand-green mt-[6px] shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-ink uppercase leading-[1.55]">
              {t.continuity.eyebrow.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </span>
          </div>
          <h2 className="mt-6 font-display font-extrabold tracking-tight text-ink text-[30px] lg:text-[38px] leading-[1.12] uppercase">
            <span className="text-[#1B72E8]">{t.continuity.title[0]}</span>
            <br />
            {t.continuity.title[1]}
            <br />
            {t.continuity.title[2]}
          </h2>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-slate-500">{t.continuity.body}</p>

          <ul className="mt-7 space-y-3">
            {t.continuity.benefits.map((b, i) => (
              <li key={b} data-testid={`continuity-benefit-${i}`} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" strokeWidth={1.8} />
                <span className="text-[14px] font-semibold text-ink">{b}</span>
              </li>
            ))}
          </ul>

          <button
            data-testid="continuity-learn-btn"
            onClick={() => scrollToSection("#network")}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-brand-green hover:bg-brand-green2 text-navy-950 text-sm font-bold px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,166,81,0.4)]"
          >
            {t.continuity.cta}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="lg:col-span-8 min-w-0">
          <Reveal delay={0.1}>
            <div
              data-testid="continuity-visual"
              onMouseEnter={() => setFailover(true)}
              onMouseLeave={() => setFailover(false)}
              className="relative rounded-3xl overflow-hidden border border-slate-200 h-[520px] sm:h-[560px] bg-navy-950"
            >
              <img
                src={PHOTO}
                alt="Artamedia engineer working in a data center"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-navy-950/10" />

              <svg
                viewBox="0 0 700 520"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                <path
                  d="M330 96 C 348 150, 350 175, 350 212"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  className="transition-opacity duration-500"
                  opacity={failover ? 0.12 : 0.9}
                />
                <path
                  d="M350 308 C 350 350, 335 385, 305 424"
                  fill="none"
                  stroke="#1B72E8"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M372 96 C 392 150, 394 175, 393 212"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="6 6"
                  className={failover ? "dash-anim" : ""}
                  opacity={failover ? 1 : 0.45}
                />
                {!failover && (
                  <circle r="4" fill="#34D399">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M330 96 C 348 150, 350 175, 350 212" />
                  </circle>
                )}
                <circle r="4" fill="#3B82F6">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M350 308 C 350 350, 335 385, 305 424" />
                </circle>
                {failover && (
                  <circle r="4" fill="#FDBA74">
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M372 96 C 392 150, 394 175, 393 212" />
                  </circle>
                )}
              </svg>

              <div
                className={`${cardBase} left-[3%] top-[6%] w-[47%] sm:w-[46%] ${failover ? "opacity-35" : "opacity-100"}`}
                data-testid="continuity-card-primary"
              >
                <Globe2 className="w-9 h-9 sm:w-10 sm:h-10 text-emerald-500 shrink-0" strokeWidth={1.5} />
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="font-display font-bold text-ink text-[15px] sm:text-[17px]">{d.primary}</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={`w-2 h-2 rounded-full transition-colors duration-500 ${failover ? "bg-slate-400" : "bg-emerald-500"}`} />
                    <span className="text-slate-500 text-[12.5px] sm:text-[13.5px] font-medium">{d.primaryStatus}</span>
                  </div>
                </div>
                <img src={px("photo-1486406146926-c627a92ad1ab", 400)} alt="" className="hidden sm:block w-24 h-16 rounded-lg object-cover shrink-0" />
              </div>

              <div
                className={`${cardBase} right-[3%] top-[6%] w-[47%] sm:w-[46%] ${failover ? "border-orange-200" : ""}`}
                data-testid="continuity-card-backup"
              >
                <Server className="w-9 h-9 sm:w-10 sm:h-10 text-orange-500 shrink-0" strokeWidth={1.5} />
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="font-display font-bold text-ink text-[15px] sm:text-[17px]">{d.backup}</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={`w-2 h-2 rounded-full transition-colors duration-500 ${failover ? "bg-emerald-500" : "bg-orange-500"}`} />
                    <span className="text-slate-500 text-[12.5px] sm:text-[13.5px] font-medium">{d.backupStatus}</span>
                  </div>
                </div>
                <img src={px("photo-1745697213293-21d6c972ac1a", 400)} alt="" className="hidden sm:block w-24 h-16 rounded-lg object-cover shrink-0" />
              </div>

              <div
                className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl shadow-slate-900/20 border border-slate-100 px-4 py-4 sm:px-7 sm:py-6 w-[46%] sm:w-[36%] flex items-center justify-center"
                data-testid="continuity-card-hub"
              >
                <Logo tone="light" />
              </div>

              <div
                className={`${cardBase} left-[4%] bottom-[6%] w-[54%] sm:w-[46%]`}
                data-testid="continuity-card-business"
              >
                <Building2 className="w-9 h-9 sm:w-10 sm:h-10 text-[#1B72E8] shrink-0" strokeWidth={1.5} />
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="font-display font-bold text-ink text-[15px] sm:text-[17px]">{d.business}</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={`w-2 h-2 rounded-full transition-colors duration-500 ${failover ? "bg-emerald-500" : "bg-emerald-500"}`} />
                    <span className="text-slate-500 text-[12.5px] sm:text-[13.5px] font-medium">{d.businessStatus}</span>
                  </div>
                </div>
                <img src={px("photo-1486406146926-c627a92ad1ab", 400)} alt="" className="hidden sm:block w-24 h-16 rounded-lg object-cover shrink-0" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
