"use client";

import { useProductContext } from "@/context/ProductProvider";
import { useStoreContext } from "@/context/StoreProvider";
import Link from "next/link";

export default function ProductInfoCatalog({ children }) {
  const { slug, stock, sizes } = useProductContext();
  const { hideOutOfStock } = useStoreContext();

  if (hideOutOfStock && sizes.length) {
    const inStock = sizes.filter((size) => size.stock > 0);
    if (inStock.length == 0) return;
  }

  if (hideOutOfStock && !sizes.length) {
    if (!stock) return;
  }

  return (
    <div className="translate-y-[20px] opacity-0">
      <Link
        className="flex flex-col justify-between gap-4 rounded-lg bg-white p-6 transition-all hover:shadow-lg"
        href={`/product/${slug}`}
      >
        {children}
      </Link>
    </div>
  );
}
