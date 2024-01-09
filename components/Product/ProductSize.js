import { useStoreContext } from "@/context/StoreProvider";
import { prettifySize } from "@/helpers/size";

export default function ProductSize({ size }) {
  const { currentUnits, locale } = useStoreContext();

  if (!currentUnits) return <ProductSizeLoading />;

  return (
    <div className="font-semibold tracking-widest text-gray-400">
      {prettifySize(size.name, currentUnits, locale)}
    </div>
  );
}

export function ProductSizeLoading() {
  return <div className="h-4 w-1/2 animate-pulse bg-gray-200"></div>;
}
