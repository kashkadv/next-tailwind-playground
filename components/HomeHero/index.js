import GsapBatchWrapper from "../Gsap/GsapBatchWrapper";
import { GsapFadeInWrapper } from "../Gsap/GsapFadeInWrapper";

export default function HomeHero() {
  return (
    <section className="grid min-h-dvh grid-cols-3">
      <GsapBatchWrapper
        type="slideInRight"
        classes="col-span-1 flex flex-col items-end h-full justify-center space-y-3 lg:space-y-4 2xl:space-y-6 md:px-0 space-y-6 px-8 xl:px-4 lg:px-2 xl:px-8"
      >
        <div className="min-w-max font-secondary text-5xl text-gray-400 lg:text-6xl 2xl:text-8xl">
          Dive into
        </div>
        <div className="self-end text-right text-xl xl:text-3xl 2xl:text-4xl">
          <span className="text-right font-secondary tracking-wider text-gray-900">
            the world of Gushka
          </span>
        </div>
        <div className="pt-8 text-right font-subtitle text-sm italic tracking-wider text-gray-900 2xl:text-lg">
          Experience the Carpathian embrace with each product
        </div>
        <div className="pt-8">Buttons placeholder</div>
      </GsapBatchWrapper>
      <GsapFadeInWrapper
        duration={3}
        classes="col-span-2 py-16 xl:py-20 2xl:py-24 px-8"
      >
        <div className="grayscale-30 relative h-full w-full bg-red-200 opacity-90">
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
