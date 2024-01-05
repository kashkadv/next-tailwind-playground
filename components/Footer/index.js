import { wait } from "@/data/helpers";
import { sanity } from "@/data/sanity";
import { Suspense } from "react";
import { GsapSlideInWrapper } from "../Gsap/GsapSlideInWrapper";

import GushkaLogo from "../../public/icons/gushka-logo.svg";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto overflow-hidden px-8 pb-8 pt-16 sm:pt-24 lg:pt-32">
      <Suspense fallback={<NavigationLoading />}>
        <Navigation />
      </Suspense>
      <div className="mt-16 pt-4">
        <p className="text-center text-xs leading-5 tracking-wide">
          &copy; 2024 Gushka Wool. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

async function Navigation() {
  await wait(3);
  const data = await sanity.getSettings();

  const social = data[0].social;

  const col1 = data[0].menus.filter((menu) => menu.name_en == "For clients");
  const col2 = data[0].menus.filter((menu) => menu.name_en == "Shop");
  const col3 = data[0].menus.filter((menu) => menu.name_en == "Information");
  const cols = [col1, col2, col3];

  return (
    <GsapSlideInWrapper
      reverse
      duration={1}
      classes="grid grid-cols-5 *:tracking-wider"
    >
      <div className="col-span-2 space-y-6">
        <GushkaLogo className="h-4 transition-all lg:h-4 xl:h-3 2xl:h-6" />
        <div className="max-w-80 italic text-gray-400">
          A quiet voice of the heart that longs for a touch of nature.
        </div>
        <ul className="flex space-x-4">
          {social.map((item, i) => (
            <li className="h-10 w-10" key={`social-link-${i}`}>
              <Link
                className="hover:text-woodGreen relative block h-10 w-10 text-red-500 transition-all"
                target="_blank"
                href={item.link}
              >
                <Image alt="Social link" src={item.src} fill />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3 grid grid-cols-3 justify-between">
        {cols.map((col, i) => (
          <NavigationCol key={`footer-column-${i}`} col={col} />
        ))}
      </div>
    </GsapSlideInWrapper>
  );
}

function NavigationCol({ col }) {
  return (
    <ul className="space-y-2">
      <li className="mb-4 font-semibold">{col[0].name_en}</li>
      {col[0].items.map((item) => (
        <li key={item._key}>
          <Link className="hover:text-woodGreen" href={item.url}>
            {item.name_en}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function NavigationLoading() {
  return "Loading";
}
