import React from "react";
import { Product, ProductLoading } from "../Product";
import { sanity } from "@/data/sanity";
import GsapBatchWrapper from "../Gsap/GsapBatchWrapper";

export async function ProductsList({ slug }) {
  const res = await sanity.getCategoryBySlug(slug);
  const data = await sanity.getCategoryActiveProducts(res[0]._id);

  return (
    <GsapBatchWrapper
      type="fadeIn"
      classes="grid grid-cols-4 gap-16 px-8 overflow-y-hidden"
      inViewportOnly
    >
      {data.map((product) => (
        <Product key={`list-product-${product._key}`} data={product} />
      ))}
    </GsapBatchWrapper>
  );
}

export function ProductsListLoading() {
  return (
    <div className="grid grid-cols-4">
      <ProductLoading />
      <ProductLoading />
      <ProductLoading />
    </div>
  );
}
