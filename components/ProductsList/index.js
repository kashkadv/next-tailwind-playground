"use client";

import { useStoreContext } from "@/context/StoreProvider";
import React from "react";

export default function ProductsList() {
  return (
    <div>
      <div>
        <div>Title</div>
        <ProductControl />
      </div>
    </div>
  );
}

function ProductControl() {
  const { cartControls } = useStoreContext();

  return (
    <div
      onClick={() =>
        cartControls.addToCart(
          Math.round(Math.random() * 10),
          Math.round(Math.random() * 1000),
        )
      }
    >
      Add To Cart
    </div>
  );
}
