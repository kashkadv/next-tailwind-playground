"use client";

import Image from "next/image";
import placeholder from "../../public/images/image-placeholder.png";
import Link from "next/link";
import ProductPriceRange from "./ProductPriceRange";
import ProductSizeList from "./ProductSizeList";

export function Product({ data, type = "full" }) {
  return (
    <div className="translate-y-[20px] opacity-0">
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
          <div className="flex justify-between font-primary text-xl">
            {data.title ?? data.category.productTitle}
            <ProductPriceRange data={data} />
          </div>
          {data.sizes.length ? <ProductSizeList data={data} /> : null}
        </div>
      </Link>
    </div>
  );
}

export function ProductLoading({ type }) {
  return (
    <div className="">
      <div className="flex flex-col justify-between gap-4 rounded-lg bg-white p-6">
        <div className="relative aspect-[3/4] w-full animate-pulse bg-gray-200"></div>
        <div className="grid animate-pulse grid-cols-4">
          <div className="h-6 w-full bg-gray-200"></div>
          <div className="col-end-5 h-6 w-full bg-gray-200"></div>
        </div>
        <div className="h-6 w-1/2 animate-pulse bg-gray-200"></div>
      </div>
    </div>
  );
}
