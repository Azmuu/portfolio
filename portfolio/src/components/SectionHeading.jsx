export default function SectionHeading({ label, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {label}
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
