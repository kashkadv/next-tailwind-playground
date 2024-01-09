import CategoryHero, { CategoryHeroLoading } from "@/components/CategoryHero";
import { ProductsList, ProductsListLoading } from "@/components/ProductsList";
import { Suspense } from "react";

export default async function CategoryPage({ slug }) {
  return (
    <>
      <Suspense fallback={<CategoryHeroLoading />}>
        <CategoryHero slug={slug} />
      </Suspense>
      <div className="section pt-20">
        <Suspense fallback={<ProductsListLoading />}>
          <ProductsList slug={slug} />
        </Suspense>
      </div>
    </>
  );
}
