"use client";

import { useProductContext } from "@/context/ProductProvider";
import { useStoreContext } from "@/context/StoreProvider";
import { finalPrettyPrice } from "@/helpers/price";

export default function ProductPrice() {
  const { price } = useProductContext();
  const { currentRegion } = useStoreContext();

  console.log(currentRegion);

  return <div>1</div>;
}
