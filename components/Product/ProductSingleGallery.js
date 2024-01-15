"use client";

import { useProductContext } from "@/context/ProductProvider";
import placeholder from "../../public/images/image-placeholder.png";
import Image from "next/image";

export default function ProductSingleGallery() {
  const { gallery } = useProductContext();

  return (
    <div className="relative grid aspect-square grid-cols-1 overflow-x-hidden overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {gallery.map((src, i) => (
        <div className="relative aspect-[3/4]">
          <Image
            src={src}
            fill
            className="h-auto w-full scale-[102%] object-cover"
            blurDataURL={placeholder.src}
            placeholder="blur"
          />
        </div>
      ))}
    </div>
  );
}
