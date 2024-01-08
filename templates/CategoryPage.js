import CategoryHero, { CategoryHeroLoading } from "@/components/CategoryHero";
import { wait } from "@/data/helpers";
import { sanity } from "@/data/sanity";
import { Suspense } from "react";

export default async function CategoryPage({ slug }) {
  return (
    <>
      <Suspense fallback={<CategoryHeroLoading />}>
        <CategoryHero slug={slug} />
      </Suspense>
      <div>Products List</div>
    </>
  );
}
