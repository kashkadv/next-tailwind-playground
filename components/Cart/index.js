"use client";

import { CartProvider, useCartContext } from "@/context/CartProvider";
import CartIcon from "../../public/icons/cart-icon.svg";
import CloseIcon from "../../public/icons/close-icon.svg";
import Backdrop from "../Backdrop";
import { useEffect, useState } from "react";

export default function Cart() {
  return (
    <CartProvider>
      <CartToggle />
      <CartList />
    </CartProvider>
  );
}

const CartToggle = () => {
  const { setOpened } = useCartContext();

  return (
    <button onClick={() => setOpened(true)} className="flex h-16 items-center">
      <CartIcon className="h-8" />
    </button>
  );
};

const CartList = () => {
  const { opened, setOpened } = useCartContext();
  const [status, setStatus] = useState("closed");

  useEffect(() => {
    if (opened) setTimeout(() => setStatus("opened"), 100);
  }, [opened]);

  const closeCart = () => {
    setStatus("closing");
    setTimeout(() => {
      setOpened(false);
      setStatus("closed");
    }, 500);
  };

  const classes = {
    closed: "translate-x-full",
    opened: "animate-slideInLeft",
    closing: "animate-slideOutRight",
  };

  if (!opened) return null;

  return (
    <Backdrop clickEvent={() => closeCart()} status={status}>
      <div
        className={`z-2 no-scrollbar fixed right-0 top-0 h-lvh w-1/3 overflow-y-auto bg-white ${classes[status]}`}
      >
        <button onClick={() => closeCart()} className="flex h-16 items-center">
          <CloseIcon className="z-3 h-8" />
        </button>
        <div className="min-h-svh bg-slate-100"> 123</div>
        <div className="min-h-svh bg-slate-100"> 123</div>
      </div>
    </Backdrop>
  );
};
