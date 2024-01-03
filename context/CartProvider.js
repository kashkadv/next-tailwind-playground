"use client";

import { disableScroll, enableScroll } from "@/helpers/dom";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (mounted) {
      opened ? disableScroll() : enableScroll();
    }

    if (!mounted) {
      setMounted(true);
    }
  }, [opened]);

  const context = {
    opened,
    setOpened,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
