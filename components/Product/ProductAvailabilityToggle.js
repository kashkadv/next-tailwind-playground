"use client";

import { useStoreContext } from "@/context/StoreProvider";

export default function ProductAvailabilityToggle() {
  const { handleHideOutOfStock } = useStoreContext();

  return (
    <div className="cursor-pointer p-8" onClick={handleHideOutOfStock}>
      Show in stock only
    </div>
  );
}
