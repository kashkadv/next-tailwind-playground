import HomeHero, { HomeHeroLoading } from "@/components/HomeHero";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<HomeHeroLoading />}>
      <HomeHero />
    </Suspense>
  );
}
