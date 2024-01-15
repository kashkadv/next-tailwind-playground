"use client";

import { useProductContext } from "@/context/ProductProvider";
import { prettifySize } from "@/helpers/size";

export default function ProductSingleInfo() {
  const { name, slug, articul, finalPrice, sizes, handleSizeChange } =
    useProductContext();

  return (
    <div className="grid">
      <h1 className="mb-0">{name}</h1>
      <span className="mb-8">{slug || articul}</span>
      <div>{finalPrice}</div>

      <div>Buy button</div>

      {sizes.map((size, i) => (
        <div onClick={() => handleSizeChange(i)}>{prettifySize(size.name)}</div>
      ))}
    </div>
  );
}
