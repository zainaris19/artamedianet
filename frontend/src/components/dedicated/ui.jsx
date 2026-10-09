import { ArrowRight, ImageIcon } from "lucide-react";
import { useContact, useLang } from "../../context/LanguageContext";

export const SERVICE = "Dedicated Internet";

export function DnButton({ label, testId, className = "", variant = "solid" }) {
  const { openContact } = useContact();
  const styles = {
    solid: "bg-bb-blue hover:bg-[#0F55D6] text-white shadow-[0_10px_24px_-10px_rgba(20,99,243,0.7)]",
    outline: "border-[1.5px] border-bb-blue/70 text-bb-navy bg-white hover:bg-bb-sky",
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

export function ImageSlot({ asset, dark = false, className = "" }) {
  const { t } = useLang();
  return (
    <div
      data-testid={`image-slot-${asset.id.toLowerCase()}`}
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed text-center p-6 ${
        dark ? "border-white/25 bg-white/[0.04] text-white/70" : "border-slate-300 bg-slate-100 text-slate-500"
      } ${className}`}
    >
      <ImageIcon className="w-8 h-8 opacity-70" />
      <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase">{t.dedicated.slot} · {asset.id}</span>
      <span className="text-[13px] font-semibold">{asset.label}</span>
      <span className="text-[11.5px] opacity-75">{t.dedicated.awaiting}</span>
    </div>
  );
}

export function DnImage({ asset, className = "", imgClass = "", dark = false }) {
  if (!asset.src) return <ImageSlot asset={asset} dark={dark} className={className} />;
  return (
    <div className={className}>
      <img src={asset.src} alt={asset.alt} className={`w-full h-full object-cover ${imgClass}`} />
    </div>
  );
}
