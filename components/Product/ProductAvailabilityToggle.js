"use client";

import { useStoreContext } from "@/context/StoreProvider";
import { contentTranslations } from "@/translations/content";

export default function ProductAvailabilityToggle() {
  const { handleHideOutOfStock, hideOutOfStock, locale } = useStoreContext();

  return (
    <div
      className="cursor-pointer space-x-4 p-8"
      onClick={handleHideOutOfStock}
    >
      <span className="mr-4">
        {contentTranslations.product[locale].availability.hideOutOfStockLabel}:
      </span>
      <span className={`${hideOutOfStock && "border-b border-black"}`}>
        {contentTranslations.other[locale].yes}
      </span>
      <span className="text-gray-600">|</span>
      <span className={`${!hideOutOfStock && "border-b border-black"}`}>
        {contentTranslations.other[locale].no}
      </span>
    </div>
  );
}
