import { T, useList } from "./editable";
import ProductList from "./components/ProductList";
import StoreVisit from "./components/StoreVisit";

type Link = { label: string; href: string };

export default function App() {
  const links = useList<Link>("nav.links");

  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <header className="mx-auto flex max-w-page items-center justify-between px-[var(--gutter)] py-6">
        <T k="site.name" as="a" href="/" className="font-display text-lg font-bold tracking-[var(--tracking-display)] focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-accent" />
        <nav className="flex items-center gap-6 text-sm font-semibold">
          {links.map((link, index) => (
            <T key={link.href} k={`nav.links.${index}.label`} as="a" href={link.href} className="hidden text-ink-soft focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-accent sm:inline" />
          ))}
          <T k="nav.cta.label" as="a" href="tel:+84000000000" className="rounded bg-accent px-4 py-2 text-accent-ink focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-accent" />
        </nav>
      </header>
      <main className="mx-auto max-w-page px-[var(--gutter)]">
        <section className="py-28 md:py-40">
          <T k="hero.headline" as="h1" className="max-w-[10ch] font-display text-[clamp(64px,13vw,168px)] font-bold leading-none tracking-[var(--tracking-display)]" />
          <T k="hero.sub" as="p" className="mt-8 max-w-[46ch] text-2xl leading-10 text-ink-soft" />
          <T k="hero.cta.label" as="a" href="#products" className="mt-12 inline-flex rounded bg-accent px-7 py-4 font-semibold text-accent-ink focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-accent" />
        </section>
        <ProductList />
        <StoreVisit />
      </main>
      <footer className="mx-auto max-w-page border-t border-line px-[var(--gutter)] py-12 text-sm text-ink-soft">
        <T k="footer.line" />
      </footer>
    </div>
  );
}
