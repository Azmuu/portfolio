export default function SectionHeading({ label, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`mb-8 flex max-w-3xl flex-col gap-3 sm:mb-12 sm:gap-4 ${alignment}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-6 shrink-0 bg-accent sm:w-8" aria-hidden="true" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.28em]">
          {label}
        </span>
      </div>
      <h2 className="font-display text-[1.65rem] font-bold leading-tight tracking-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
