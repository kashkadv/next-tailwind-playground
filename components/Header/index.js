import { sanity } from "@/data/sanity";
import Link from "next/link";

import GushkaLogo from "../../public/icons/gushka-logo.svg";
import Cart from "../Cart";

export const Header = async function () {
  const res = await sanity.getMenus();

  const topNavMenu = res[0].menus.filter((menu) => menu.name_en == "Shop");
  const topNavItems = topNavMenu?.at(0)?.items;

  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between bg-stone-100/50 px-8 backdrop-blur-[2px] 2xl:h-20">
      <div className="flex items-center space-x-20 lg:space-x-12 2xl:space-x-20">
        <Link href="/">
          <GushkaLogo className="h-4 transition-all hover:text-green-900 lg:h-4 xl:h-3 2xl:h-6" />
        </Link>
        <nav>
          <ul className="hidden space-x-8 lg:flex">
            {topNavItems.map((item, i) => (
              <li className="group" key={`header-nav-${i}`}>
                <Link
                  className="group-hover:animate-bounceUp group-hover:text-woodGreen flex h-16 items-center font-medium tracking-wider transition-all lg:text-sm 2xl:text-lg 2xl:font-normal"
                  href={item.url}
                >
                  {item.name_en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Cart />
    </header>
  );
};

export const HeaderLoading = () => (
  <div className="flex h-16 w-full animate-pulse items-center justify-between bg-stone-100 px-8">
    <div className="h-5 w-1/6 bg-stone-300">1</div>
    <div className="h-5 w-2/4 bg-stone-300">2</div>
  </div>
);
