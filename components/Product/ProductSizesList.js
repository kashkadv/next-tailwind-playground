"use client";

import { useProductContext } from "@/context/ProductProvider";
import { useStoreContext } from "@/context/StoreProvider";
import { prettifySize } from "@/helpers/size";
import { contentTranslations } from "@/translations/content";

export const ProductSizesList = () => {
  const { sizes, slug } = useProductContext();

  if (!sizes.length) return;

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size, i) => (
        <Size key={`${slug}-size-${i}`} size={size} />
      ))}
    </div>
  );
};

function Size({ size }) {
  const { locale, currentUnits } = useStoreContext();

  if (!locale || !currentUnits) return <Loading />;

  const title =
    contentTranslations.product[locale].availability[
      size.stock ? "inStock" : "outOfStock"
    ];

  return (
    <div
      title={title}
      className="flex items-center gap-[6px] font-normal tracking-widest text-gray-600"
    >
      <AvailabilityLabel stock={size.stock} locale={locale} />
      {prettifySize(size.name, currentUnits, locale)}
    </div>
  );
}

function AvailabilityLabel({ stock, locale }) {
  return (
    <div
      className={`h-2 w-2 rounded-full ${
        stock ? "bg-green-200" : "bg-gray-200"
      }`}
    ></div>
  );
}

export function Loading() {
  return <div className="h-4 w-1/4 animate-pulse bg-gray-200"></div>;
}
