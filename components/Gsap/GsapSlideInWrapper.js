"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export const GsapSlideInWrapper = ({
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
      { opacity: 0, x: "100%" },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: "back.out",
        scrollTrigger: {
          start: "center bottom",
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
