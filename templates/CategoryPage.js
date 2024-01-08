import CategoryHero, { CategoryHeroLoading } from "@/components/CategoryHero";
import ProductsList from "@/components/ProductsList";
import { Suspense } from "react";

export default async function CategoryPage({ slug }) {
  return (
    <>
      <Suspense fallback={<CategoryHeroLoading />}>
        <CategoryHero slug={slug} />
      </Suspense>
      <div className="section">
        <ProductsList />
      </div>
    </>
  );
}
