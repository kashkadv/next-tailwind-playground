import { contentTranslations } from "@/translations/content";
import { wait } from "./helpers";

export const staticContent = {
  homePageData: async function (lang = "en") {
    return new Promise(async (resolve, reject) => {
      try {
        const data = contentTranslations.homePage[lang];
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
};
