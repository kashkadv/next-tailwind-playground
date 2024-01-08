import CategoryHero, { CategoryHeroLoading } from "@/components/CategoryHero";
import { wait } from "@/data/helpers";
import { Suspense } from "react";

export default async function CategoryPage() {
  await wait(2);
  return (
    <section className="section section--top">
      <Suspense fallback={<CategoryHeroLoading />}>
        <CategoryHero />
      </Suspense>
      <div>Products List</div>
    </section>
  );
}
