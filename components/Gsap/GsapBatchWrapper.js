"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as ga from "../../helpers/gsap-animations";

import { useEffect, useRef } from "react";

export default function GsapBatchWrapper({ children, type, classes }) {
  const ref = useRef();

  const animations = {
    slideInRight: ga.slideInRight,
    fadeIn: ga.fadeIn,
  };

  useEffect(() => {
    const els = ref.current.children;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        onEnter: animations[type](els),
      },
    });
  }, [type]);

  return (
    <div className={classes} ref={ref}>
      {children}
    </div>
  );
}
