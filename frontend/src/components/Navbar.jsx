import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Search } from "lucide-react";
import Logo from "./Logo";
import { useLang, useContact, scrollToSection, LangToggle } from "../context/LanguageContext";

const DROPDOWN_TARGETS = {
  company: (t) => t.nav.companyMenu,
  services: (t) => t.nav.servicesMenu,
  industries: (t) => t.industries.cards.map((c) => [c, "#industries"]),
};

const SECTION_IDS = { home: "home", services: "services", network: "network", industries: "industries" };

export default function Navbar() {
  const { t } = useLang();
  const { openContact } = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const light = pathname !== "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = window.location.pathname === "/" ? "home" : "services";
      Object.entries(SECTION_IDS).forEach(([key, id]) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 180 <= window.scrollY) current = key;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

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
    { key: "services", menu: "services", hash: "#services" },
    { key: "network", hash: "#network" },
    { key: "industries", menu: "industries" },
    { key: "contact", action: true },
  ];

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          light
            ? `bg-white/95 backdrop-blur-xl border-b border-slate-200/80 ${scrolled ? "py-3 shadow-[0_8px_30px_-12px_rgba(11,29,69,0.18)]" : "py-4"}`
            : scrolled
            ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-gradient-to-b from-navy-950/70 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-4">
          <button data-testid="header-logo" onClick={() => go("#home")} aria-label="Artamedia home">
            <Logo tone={light ? "light" : "dark"} withTagline={!scrolled && !light} />
          </button>

          <nav className="hidden xl:flex items-center gap-7">
            {links.map((l) =>
              l.menu ? (
                <div key={l.key} className="relative group">
                  <button
                    data-testid={`header-nav-link-${l.key}`}
                    className={`relative flex items-center gap-1 text-[13.5px] font-medium transition-colors py-2 ${
                      light ? (active === l.key ? "text-bb-navy" : "text-slate-700 hover:text-bb-blue") : "text-slate-200 hover:text-brand-green2"
                    }`}
                  >
                    {t.nav[l.key]}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    {light && active === l.key && (
                      <span data-testid={`nav-active-indicator-${l.key}`} className="absolute bottom-0 left-0 right-4 h-[2.5px] rounded-full bg-bb-blue" />
                    )}
                  </button>
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    <div className={`w-56 rounded-2xl backdrop-blur-xl border p-2 shadow-2xl ${light ? "bg-white border-slate-200 shadow-slate-900/10" : "bg-navy-900/95 border-white/10 shadow-black/40"}`}>
                      {DROPDOWN_TARGETS[l.menu](t).map(([label, hash]) => (
                        <button
                          key={label}
                          data-testid={`header-dropdown-${l.menu}-${hash.replace(/[^a-z]/g, "")}`}
                          onClick={() => go(hash)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-[13px] transition-colors ${light ? "text-slate-700 hover:text-bb-blue hover:bg-bb-sky" : "text-slate-300 hover:text-brand-green2 hover:bg-white/5"}`}
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
                    light ? "text-slate-700 hover:text-bb-blue" : active === l.key ? "text-white" : "text-slate-200 hover:text-brand-green2"
                  }`}
                >
                  {t.nav[l.key]}
                  {!light && active === l.key && (
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
              className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center transition-colors ${light ? "text-bb-navy hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
            >
              <Search className="w-[19px] h-[19px]" strokeWidth={2} />
            </button>
            <div className="hidden md:block">
              <LangToggle tone={light ? "light" : "dark"} testId="header-lang-toggle" />
            </div>
            <button
              data-testid="header-contact-btn"
              onClick={() => openContact(light ? "Broadband Internet" : undefined)}
              className={
                light
                  ? "hidden sm:inline-flex items-center gap-2 rounded-md bg-bb-blue hover:bg-[#0F55D6] text-white text-[13.5px] font-semibold pl-5 pr-4 py-2.5 transition-colors duration-300"
                  : "hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-green2 text-navy-950 text-[13.5px] font-bold pl-5 pr-4 py-2.5 transition-all duration-300 hover:shadow-[0_0_28px_rgba(0,166,81,0.45)]"
              }
            >
              {light ? t.nav.quote : t.nav.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              data-testid="mobile-menu-btn"
              className={`xl:hidden p-2 ${light && !mobileOpen ? "text-bb-navy" : "text-white"}`}
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
                <div key={l.key}>
                <motion.button
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  data-testid={`mobile-nav-link-${l.key}`}
                  onClick={() => (l.action ? (setMobileOpen(false), openContact()) : go(l.hash || DROPDOWN_TARGETS[l.menu](t)[0][1]))}
                  className="text-left font-display text-3xl font-bold text-white py-3 border-b border-white/10 hover:text-brand-green2 transition-colors"
                >
                  {t.nav[l.key]}
                </motion.button>
                {l.key === "services" && (
                  <button
                    data-testid="mobile-nav-link-broadband"
                    onClick={() => go(t.nav.servicesMenu[1][1])}
                    className="block w-full text-left font-display text-lg font-semibold text-slate-300 py-2.5 pl-4 border-b border-white/10 hover:text-brand-green2 transition-colors"
                  >
                    {t.nav.servicesMenu[1][0]}
                  </button>
                )}
                </div>
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
