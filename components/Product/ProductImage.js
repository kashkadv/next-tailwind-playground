"use client";

import { useProductContext } from "@/context/ProductProvider";
import placeholder from "../../public/images/image-placeholder.png";
import Image from "next/image";

export const ProductImage = () => {
  const { image, name } = useProductContext();

  return (
    <div className="relative aspect-[3/4] w-full">
      <Image
        alt={name}
        src={image}
        fill
        style={{ objectFit: "cover" }}
        blurDataURL={placeholder.src}
        placeholder="blur"
      />
    </div>
  );
};
