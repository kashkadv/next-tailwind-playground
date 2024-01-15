"use client";

import {
  buildFullPrices,
  countSizePrice,
  finalPrettyPrice,
} from "@/helpers/price";
import { getCheapestSize } from "@/helpers/size";

import { createContext, useCallback, useContext, useState } from "react";
import { useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children, product }) => {
  const {
    sizes,
    base_price,
    slug,
    image,
    gallery,
    title,
    category,
    stock,
    articul,
  } = product;

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

  const [finalPrice, setFinalPrice] = useState(false);
  useEffect(() => {
    const currency = JSON.parse(localStorage.getItem("region-info"));
    setFinalPrice(finalPrettyPrice(price, currency.at(0)));
  }, []);

  const handleSizeChange = (index) => {
    const newSize = sizes.at(index);
    const newPrice = Number(base_price) + Number(newSize.additional_price);
    const newFinalPrice = finalPrettyPrice(newPrice);

    setSelectedSize(newSize);
    setPrice(newPrice);
    setFinalPrice(newFinalPrice);
  };

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
    articul,
    finalPrice,
    gallery,
    handleSizeChange,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
