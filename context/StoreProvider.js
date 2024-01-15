"use client";

import { disableScroll, enableScroll } from "@/helpers/dom";
import { createContext, useCallback, useContext, useState } from "react";
import { useEffect } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children, locale, settings }) => {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState("closed");
  const [hideOutOfStock, seThideOutOfStock] = useState(false);

  const handleHideOutOfStock = () => {
    seThideOutOfStock(!hideOutOfStock);
  };

  const defaultRegion = locale == "uk" ? "Ukraine" : "Other world";

  const [currentRegion, setCurrentRegion] = useState(false);
  useEffect(() => {
    const localStorageRegion = localStorage?.getItem("region");
    const region = localStorageRegion || defaultRegion;

    const regionInfo = settings[0].regions.filter((el) => el.title == region);

    localStorage.setItem("region-info", JSON.stringify(regionInfo));
    localStorage.setItem("locale", locale);

    if (!localStorageRegion) localStorage.setItem("region", region);
    setCurrentRegion(region);
  }, []);

  const handleChangeRegion = (newRegion) => {
    localStorage.setItem("region", newRegion);
    setCurrentRegion(newRegion);
  };

  const defaultUnits = "metrical";
  const [currentUnits, setCurrentUnits] = useState(false);

  useEffect(() => {
    const selectedUnits = localStorage?.getItem("units");

    if (selectedUnits) {
      setCurrentUnits(selectedUnits);
    } else {
      setCurrentUnits(defaultUnits);
      localStorage.setItem("units", defaultUnits);
    }
  }, []);

  const handleUnitsChange = (newUnits) => {
    localStorage.setItem("units", newUnits);
    setCurrentUnits(newUnits);
  };

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
    locale,
    status,
    setStatus,
    cartData,
    cartControls,
    currentRegion,
    settings,
    handleChangeRegion,
    currentUnits,
    hideOutOfStock,
    handleHideOutOfStock,
  };

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
