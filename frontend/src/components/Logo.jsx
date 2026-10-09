export function LogoMark({ className = "h-10 w-12" }) {
  return (
    <img
      src="/artamedia-mark.png"
      alt="Artamedia logo"
      className={`${className} object-contain`}
      data-testid="artamedia-logo-mark"
    />
  );
}

export default function Logo({ tone = "dark", withTagline = true, className = "" }) {
  const wordColor = tone === "dark" ? "text-white" : "text-brand-blue";
  return (
    <div className={`flex items-center gap-2.5 ${className}`} data-testid="artamedia-logo">
      <LogoMark className="h-9 w-11 shrink-0" />
      <div className="leading-none">
        <div className={`font-display font-extrabold text-[21px] tracking-tight ${wordColor}`}>
          artamedia
        </div>
        {withTagline && (
          <div className="text-[8.5px] font-semibold italic mt-1 text-brand-green">
            Get Connected. Always Connected.
          </div>
        )}
      </div>
    </div>
  );
}
