import { T } from "../editable";

export default function StoreVisit() {
  return (
    <section id="store" className="grid gap-10 py-28 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-36">
      <div>
        <T k="store.heading" as="h2" className="font-display text-5xl font-bold tracking-[var(--tracking-display)] md:text-7xl" />
        <T k="store.line" as="p" className="mt-7 max-w-[34ch] text-xl leading-9 text-ink-soft" />
        <T k="store.cta.label" as="a" href="tel:+84000000000" className="mt-10 inline-flex rounded bg-accent px-7 py-4 font-semibold text-accent-ink focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-accent" />
      </div>
      <figure className="flex aspect-[4/3] items-end rounded bg-surface p-6">
        <T k="store.caption" as="figcaption" className="text-sm text-ink-soft" />
      </figure>
    </section>
  );
}
