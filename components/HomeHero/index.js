import { staticContent } from "@/data/static";
import GsapBatchWrapper from "../Gsap/GsapBatchWrapper";
import { GsapFadeInWrapper } from "../Gsap/GsapFadeInWrapper";

export default async function HomeHero() {
  const content = await staticContent.homePageData("en");

  return (
    <section className="relative grid min-h-dvh grid-cols-3">
      <GsapBatchWrapper
        type="slideInRight"
        classes="col-span-1 flex flex-col items-end h-full justify-center space-y-3 lg:space-y-4 2xl:space-y-6 md:px-0 px-8 lg:px-2 xl:px-8"
      >
        <div className="font-secondary min-w-max text-5xl text-gray-400 lg:text-6xl 2xl:text-8xl">
          {content.heroHeader}
        </div>
        <div className="self-end text-right text-xl xl:text-3xl 2xl:text-4xl">
          <span className="font-secondary text-right tracking-wider text-gray-900">
            {content.heroSubheader}
          </span>
        </div>
        <div className="font-subtitle pt-8 text-right text-sm italic tracking-wider text-gray-900 2xl:text-lg">
          {content.heroQuote}
        </div>
        <div className="pt-8">Buttons placeholder</div>
      </GsapBatchWrapper>
      <GsapFadeInWrapper
        delay={0.5}
        duration={3}
        classes="col-span-2 py-16 xl:py-20 2xl:py-24 px-8 opacity:0"
      >
        <div className="grayscale-30 relative h-full w-full opacity-90">
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
    <section className="relative grid min-h-dvh grid-cols-3">
      <div className="col-span-1 flex h-full flex-col items-end justify-center space-y-3 px-8 md:px-0 lg:space-y-4 lg:px-2 xl:px-8 2xl:space-y-6">
        <div className="h-20 w-2/3 animate-pulse bg-slate-200"></div>
        <div className="h-10 w-2/3 animate-pulse bg-slate-200"></div>
        <div className="h-10 w-full animate-pulse bg-slate-200"></div>
        <div className="flex h-10 w-full justify-end space-x-10">
          <div className="h-10 w-1/3 animate-pulse bg-slate-200"></div>
          <div className="h-10 w-1/3 animate-pulse bg-slate-200"></div>
        </div>
      </div>
      <div className="col-span-2 px-8 py-16 xl:py-20 2xl:py-24">
        <div className="grayscale-30 relative h-full w-full animate-pulse bg-slate-200 opacity-90"></div>
      </div>
    </section>
  );
}
