import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Search } from "lucide-react";
import Logo from "./Logo";
import { useLang, useContact, scrollToSection, LangToggle } from "../context/LanguageContext";

const DROPDOWN_TARGETS = {
  company: (t) => t.nav.companyMenu,
  industries: (t) => t.industries.cards.map((c) => [c, "#industries"]),
};

const SECTION_IDS = { home: "home", services: "services", network: "network", industries: "industries" };

export default function Navbar() {
  const { t } = useLang();
  const { openContact } = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "home";
      Object.entries(SECTION_IDS).forEach(([key, id]) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 180 <= window.scrollY) current = key;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const go = (hash) => {
    setMobileOpen(false);
    setTimeout(() => scrollToSection(hash), mobileOpen ? 250 : 0);
  };

  const links = [
    { key: "home", hash: "#home" },
    { key: "company", menu: "company" },
    { key: "services", hash: "#services" },
    { key: "network", hash: "#network" },
    { key: "industries", menu: "industries" },
    { key: "contact", action: true },
  ];

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-gradient-to-b from-navy-950/70 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-4">
          <button data-testid="header-logo" onClick={() => go("#home")} aria-label="Artamedia home">
            <Logo tone="dark" withTagline={!scrolled} />
          </button>

          <nav className="hidden xl:flex items-center gap-7">
            {links.map((l) =>
              l.menu ? (
                <div key={l.key} className="relative group">
                  <button
                    data-testid={`header-nav-link-${l.key}`}
                    className="flex items-center gap-1 text-[13.5px] font-medium text-slate-200 hover:text-brand-green2 transition-colors py-2"
                  >
                    {t.nav[l.key]}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-56 rounded-2xl bg-navy-900/95 backdrop-blur-xl border border-white/10 p-2 shadow-2xl shadow-black/40">
                      {DROPDOWN_TARGETS[l.menu](t).map(([label, hash]) => (
                        <button
                          key={label}
                          onClick={() => go(hash)}
                          className="w-full text-left px-4 py-2.5 rounded-xl text-[13px] text-slate-300 hover:text-brand-green2 hover:bg-white/5 transition-colors"
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={l.key}
                  data-testid={`header-nav-link-${l.key}`}
                  onClick={() => (l.action ? openContact() : go(l.hash))}
                  className={`relative text-[14.5px] font-medium transition-colors ${
                    active === l.key ? "text-white" : "text-slate-200 hover:text-brand-green2"
                  }`}
                >
                  {t.nav[l.key]}
                  {active === l.key && (
                    <span
                      data-testid={`nav-active-indicator-${l.key}`}
                      className="absolute -bottom-2 left-0 right-0 h-[2.5px] rounded-full bg-brand-green"
                    />
                  )}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <button
              data-testid="header-search-btn"
              aria-label="Search"
              className="hidden md:flex w-10 h-10 rounded-full items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <Search className="w-[19px] h-[19px]" strokeWidth={2} />
            </button>
            <div className="hidden md:block">
              <LangToggle tone="dark" testId="header-lang-toggle" />
            </div>
            <button
              data-testid="header-contact-btn"
              onClick={openContact}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-green2 text-navy-950 text-[13.5px] font-bold pl-5 pr-4 py-2.5 transition-all duration-300 hover:shadow-[0_0_28px_rgba(0,166,81,0.45)]"
            >
              {t.nav.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              data-testid="mobile-menu-btn"
              className="xl:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-2xl xl:hidden pt-28 px-6 pb-10 flex flex-col"
          >
            <div className="flex flex-col gap-1 overflow-y-auto">
              {links.map((l, i) => (
                <motion.button
                  key={l.key}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  data-testid={`mobile-nav-link-${l.key}`}
                  onClick={() => (l.action ? (setMobileOpen(false), openContact()) : go(l.hash))}
                  className="text-left font-display text-3xl font-bold text-white py-3 border-b border-white/10 hover:text-brand-green2 transition-colors"
                >
                  {t.nav[l.key]}
                </motion.button>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-8">
              <LangToggle tone="dark" testId="mobile-lang-toggle" />
              <button
                data-testid="mobile-contact-btn"
                onClick={() => {
                  setMobileOpen(false);
                  openContact();
                }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green text-navy-950 text-sm font-semibold px-6 py-3"
              >
                {t.nav.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
