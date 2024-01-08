"use client";

import CartIcon from "../../public/icons/shopping-bag-icon.svg";
import CloseIcon from "../../public/icons/close-icon.svg";
import Backdrop from "../Backdrop";
import { useStoreContext } from "@/context/StoreProvider";

export default function Cart() {
  return (
    <>
      <CartToggle />
      <CartList />
    </>
  );
}

const CartToggle = () => {
  const { cartData, setStatus } = useStoreContext();

  return (
    <button
      onClick={() => setStatus("opened")}
      className="group flex h-full items-center"
    >
      {cartData.totalCount} - {cartData.totalSum}
      <CartIcon className="h-7 transition-all group-hover:text-woodGreen lg:h-6 xl:h-1/2" />
    </button>
  );
};

const CartList = () => {
  const { status, setStatus } = useStoreContext();

  const closeCart = () => {
    setStatus("closing");
    setTimeout(() => {
      setStatus("closed");
    }, 450);
  };

  const classes = {
    closed: "translate-x-full",
    opened: "animate-slideInLeft",
    closing: "animate-slideOutRight",
  };

  if (status == "closed") return;

  return (
    <Backdrop clickEvent={() => closeCart()} status={status}>
      <div
        className={`z-2 no-scrollbar fixed right-0 top-0 h-lvh w-1/3 overflow-y-auto bg-white ${classes[status]}`}
      >
        <button onClick={() => closeCart()} className="flex h-16 items-center">
          <CloseIcon className="z-3 h-8" />
        </button>
        <div className="min-h-svh"> 123</div>
      </div>
    </Backdrop>
  );
};
