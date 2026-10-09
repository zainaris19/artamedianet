import { Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { useLang, useContact, scrollToSection, LangToggle } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const { openContact } = useContact();

  const targets = {
    company: ["#about", "#network", "#contact"],
    services: "#services",
    industries: "#industries",
    contact: ["modal", "modal", "#contact", "#contact"],
  };

  const handleClick = (colKey, i) => {
    const target = targets[colKey];
    if (Array.isArray(target)) {
      const v = target[i];
      if (v === "modal") openContact();
      else scrollToSection(v);
    } else {
      scrollToSection(target);
    }
  };

  const cols = ["company", "services", "industries", "contact"];

  return (
    <footer data-testid="site-footer" className="bg-navy-950 border-t border-white/10 pt-16 lg:pt-20 pb-8">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 text-[13.5px] leading-relaxed text-slate-400 max-w-xs">{t.footer.desc}</p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  data-testid={`footer-social-${i}`}
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-brand-green2 hover:border-brand-green/50 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {cols.map((colKey) => {
            const [title, items] = t.footer.columns[colKey];
            return (
              <div key={colKey} className="lg:col-span-2">
                <div className="font-mono text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500 mb-5">
                  {title}
                </div>
                <ul className="space-y-3">
                  {items.map((item, i) => (
                    <li key={item}>
                      <button
                        data-testid={`footer-link-${colKey}-${i}`}
                        onClick={() => handleClick(colKey, i)}
                        className="group inline-flex items-center gap-1 text-[13.5px] text-slate-300 hover:text-brand-green2 transition-colors duration-300"
                      >
                        {item}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[12px] text-slate-500 text-center md:text-left">{t.footer.rights}</p>
          <div className="flex items-center gap-6">
            {t.footer.legal.map((l) => (
              <button key={l} className="text-[12px] text-slate-500 hover:text-slate-300 transition-colors">
                {l}
              </button>
            ))}
          </div>
          <LangToggle tone="dark" testId="footer-lang-toggle" />
        </div>
      </div>
    </footer>
  );
}
