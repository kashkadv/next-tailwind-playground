import { useStoreContext } from "@/context/StoreProvider";
import { prettifySize } from "@/helpers/size";
import { contentTranslations } from "@/translations/content";

export default function ProductSize({ size }) {
  const { currentUnits, locale } = useStoreContext();

  if (!currentUnits) return <ProductSizeLoading />;

  return (
    <div className="flex items-center gap-[6px] font-normal tracking-widest text-gray-400">
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
      title={
        stock
          ? contentTranslations.product[locale].availability.inStock
          : contentTranslations.product[locale].availability.outOfStock
      }
    ></div>
  );
}

export function ProductSizeLoading() {
  return <div className="h-4 w-1/2 animate-pulse bg-gray-200"></div>;
}
