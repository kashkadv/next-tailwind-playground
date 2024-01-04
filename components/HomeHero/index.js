import GsapBatchWrapper from "../Gsap/GsapBatchWrapper";
import { GsapFadeInWrapper } from "../Gsap/GsapFadeInWrapper";

export default function HomeHero() {
  return (
    <section className="grid min-h-dvh grid-cols-3">
      <GsapBatchWrapper
        type="slideInRight"
        classes="col-span-1 flex flex-col items-end h-full justify-center bg-gray-50 space-y-4 px-8 "
      >
        <div className="font-secondary min-w-max text-6xl ">Dive into</div>
        <div className="font-subtitle self-end">The world of GUSHKA</div>
        <div className="font-subtitle text-right text-lg">
          Experience the Carpathian embrace with each product
        </div>
        <div>Buttons</div>
      </GsapBatchWrapper>
      <GsapFadeInWrapper classes="col-span-2 bg-green-200">
        Video
      </GsapFadeInWrapper>
    </section>
  );
}

export function HomeHeroLoading() {
  return (
    <section className="flex min-h-dvh">
      <div className="grid h-full items-center">
        <span>Dive into the world of</span>
        <span>GUSHKA</span>
        <span>Experience the Carpathian embrace with each product.</span>
        <span>Buttons</span>
      </div>
      <div>Video</div>
    </section>
  );
}
