"use client";

import { useProductContext } from "@/context/ProductProvider";

export const ProductPriceRange = () => {
  const { priceRange } = useProductContext();
  if (!priceRange) return <Loading />;
  return <div className="font-primary text-xl leading-none">{priceRange}</div>;
};

function Loading() {
  return <div className="h-6 w-1/3 animate-pulse bg-gray-200"></div>;
}
