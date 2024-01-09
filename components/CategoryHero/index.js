import { wait } from "@/data/helpers";
import { sanity } from "@/data/sanity";
import React from "react";
import GsapBatchWrapper from "../Gsap/GsapBatchWrapper";

export default async function CategoryHero({ slug }) {
  const res = await sanity.getCategoryBySlug(slug);
  const data = res[0];

  return (
    <div className="mt-12 grid p-16 xl:grid-cols-6">
      <GsapBatchWrapper
        type="slideInRight"
        classes="col-span-4 col-start-1 flex flex-col justify-center"
      >
        <h1 className="opacity-0">{data.title}</h1>
        <p className="font-subtitle text-xl font-normal leading-relaxed tracking-wider opacity-0">
          {data.description}
        </p>
      </GsapBatchWrapper>
    </div>
  );
}

export function CategoryHeroLoading() {
  return (
    <div className="section section--top grid xl:grid-cols-6">
      <div className="col-span-4 col-start-2 flex flex-col items-center justify-center">
        <div className="w-full animate-pulse text-left">
          <h1 className="h-24 w-1/3  bg-slate-200"></h1>
          <div className="w-1/2 space-y-3 font-primary text-lg font-light *:h-5 *:w-full *:bg-slate-200">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
