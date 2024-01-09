"use client";

import Image from "next/image";
import placeholder from "../../public/images/image-placeholder.png";
import Link from "next/link";
import { buildFullPrices } from "@/helpers/price";
import ProductPrice from "./ProductPrice";

export function Product({ data, type = "full" }) {
  return (
    <Link
      className="rounded-lg bg-white p-4  transition-all hover:shadow-md"
      href={`/product/${data.slug}`}
    >
      <div className="relative mb-4 aspect-[3/4] w-full">
        <Image
          alt={data.category.productTitle}
          src={data.image}
          fill
          objectFit="cover"
          blurDataURL={placeholder.src}
          placeholder="blur"
        />
      </div>
      <div className="mb-4">Sizes</div>
      <div className="flex justify-between">
        <ProductPrice data={data} />
        <div>Button</div>
      </div>
    </Link>
  );
}

export function ProductLoading({ type }) {
  return <div>Loading product</div>;
}