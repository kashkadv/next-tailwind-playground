"use client";

import { useStoreContext } from "@/context/StoreProvider";
import { buildFullPrices } from "@/helpers/price";

export default function ProductPriceRange({ data }) {
  const { currentRegion, settings } = useStoreContext();

  const regions = settings[0].regions;
  const rate = regions.filter((region) => region.title == currentRegion);

  if (!currentRegion) return <PriceLoading />;

  return (
    <div className="font-primary text-xl leading-none">
      {buildFullPrices(data.base_price, data.sizes, rate[0])}
    </div>
  );
}

function PriceLoading() {
  return <div className="h-6 w-20 animate-pulse bg-gray-200"></div>;
}
