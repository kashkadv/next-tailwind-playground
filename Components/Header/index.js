import { sanity } from "@/data/sanity";
import Link from "next/link";

import GushkaLogo from "../../public/icons/gushka-logo.svg";
import CartIcon from "../../public/icons/cart-icon.svg";

export const Header = async function () {
  const res = await sanity.getMenus();

  const topNavMenu = res[0].menus.filter((menu) => menu.name_en == "Shop");
  const topNavItems = topNavMenu?.at(0)?.items;

  return (
    <header className="flex h-16 w-full items-center justify-between px-8">
      <div className="flex items-center space-x-20">
        <Link href="/">
          <GushkaLogo className="h-4 transition-all hover:text-green-900" />
        </Link>
        <nav>
          <ul className="flex space-x-8">
            {topNavItems.map((item, i) => (
              <li key={`header-nav-${i}`}>
                <Link
                  className="flex h-16 items-center font-medium"
                  href={item.url}
                >
                  {item.name_en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button className="flex h-16 items-center">
        <CartIcon className="h-8" />
      </button>
    </header>
  );
};

export const HeaderLoading = () => (
  <div className="flex h-16 w-full animate-pulse items-center justify-between bg-stone-100 px-8">
    <div className="h-5 w-1/6 bg-stone-300"></div>
    <div className="h-5 w-2/4 bg-stone-300"></div>
  </div>
);
