import { wait } from "@/data/helpers";
import { sanity } from "@/data/sanity";
import { Suspense } from "react";
import { GsapSlideInWrapper } from "../Gsap/GsapSlideInWrapper";

import GushkaLogo from "../../public/icons/gushka-logo.svg";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden px-8 pb-8 lg:pt-32">
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
  const data = await sanity.getSettings();

  const social = data[0].social;
  const cols = data[0].footer;

  return (
    <GsapSlideInWrapper
      reverse
      classes="grid grid-cols-1 lg:grid-cols-5 *:tracking-wider"
    >
      <div className="order-2 col-span-2 space-y-6 pt-20 lg:order-1 lg:pt-0">
        <GushkaLogo className="h-4 transition-all lg:h-4 xl:h-3 2xl:h-6" />
        <div className="italic text-gray-400 xl:w-80 2xl:w-2/3">
          A quiet voice of the heart that longs for a touch of nature.
        </div>
        <ul className="flex space-x-4">
          {social.map((item, i) => (
            <li className="h-10 w-10" key={`social-link-${i}`}>
              <Link
                className="relative block h-10 w-10 text-red-500 transition-all hover:text-woodGreen"
                target="_blank"
                href={item.link}
              >
                <Image alt="Social link" src={item.src} fill />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid-col-1 order-1 col-span-3 grid justify-between sm:grid-cols-3 lg:order-2">
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
      <li className="mb-4 font-semibold max-sm:pt-10">{col.name_en}</li>
      {col.items.map((item) => (
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
