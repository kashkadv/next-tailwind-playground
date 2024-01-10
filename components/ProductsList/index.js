import React from "react";
import { sanity } from "@/data/sanity";
import GsapBatchWrapper from "../Gsap/GsapBatchWrapper";
import ProductCard from "../Product/ProductCard";
import { ProductCardLoading } from "../Product/ProductCardLoading";
import ProductAvailabilityToggle from "../Product/ProductAvailabilityToggle";

export async function ProductsList({ slug }) {
  const res = await sanity.getCategoryBySlug(slug);
  const data = await sanity.getCategoryActiveProducts(res[0]._id);

  const filteredProductsBySlug = data.filter((product) => product.slug);

  return (
    <>
      <ProductAvailabilityToggle />
      <GsapBatchWrapper
        type="fadeIn"
        classes="grid grid-cols-4 gap-16 px-8 overflow-y-hidden pb-8"
        inViewportOnly
      >
        {filteredProductsBySlug.map((product) => (
          <ProductCard key={`list-product-${product._key}`} product={product}>
            <ProductCard.CatalogInfo>
              <ProductCard.Image />
              <ProductCard.CardInfoBlock>
                <ProductCard.Name />
                <ProductCard.PriceRange />
              </ProductCard.CardInfoBlock>
              <ProductCard.SizeList />
            </ProductCard.CatalogInfo>
          </ProductCard>
        ))}
      </GsapBatchWrapper>
    </>
  );
}

export function ProductsListLoading() {
  return (
    <div className="grid grid-cols-4 gap-16 overflow-y-hidden px-8">
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
    </div>
  );
}
