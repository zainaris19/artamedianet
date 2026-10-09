import { ArrowRight } from "lucide-react";
import { useContact } from "../../context/LanguageContext";

export const WRAP = "max-w-[1280px] mx-auto px-6 lg:px-10";
export const SERVICE = "Broadband Internet";

export const BbEyebrow = ({ children, dark = false, className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <span className="h-[2px] w-7 rounded-full bg-bb-green" />
    <span className={`text-[11px] font-extrabold tracking-[0.2em] uppercase ${dark ? "text-white/85" : "text-bb-navy"}`}>
      {children}
    </span>
  </div>
);

export function QuoteButton({ label, testId, className = "", variant = "solid" }) {
  const { openContact } = useContact();
  const styles = {
    solid: "bg-bb-blue hover:bg-[#0F55D6] text-white shadow-[0_10px_24px_-10px_rgba(20,99,243,0.7)]",
    outline: "border-[1.5px] border-bb-blue/70 text-bb-navy bg-white hover:bg-bb-sky",
    white: "bg-white text-bb-navy hover:bg-slate-100",
  };
  return (
    <button
      data-testid={testId}
      onClick={() => openContact(SERVICE)}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md px-6 py-3.5 text-[14px] font-bold transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {label}
      {variant === "solid" && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
}
