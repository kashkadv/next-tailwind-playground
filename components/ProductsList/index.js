import React from "react";
import { Product, ProductLoading } from "../Product";
import { sanity } from "@/data/sanity";

export async function ProductsList({ slug }) {
  const res = await sanity.getCategoryBySlug(slug);
  const data = await sanity.getCategoryActiveProducts(res[0]._id);

  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-8">
      {data.map((product) => (
        <Product key={`list-product-${product._key}`} data={product} />
      ))}
    </div>
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
