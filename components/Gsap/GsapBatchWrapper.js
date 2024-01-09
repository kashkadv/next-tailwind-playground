"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as ga from "../../helpers/gsap-animations";

import { useEffect, useRef, useState } from "react";

export default function GsapBatchWrapper({
  children,
  type,
  classes,
  inViewportOnly = false,
}) {
  const ref = useRef();

  const [mounted, setMounted] = useState(false);

  const animations = {
    slideInRight: ga.slideInRight,
    fadeIn: ga.fadeIn,
  };

  useEffect(() => {
    if (!mounted) setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const els = ref.current.children;
    gsap.registerPlugin(ScrollTrigger);

    if (inViewportOnly) {
      ScrollTrigger.batch(els, {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: { each: 0.15, ease: "elastic.inOut", grid: [1, 3] },
          }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: { each: 0.15, ease: "elastic.inOut", grid: [1, 3] },
          }),
        start: "top bottom+=50%",
        end: "bottom center",
      });

      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(els, { y: 0 }),
      );
    } else {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          onEnter: animations[type](els),
        },
      });
    }
  }, [mounted]);

  return (
    <div className={classes} ref={ref}>
      {children}
    </div>
  );
}
