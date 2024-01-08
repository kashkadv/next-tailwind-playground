"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const GsapSlideInWrapper = ({
  children,
  duration = 1,
  delay = 0,
  reverse = false,
  classes,
}) => {
  const pathname = usePathname();
  const ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;

    ScrollTrigger.refresh();
    window?.addEventListener("resize", function () {
      ScrollTrigger.refresh();
    });

    gsap.fromTo(
      el,
      { opacity: 0, x: "100%" },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: "back.out",
        scrollTrigger: {
          start: "10% bottom",
          trigger: el,
          toggleActions: `play none none ${reverse ? "reverse" : "none"}`,
        },
      },
    );
  }, [pathname]);

  return (
    <div className={classes} ref={ref}>
      {children}
    </div>
  );
};
