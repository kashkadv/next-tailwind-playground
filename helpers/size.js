import { contentTranslations } from "@/translations/content";

export const prettifySize = (size) => {
  const length = size.includes("см");

  const locale = localStorage.getItem("locale");
  const units = localStorage.getItem("units");

  if (length) {
    let result = size.replace(
      "см",
      contentTranslations.units[locale].length[units],
    );
    return result;
  } else {
    return size;
  }
};

export const getCheapestSize = (sizes) => {
  let price = false;
  let index = 0;

  sizes.forEach((size, i) => {
    if (price === false) price = size.additional_price;

    if (price && price > size.additional_price) {
      price = size.additional_price;
      index = i;
    }
  });

  return sizes[index];
};
