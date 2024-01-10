"use client";

import { useProductContext } from "@/context/ProductProvider";

export const ProductName = () => {
  const { name } = useProductContext();
  return <div>{name}</div>;
};
