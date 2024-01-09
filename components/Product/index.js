"use client";

import Image from "next/image";
import placeholder from "../../public/images/image-placeholder.png";
import Link from "next/link";
import ProductPriceRange from "./ProductPriceRange";
import ProductSizeList from "./ProductSizeList";

export function Product({ data, type = "full" }) {
  return (
    <div className="translate-y-[100%] opacity-0">
      <Link
        className="flex flex-col justify-between gap-4 rounded-lg bg-white p-6 transition-all hover:shadow-lg"
        href={`/product/${data.slug}`}
      >
        <div className="relative aspect-[3/4] w-full">
          <Image
            alt={data.category.productTitle}
            src={data.image}
            fill
            style={{ objectFit: "cover" }}
            blurDataURL={placeholder.src}
            placeholder="blur"
          />
        </div>
        <div>
          <div className="mb-4 flex justify-between font-primary text-xl">
            {data.title ?? data.category.productTitle}
            <ProductPriceRange data={data} />
          </div>
          {data.sizes.length && <ProductSizeList data={data} />}
        </div>
      </Link>
    </div>
  );
}

export function ProductLoading({ type }) {
  return <div>Loading product</div>;
}
