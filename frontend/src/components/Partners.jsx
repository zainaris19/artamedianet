import { Building2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "../context/LanguageContext";

const PARTNER_LOGOS = [
  ["/partner-01.png", "Ubiquiti"],
  ["/partner-02.png", "Mikrotik"],
  ["/partner-03.png", "Moratelindo"],
  ["/partner-04.png", "MNC Play"],
  ["/partner-05.png", "Telkom"],
  ["/partner-06.png", "Kementerian Kominfo"],
  ["/partner-07.png", "Lintasarta"],
  ["/partner-08.png", "Indosat Ooredoo"],
  ["/partner-09.png", "cPanel"],
  ["/partner-10.png", "Biznet"],
];

const CUSTOMER_LOGOS = [
  ["/customer-01.png", "AEP"],
  ["/customer-02.png", "Angel's Wing Bangka"],
  ["/customer-03.png", "Asyana Hotel"],
  ["/customer-04.png", "Brown & Spirits"],
  ["/customer-05.png", "Cipta Kridatama"],
  ["/customer-06.png", "DCConnect"],
  ["/customer-07.png", "Euronet"],
  ["/customer-08.png", "P.T. Evans Indonesia"],
  ["/customer-09.png", "ibis Hotels"],
  ["/customer-10.png", "Istana Agung Babel"],
  ["/customer-11.png", "Leaf Logo"],
  ["/customer-12.png", "Mega Anggrek"],
  ["/customer-13.png", "Mercure Hotels"],
  ["/customer-14.png", "Ninja Xpress"],
  ["/customer-15.png", "PC24 Telekomunikasi"],
  ["/customer-16.png", "Primacom"],
  ["/customer-17.png", "Q-Digital"],
  ["/customer-18.png", "Santika Indonesia Hotels & Resorts"],
  ["/customer-19.png", "P.T. Setiajaya Makmurindo"],
  ["/customer-20.png", "SNS Group"],
  ["/customer-21.png", "Swiss-Belhotel"],
  ["/customer-22.png", "Timah"],
  ["/customer-23.png", "Universitas Muhammadiyah Bangka Belitung"],
];

function LogoStrip({ logos, label, testId, placeholders = 0 }) {
  const items = logos.length > 0 ? [...logos, ...logos] : null;
  const ghostItems = Array.from({ length: placeholders * 2 });
  return (
    <div className="relative overflow-hidden py-2" data-testid={testId}>
      {items ? (
        <div className="marquee-track flex w-max animate-marquee items-center">
          {items.map(([src, name], i) => (
            <div key={i} className="flex items-center shrink-0 px-9 sm:px-12" aria-hidden={i >= logos.length}>
              <img
                src={src}
                alt={name}
                className="h-8 sm:h-10 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="marquee-track flex w-max animate-marquee items-center">
          {ghostItems.map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 w-44 h-16 mx-3 rounded-xl border-2 border-dashed border-slate-200 bg-white/60"
              aria-hidden="true"
            >
              <Building2 className="w-6 h-6 text-slate-300" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      )}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#EEF3F8] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#EEF3F8] to-transparent pointer-events-none" />
    </div>
  );
}

export default function Partners() {
  const { t } = useLang();
  return (
    <section data-testid="partners-section" className="bg-[#EEF3F8] border-t border-slate-300 pt-12 pb-20 lg:pb-24">
      <div className="max-w-[1600px] mx-auto px-[5%]">
        <Reveal>
          <p className="text-center font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400">
            {t.partners.trusted}
          </p>
          <LogoStrip logos={PARTNER_LOGOS} testId="trusted-marquee" />
        </Reveal>

        <Reveal delay={0.05} className="mt-10 pt-10 border-t border-slate-300/80">
          <p className="text-center font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400">
            {t.partners.customers}
          </p>
          <LogoStrip logos={CUSTOMER_LOGOS} testId="customers-marquee" placeholders={5} />
        </Reveal>
      </div>
    </section>
  );
}
