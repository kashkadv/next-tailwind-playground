export const disableScroll = () => {
  const innerWidth = window.innerWidth;
  const offsetWidth = document.body.offsetWidth;

  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${innerWidth - offsetWidth}px`;
};

export const enableScroll = () => {
  document.body.style.overflow = "scroll";
  document.body.style.removeProperty("margin-right");
};
