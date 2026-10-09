import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang, scrollToSection } from "../context/LanguageContext";
import { PROVINCES, MAP_W, MAP_H } from "./indonesiaMap";

const LNG0 = 94.0, LNG1 = 141.5, LAT0 = 6.5, LAT1 = -11.5;
const px = (lng, lat) => ({
  x: ((lng - LNG0) / (LNG1 - LNG0)) * MAP_W,
  y: ((LAT0 - lat) / (LAT0 - LAT1)) * MAP_H,
});

const CITIES = [
  { id: "medan", city: "Medan", province: "Sumatera Utara", region: "sumatera", ...px(98.67, 3.59) },
  { id: "pekanbaru", city: "Pekanbaru", province: "Riau", region: "sumatera", ...px(101.45, 0.51) },
  { id: "jambi", city: "Jambi", province: "Jambi", region: "sumatera", ...px(103.61, -1.61) },
  { id: "palembang", city: "Palembang", province: "Sumatera Selatan", region: "sumatera", ...px(104.75, -2.98) },
  { id: "lampung", city: "Lampung", province: "Lampung", region: "sumatera", ...px(105.26, -5.43) },
  { id: "bangka", city: "Bangka Belitung", province: "Bangka-Belitung", region: "sumatera", ...px(106.11, -2.13) },
  { id: "jakarta", city: "Jakarta", province: "Jakarta Raya", region: "javabali", hub: true, ...px(106.85, -6.21) },
  { id: "cilegon", city: "Cilegon", province: "Banten", region: "javabali", ...px(106.06, -6.0) },
  { id: "denpasar", city: "Denpasar", province: "Bali", region: "javabali", ...px(115.22, -8.65) },
  { id: "pontianak", city: "Pontianak", province: "Kalimantan Barat", region: "kalimantan", ...px(109.33, -0.03) },
  { id: "banjarmasin", city: "Banjarmasin", province: "Kalimantan Selatan", region: "kalimantan", ...px(114.59, -3.32) },
  { id: "balikpapan", city: "Balikpapan", province: "Kalimantan Timur", region: "kalimantan", ...px(116.85, -1.24) },
  { id: "makassar", city: "Makassar", province: "Sulawesi Selatan", region: "sulawesint", ...px(119.43, -5.15) },
  { id: "lombok", city: "Lombok", province: "Nusa Tenggara Barat", region: "sulawesint", ...px(116.11, -8.58) },
  { id: "singapore", city: "Singapore", province: "Singapore", region: "international", intl: true, ...px(103.82, 1.35) },
];

const COV_PROVS = new Set(CITIES.map((c) => c.province));
const cityByProvince = Object.fromEntries(CITIES.map((c) => [c.province, c]));
const cityById = Object.fromEntries(CITIES.map((c) => [c.id, c]));

export default function Network() {
  const { t } = useLang();
  const [region, setRegion] = useState("all");
  const [selected, setSelected] = useState(null);
  const [hover, setHover] = useState(null);
  const [hoverProv, setHoverProv] = useState(null);

  const tipCity = cityById[hover || selected];
  const visible = (c) => region === "all" || c.region === region;
  const selProv = selected ? cityById[selected].province : null;
  const hovProv = hover ? cityById[hover].province : null;

  const fillFor = (name) => {
    const cov = COV_PROVS.has(name);
    if (cov) {
      if (name === selProv || name === hovProv) return "#1B72E8";
      return "#F7F9FB";
    }
    if (hoverProv === name) return "#EAEFF4";
    return "#F7F9FB";
  };

  return (
    <section id="network" data-testid="network-section" className="bg-white py-24 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <Reveal className="lg:col-span-5 min-w-0">
          <div className="flex items-start gap-2.5">
            <span className="h-px w-7 bg-brand-green mt-[6px] shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-ink uppercase leading-[1.55]">
              {t.network.eyebrow.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </span>
          </div>
          <h2 className="mt-6 font-display font-extrabold tracking-tight text-ink text-[34px] lg:text-[42px] leading-[1.12]">
            {t.network.title[0]}
            <br />
            {t.network.title[1]}{" "}
            <span className="text-brand-green">{t.network.title[2]}</span>
          </h2>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-slate-500">{t.network.body}</p>
          <button
            data-testid="network-coverage-btn"
            onClick={() => scrollToSection("#contact")}
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-green hover:bg-brand-green2 text-navy-950 text-sm font-bold px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,166,81,0.4)]"
          >
            {t.network.cta}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="lg:col-span-7 min-w-0">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2" role="tablist" data-testid="network-tabs">
              {t.network.tabs.map((tb) => (
                <button
                  key={tb.id}
                  role="tab"
                  aria-selected={region === tb.id}
                  data-testid={`network-tab-${tb.id}`}
                  onClick={() => setRegion(tb.id)}
                  className={`rounded-full px-5 py-2 text-[12.5px] font-semibold transition-all duration-300 border ${
                    region === tb.id
                      ? "bg-brand-green text-navy-950 border-brand-green"
                      : "border-slate-300 text-slate-600 hover:border-slate-500 hover:text-ink bg-white"
                  }`}
                >
                  {tb.name}
                </button>
              ))}
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1" data-testid="network-city-list">
              {CITIES.filter(visible).map((c) => (
                <button
                  key={c.id}
                  data-testid={`network-city-${c.id}`}
                  onClick={() => setSelected(selected === c.id ? null : c.id)}
                  onMouseEnter={() => setHover(c.id)}
                  onMouseLeave={() => setHover(null)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11.5px] font-medium border transition-all duration-300 ${
                    selected === c.id || hover === c.id
                      ? "bg-[#1B72E8] text-white border-[#1B72E8]"
                      : "bg-white text-slate-600 border-slate-300 hover:border-slate-500"
                  }`}
                >
                  {c.city}
                </button>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-slate-400">{t.network.hint}</p>

            <div className="relative mt-4 rounded-2xl border border-slate-200 bg-[#E8F1F8] overflow-hidden" data-testid="network-map-panel">
              <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="w-full h-auto block" role="img" aria-label="Artamedia coverage map of Indonesia">
                <rect width={MAP_W} height={MAP_H} fill="#E8F1F8" />
                {PROVINCES.map((p, i) => (
                  <path
                    key={i}
                    d={p.d}
                    fill={fillFor(p.n)}
                    stroke="#C4CFDA"
                    strokeWidth="0.6"
                    strokeLinejoin="round"
                    className="transition-[fill] duration-300"
                    style={{ cursor: COV_PROVS.has(p.n) ? "pointer" : "default" }}
                    onClick={() => COV_PROVS.has(p.n) && setSelected(cityByProvince[p.n].id)}
                    onMouseEnter={() => {
                      setHoverProv(p.n);
                      if (COV_PROVS.has(p.n)) setHover(cityByProvince[p.n].id);
                    }}
                    onMouseLeave={() => {
                      setHoverProv(null);
                      setHover(null);
                    }}
                  />
                ))}

                {CITIES.filter(visible).map((c) => (
                  <g
                    key={c.id}
                    data-testid={`network-marker-${c.id}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelected(selected === c.id ? null : c.id)}
                    onMouseEnter={() => setHover(c.id)}
                    onMouseLeave={() => setHover(null)}
                  >
                    {c.hub && (
                      <circle cx={c.x} cy={c.y} r="10" fill="none" stroke="#00A651" strokeWidth="1.4">
                        <animate attributeName="r" values="10;17" dur="2.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.55;0" dur="2.2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    {c.intl && (
                      <circle cx={c.x} cy={c.y} r="9" fill="none" stroke="#1B72E8" strokeWidth="1.3" strokeDasharray="3 3" />
                    )}
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={c.hub ? 6.5 : c.intl ? 5 : 4.2}
                      fill={c.intl ? "#1B72E8" : "#00A651"}
                      stroke="#FFFFFF"
                      strokeWidth="1.8"
                    />
                    {(c.hub || c.intl) && (
                      <g fontFamily="IBM Plex Mono, monospace" style={{ pointerEvents: "none" }}>
                        <text
                          x={c.x + 14}
                          y={c.y - 1}
                          fontSize="11.5"
                          fontWeight="700"
                          fill="#0F172A"
                          stroke="#E8F1F8"
                          strokeWidth="3.5"
                          paintOrder="stroke"
                        >
                          {c.city}
                        </text>
                        <text
                          x={c.x + 14}
                          y={c.y + 11}
                          fontSize="8.5"
                          fontWeight="600"
                          letterSpacing="1.5"
                          fill={c.hub ? "#00A651" : "#1B72E8"}
                          stroke="#E8F1F8"
                          strokeWidth="3"
                          paintOrder="stroke"
                        >
                          {c.hub ? "PRIMARY HUB" : "INTERNATIONAL"}
                        </text>
                      </g>
                    )}
                  </g>
                ))}
              </svg>

              <AnimatePresence>
                {tipCity && (
                  <motion.div
                    key={tipCity.id}
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    data-testid="network-tooltip"
                    className="absolute z-10 pointer-events-none rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 px-4 py-3"
                    style={{
                      left: `${Math.min(Math.max(tipCity.x, 110), MAP_W - 110) / 10}%`,
                      top: `${(tipCity.y / MAP_H) * 100}%`,
                      transform: "translate(-50%, -118%)",
                    }}
                  >
                    <div className="font-display font-bold text-ink text-[13px] leading-none">
                      {tipCity.city}
                    </div>
                    <div className="text-slate-500 text-[11.5px] mt-1 leading-none">{tipCity.province}</div>
                    <div className="font-mono text-[9px] font-semibold tracking-[0.18em] text-brand-green uppercase mt-1.5">
                      {t.network.presence}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
