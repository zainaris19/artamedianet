import { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { LanguageProvider, ContactProvider, useContact, scrollToSection } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Network from "@/components/Network";
import Industries from "@/components/Industries";
import WhyArtamedia from "@/components/WhyArtamedia";
import Partners from "@/components/Partners";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import BroadbandBusiness from "@/pages/BroadbandBusiness";
import DedicatedNetwork from "@/pages/DedicatedNetwork";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-navy-950 flex items-center justify-center p-8">
          <p className="text-slate-300 font-display text-xl">Something went wrong. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = setTimeout(() => scrollToSection(hash), 350);
    return () => clearTimeout(id);
  }, [hash]);
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Network />
      <Industries />
      <WhyArtamedia />
      <Partners />
      <CtaSection />
    </main>
  );
}

function Shell() {
  const { open } = useContact();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.__navigate = navigate;
  }, [navigate]);

  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  return (
    <div className="bg-navy-950 min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/broadband-business" element={<BroadbandBusiness />} />
        <Route path="/services/dedicated-network" element={<DedicatedNetwork />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <ContactModal />
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ContactProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <Shell />
          </ErrorBoundary>
        </BrowserRouter>
      </ContactProvider>
    </LanguageProvider>
  );
}
