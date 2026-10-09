import { createContext, useContext, useMemo, useState } from "react";
import { Globe } from "lucide-react";
import { CONTENT } from "../content";

const LangContext = createContext(null);
const ContactContext = createContext({ openContact: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const value = useMemo(() => ({ lang, setLang, t: CONTENT[lang] }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
export const useLang = () => useContext(LangContext);

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState("");
  const openContact = (service) => {
    setPreset(typeof service === "string" ? service : "");
    setOpen(true);
  };
  return (
    <ContactContext.Provider
      value={{ open, setOpen, preset, openContact, closeContact: () => setOpen(false) }}
    >
      {children}
    </ContactContext.Provider>
  );
}
export const useContact = () => useContext(ContactContext);

export function scrollToSection(hash) {
  if (hash.startsWith("/")) return window.__navigate?.(hash);
  const el = document.querySelector(hash);
  if (!el) return window.location.pathname !== "/" && window.__navigate?.("/" + hash);
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.2 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export function LangToggle({ tone = "dark", testId = "header-lang-toggle" }) {
  const { lang, setLang } = useLang();
  const dark = tone === "dark";
  const idle = dark ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-ink";
  const on = dark ? "text-white" : "text-ink";
  return (
    <div data-testid={testId} className="flex items-center gap-2">
      <Globe className={`w-[18px] h-[18px] ${dark ? "text-white/85" : "text-slate-600"}`} strokeWidth={1.8} />
      {["en", "id"].map((code, i) => (
        <span key={code} className="flex items-center gap-2">
          {i > 0 && <span className={`w-px h-3.5 ${dark ? "bg-white/30" : "bg-slate-300"}`} />}
          <button
            data-testid={`lang-option-${code}`}
            onClick={() => setLang(code)}
            className={`text-[13px] font-semibold transition-colors duration-300 ${lang === code ? on : idle}`}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
