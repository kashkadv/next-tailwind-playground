import gsap from "gsap";

export function slideInRight(els) {
  [...els].forEach((el, i) => {
    gsap.fromTo(
      el,
      { x: "-500px", opacity: "0" },
      {
        x: "0",
        opacity: "1",
        ease: "elastic.out",
        duration: 2,
        delay: i / 10,
      },
    );
  });
}

export function fadeIn(els) {
  [...els].forEach((el, i) => {
    gsap.fromTo(
      el,
      { rotateY: "90deg", opacity: 0 },
      {
        rotateY: "0",
        opacity: 1,
        ease: "bounce.in",
        duration: 1,
        delay: i / 2,
      },
    );
  });
}
