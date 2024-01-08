import { wait } from "@/data/helpers";
import React from "react";

export default async function CategoryHero() {
  await wait(5);
  return <div>index</div>;
}

export function CategoryHeroLoading() {
  return <div>Loading header</div>;
}
