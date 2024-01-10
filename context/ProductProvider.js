"use client";

import { getCheapestSize } from "@/helpers/size";

import { createContext, useCallback, useContext, useState } from "react";
import { useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children, basePrice, sizes, locale }) => {
  let inititalSize = false;
  if (sizes.length) {
    inititalSize = getCheapestSize(sizes);
  }

  const inititalPrice = inititalSize
    ? Number(basePrice) + Number(inititalSize.additional_price)
    : Number(basePrice);

  const [price, setPrice] = useState(inititalPrice);
  const [selectedSize, setSelectedSize] = useState(inititalSize);

  const context = {
    price,
    selectedSize,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
