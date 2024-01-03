"use client";

import { CartProvider, useCartContext } from "@/context/CartProvider";
import CartIcon from "../../public/icons/cart-icon.svg";
import CloseIcon from "../../public/icons/close-icon.svg";
import Backdrop from "../Backdrop";

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

  if (!opened) return;

  return (
    <Backdrop clickEvent={() => setOpened(false)} active={opened}>
      <div className="animate-slideInLeft z-2 fixed right-0 top-0 h-lvh w-1/2 overflow-y-auto bg-white">
        <button
          onClick={() => setOpened(false)}
          className="flex h-16 items-center"
        >
          <CloseIcon className="z-3 h-8" />
        </button>
        <div className="min-h-svh bg-red-500"> 123</div>
        <div className="min-h-svh bg-red-500"> 123</div>
      </div>
    </Backdrop>
  );
};
