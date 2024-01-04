"use client";

import { disableScroll, enableScroll } from "@/helpers/dom";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState("closed");

  useEffect(() => {
    if (mounted && status == "opened") {
      disableScroll();
    }

    if (mounted && status == "closed") {
      enableScroll();
    }

    if (!mounted) {
      setMounted(true);
    }
  }, [status]);

  const context = {
    status,
    setStatus,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
