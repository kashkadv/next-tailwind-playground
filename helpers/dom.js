export const disableScroll = () => {
  const innerWidth = window.innerWidth;
  const offsetWidth = document.body.offsetWidth;

  document.body.style.overflowY = "hidden";
  document.body.style.marginRight = `${innerWidth - offsetWidth}px`;
};

export const enableScroll = () => {
  document.body.style.overflowY = "auto";
  document.body.style.removeProperty("margin-right");
};
