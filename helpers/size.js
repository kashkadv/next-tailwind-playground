import { contentTranslations } from "@/translations/content";

export const prettifySize = (size, units = "metrical", locale = "en") => {
  const length = size.includes("см");

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
