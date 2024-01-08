import { staticContent } from "@/data/static";
import GsapBatchWrapper from "../Gsap/GsapBatchWrapper";
import { GsapFadeInWrapper } from "../Gsap/GsapFadeInWrapper";

export default async function HomeHero() {
  const content = await staticContent.homePageData("en");

  return (
    <section className="relative grid min-h-dvh grid-cols-3 max-md:grid-cols-1">
      <GsapBatchWrapper
        type="slideInRight"
        classes="max-md:pt-20 col-span-1 flex flex-col items-end h-full justify-center space-y-3 lg:space-y-4 2xl:space-y-6 md:px-0 px-8 lg:px-2 xl:px-8"
      >
        <div className="min-w-max font-secondary text-5xl text-gray-400 lg:text-6xl 2xl:text-8xl">
          {content.heroHeader}
        </div>
        <div className="self-end text-right text-xl xl:text-3xl 2xl:text-4xl">
          <span className="text-right font-secondary tracking-wider text-gray-900">
            {content.heroSubheader}
          </span>
        </div>
        <div className="pt-8 text-right font-subtitle text-sm italic tracking-wider text-gray-900 2xl:text-lg">
          {content.heroQuote}
        </div>
        <div className="pt-8">Buttons placeholder</div>
      </GsapBatchWrapper>
      <GsapFadeInWrapper
        delay={0.5}
        duration={3}
        classes="py-16 col-span-2 md:py-16 xl:py-20 2xl:py-24 px-8 opacity:0"
      >
        <div className="relative h-full w-full opacity-90 grayscale-30 max-md:aspect-square">
          <video
            className="absolute h-full w-full object-cover"
            disableRemotePlayback
            autoPlay
            playsInline
            muted
            controls={false}
            loop
            src="/videos/homepage-video.mp4"
          ></video>
        </div>
      </GsapFadeInWrapper>
    </section>
  );
}

export function HomeHeroLoading() {
  return (
    <section className="relative grid min-h-dvh w-full grid-cols-3 max-md:grid-cols-1 max-md:pt-20">
      <div className="col-span-1 flex h-full flex-col items-end justify-center space-y-3 px-8 md:px-0 lg:space-y-4 lg:px-2 xl:px-8 2xl:space-y-6">
        <div className="h-20 w-2/3 animate-pulse bg-slate-200 max-md:h-12"></div>
        <div className="h-10 w-2/3 animate-pulse bg-slate-200 max-md:h-8"></div>
        <div className="h-10 w-full animate-pulse bg-slate-200 max-md:h-6"></div>
        <div className="max-md:sapce-x-4 flex h-10 w-full justify-end space-x-10">
          <div className="h-10 w-1/3 animate-pulse bg-slate-200"></div>
          <div className="h-10 w-1/3 animate-pulse bg-slate-200"></div>
        </div>
      </div>
      <div className="col-span-2 px-8 py-16 max-md:aspect-square xl:py-20 2xl:py-24">
        <div className="relative h-full w-full animate-pulse bg-slate-200 opacity-90 grayscale-30"></div>
      </div>
    </section>
  );
}
