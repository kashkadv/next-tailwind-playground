"use client";

import { buildFullPrices } from "@/helpers/price";
import { getCheapestSize } from "@/helpers/size";

import { createContext, useCallback, useContext, useState } from "react";
import { useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children, product, locale }) => {
  const { sizes, base_price, slug, image, title, category, stock } = product;

  let inititalSize = false;
  if (sizes.length) {
    inititalSize = getCheapestSize(sizes);
  }

  const inititalPrice = inititalSize
    ? Number(base_price) + Number(inititalSize.additional_price)
    : Number(base_price);

  const [price, setPrice] = useState(inititalPrice);
  const [selectedSize, setSelectedSize] = useState(inititalSize);

  const [priceRange, setPriceRange] = useState(false);
  useEffect(() => {
    const regionInfo = JSON.parse(localStorage.getItem("region-info"));
    setPriceRange(buildFullPrices(base_price, sizes, regionInfo[0]));
  }, []);

  const name = title ?? category.productTitle;

  const context = {
    price,
    selectedSize,
    slug,
    image,
    name,
    priceRange,
    sizes,
    stock,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
