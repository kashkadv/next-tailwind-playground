import gsap from "gsap";

export function slideInRight(els) {
  [...els].forEach((el, i) => {
    gsap.fromTo(
      el,
      { x: "-400px", opacity: "0" },
      {
        x: "0",
        opacity: "1",
        ease: "elastic.out",
        duration: 1.5,
        delay: i / 4,
      },
    );
  });
}

export function fadeIn(els) {
  [...els].forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, ease: "bounce.in", duration: 1, delay: i / 2 },
    );
  });
}
