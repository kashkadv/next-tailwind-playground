"use client";

import { disableScroll, enableScroll } from "@/helpers/dom";
import { createContext, useCallback, useContext, useState } from "react";
import { useEffect } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState("closed");

  const [cartData, setCartData] = useState({
    totalSum: 0,
    totalCount: 0,
    items: [],
  });

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    status == "opened" ? disableScroll() : enableScroll();
  }, [status]);

  const cartControls = {
    addToCart: useCallback(
      (key, price) => {
        let items = [...cartData.items];

        const index = items.findIndex((product) => product.key == key);
        if (index !== -1) {
          items[index].q += 1;
        } else {
          const newItem = { key, q: 1, p: price };
          items.push(newItem);
        }

        const updatedTotals = cartControls.countTotals(items);

        cartControls.updateCart({
          totalSum: updatedTotals.sum,
          totalCount: updatedTotals.count,
          items,
        });
      },
      [cartData],
    ),
    countTotals: useCallback((items) => {
      const totals = {
        count: 0,
        sum: 0,
      };

      items.forEach((product) => {
        totals.count += product.q;
        totals.sum += product.q * product.p;
      });

      return totals;
    }),
    updateCart: useCallback((cart) => {
      setCartData(cart);
    }),
  };

  const context = {
    status,
    setStatus,
    cartData,
    cartControls,
  };

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
