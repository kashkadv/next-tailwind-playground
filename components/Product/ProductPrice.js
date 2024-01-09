"use client";

import { useStoreContext } from "@/context/StoreProvider";
import { buildFullPrices } from "@/helpers/price";

export default function ProductPrice({ data }) {
  const { currentRegion, settings, handleChangeRegion } = useStoreContext();

  const regions = settings[0].regions;
  const rate = regions.filter((region) => region.title == currentRegion);

  return <div>{buildFullPrices(data.base_price, data.sizes, rate[0])}</div>;
}
