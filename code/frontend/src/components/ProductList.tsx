import { T, useList } from "../editable";

type Product = { name: string; detail: string };

export default function ProductList() {
  const products = useList<Product>("products.items");

  return (
    <section id="products" className="py-28 md:py-36">
      <T k="products.heading" as="h2" className="font-display text-5xl font-bold tracking-[var(--tracking-display)] md:text-7xl" />
      <div className="mt-14 divide-y divide-line rounded bg-surface px-6 md:px-10">
        {products.map((product, index) => (
          <article key={product.name} className="grid gap-3 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-10">
            <T k={`products.items.${index}.name`} as="h3" className="font-display text-3xl font-bold tracking-[var(--tracking-display)]" />
            <T k={`products.items.${index}.detail`} as="p" className="max-w-[42ch] text-lg leading-8 text-ink-soft" />
          </article>
        ))}
      </div>
    </section>
  );
}
