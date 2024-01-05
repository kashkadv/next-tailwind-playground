"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export const GsapFadeInWrapper = ({
  children,
  duration = 1,
  delay = 0,
  reverse = false,
  classes,
}) => {
  const ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;

    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration,
        delay,
        ease: "expoScale",
        scrollTrigger: {
          start: "top 90%",
          trigger: el,
          toggleActions: `play none none ${reverse ? "reverse" : "none"}`,
        },
      },
    );
  }, []);

  return (
    <div className={classes} ref={ref}>
      {children}
    </div>
  );
};
